export function formatRichText(text = ""): string {
	const value = String(text ?? "");

	const escapeHtml = (raw: string) =>
		raw
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");

	const linkPlaceholder = (label: string, url: string) =>
		`@@LINK:${encodeURIComponent(label)}|${encodeURIComponent(url)}@@`;

	const placeholderText = value.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
		(_, label, url) => linkPlaceholder(label, url),
	);

	const escaped = escapeHtml(placeholderText);

	const withLinks = escaped
		.replace(/@@LINK:([^|]+)\|([^@]+)@@/g, (_, encodedLabel, encodedUrl) => {
			const label = decodeURIComponent(encodedLabel);
			const url = decodeURIComponent(encodedUrl);
			return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-500 underline">${label}</a>`;
		})
		.replace(/https?:\/\/[^\s)]+/g, (url) => {
			return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-500 underline">${url}</a>`;
		});

	const formatInline = (raw: string) =>
		raw
			.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
			.replace(/__(.+?)__/g, "<strong>$1</strong>")
			.replace(/\*(.+?)\*/g, "<em>$1</em>");

	// Apply inline formatting but preserve existing HTML tags by tokenizing them
	const safeFormatInline = (raw: string) => {
		const tags: string[] = [];
		const tokenized = raw.replace(/<[^>]+>/g, (m) => {
			tags.push(m);
			return `@@TAG${tags.length - 1}@@`;
		});
		const formatted = formatInline(tokenized);
		return formatted.replace(/@@TAG(\d+)@@/g, (_, idx) => tags[Number(idx)] || "");
	};

	const buildList = (type: "ul" | "ol", items: string[]) => {
		return items.length ? `<${type}>${items.join("")}</${type}>` : "";
	};

	const headingRegex = /^(#{1,6})\s+(.*)$/;
	const unorderedRegex = /^[-+*]\s+(.*)$/;
	const orderedRegex = /^\d+\.\s+(.*)$/;

	const lines = withLinks.split(/\r?\n/);
	const blocks: string[] = [];
	let paragraphLines: string[] = [];
	let currentList: { type: "ul" | "ol"; items: string[] } | null = null;

	const flushParagraph = () => {
		if (!paragraphLines.length) return;
		blocks.push(`<p>${paragraphLines.join("<br/>")}</p>`);
		paragraphLines = [];
	};

	const flushList = () => {
		if (!currentList) return;
		blocks.push(buildList(currentList.type, currentList.items));
		currentList = null;
	};

	const parseListLine = (line: string): { type: "ul" | "ol"; content: string } | null => {
		const unorderedMatch = unorderedRegex.exec(line);
		if (unorderedMatch) {
			return { type: "ul", content: unorderedMatch[1] };
		}
		const orderedMatch = orderedRegex.exec(line);
		if (orderedMatch) {
			return { type: "ol", content: orderedMatch[1] };
		}
		return null;
	};

	for (const rawLine of lines) {
		const line = rawLine.trimEnd();
		if (!line.trim()) {
			flushParagraph();
			flushList();
			continue;
		}

		const headingMatch = headingRegex.exec(line);
		if (headingMatch) {
			flushParagraph();
			flushList();
			const level = Math.min(6, headingMatch[1].length);
			blocks.push(`<h${level}>${safeFormatInline(headingMatch[2].trim())}</h${level}>`);
			continue;
		}

		const listLine = parseListLine(line);
		if (listLine) {
			flushParagraph();
			if (!currentList || currentList.type !== listLine.type) {
				flushList();
				currentList = { type: listLine.type, items: [] };
			}
			currentList.items.push(`<li>${safeFormatInline(listLine.content.trim())}</li>`);
			continue;
		}

		if (currentList) {
			flushList();
		}

		paragraphLines.push(safeFormatInline(line));
	}

	flushParagraph();
	flushList();

	return blocks.join("");
}
