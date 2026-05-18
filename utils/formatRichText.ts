export function formatRichText(text = ""): string {
	const value = String(text ?? "");

	const escapeHtml = (raw: string) =>
		raw
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");

	const escaped = escapeHtml(value);

	const withLinks = escaped.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
		'<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-500 underline">$1</a>',
	);

	const formatInline = (raw: string) =>
		raw
			.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
			.replace(/__(.+?)__/g, "<strong>$1</strong>")
			.replace(/\*(.+?)\*/g, "<em>$1</em>")
			.replace(/_(.+?)_/g, "<em>$1</em>");

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
			blocks.push(`<h${level}>${formatInline(headingMatch[2].trim())}</h${level}>`);
			continue;
		}

		const listLine = parseListLine(line);
		if (listLine) {
			flushParagraph();
			if (!currentList || currentList.type !== listLine.type) {
				flushList();
				currentList = { type: listLine.type, items: [] };
			}
			currentList.items.push(`<li>${formatInline(listLine.content.trim())}</li>`);
			continue;
		}

		if (currentList) {
			flushList();
		}

		paragraphLines.push(formatInline(line));
	}

	flushParagraph();
	flushList();

	return blocks.join("");
}
