# Achievement Thumbnails

This directory contains thumbnail images for BINI achievements.

## Image Naming Convention

Each achievement thumbnail should be named using the format: `{id}-{achievement-name}.jpg`

### Current Achievements

1. `01-gold-certification.jpg` - Gold Certification (PH)
2. `02-digital-release.jpg` - First Digital Release
3. `03-myx-awards.jpg` - MYX Music Awards Winner
4. `04-billboard-chart.jpg` - Global Chart-Topper x2
5. `05-global-number-one.jpg` - First #1 on Global Charts
6. `06-world-tour.jpg` - World Tour Announcement
7. `07-spotify-50m.jpg` - Spotify 50M Streams Milestone
8. `08-mtv-ema.jpg` - MTV EMA Nomination
9. `09-pantropiko-platinum.jpg` - Pantropiko Platinum Status
10. `10-fifth-album.jpg` - Album Release - Fifth Mini Album
11. `11-100m-streams.jpg` - 100M Combined Streams
12. `12-spotify-75m.jpg` - Grand Spotify Milestone
13. `13-la-tour.jpg` - First International Tour Stop
14. `14-billboard-hot100.jpg` - Billboard Hot 100 Debut
15. `15-sales-record.jpg` - Record Breaking Album Sales
16. `16-mtv-vma.jpg` - MTV Video Music Awards Nomination
17. `17-music-bank-debut.jpg` - Debut on Music Show
18. `18-asian-music-awards.jpg` - Asian Music Awards Grand Prize
19. `19-youtube-15m.jpg` - 15M YouTube Subscribers

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: Square (1:1 recommended)
- **Size**: 600x600px or larger (will be automatically optimized)
- **File Size**: Keep under 500KB for best performance

## Usage

Images are automatically displayed on achievement detail pages at:
`/achievements/{id}/{slug}`

If an image is missing, the achievement emoji icon will be displayed as a fallback.

## Adding New Achievements

1. Add the new achievement JSON file to `data/achievements/`
2. Upload the thumbnail image to this directory
3. Reference the image path in the JSON file using format: `/images/achievements/{filename}.jpg`
