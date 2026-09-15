# Lab & Lore by Neri - Revamped Static Site

This package is ready for GitHub Pages at https://labandlorebyneri.github.io/

## Important: preserve The Loom Room
This package intentionally does NOT include the existing `theloomroom/` directory. When deploying, **merge/overwrite these files at the repository root. Do not delete your existing `theloomroom/` folder.** The new site links to `/theloomroom/`.

## Deploy
1. Back up the current repository.
2. Upload the contents of this folder to the root of `labandlorebyneri.github.io`.
3. Choose **Add file > Upload files** in GitHub, or copy the files with Git locally.
4. Allow GitHub Pages a few minutes to publish the commit.
5. Check the homepage, About, Insights, Work, Contact, series pages, and the existing article URL.
6. In Google Search Console, re-submit `https://labandlorebyneri.github.io/sitemap.xml` if needed.

## Existing URLs preserved
- `/`
- `/about.html`
- `/blog.html`
- `/engagement.html`
- `/say-hello.html`
- `/series/lab-and-lore.html`
- `/series/love-and-lord.html`
- `/series/loud-and-load.html`
- `/posts/why-i-created-this-space.html`

## Fonts
The site loads Google Fonts from the web:
- Noto Serif Display for editorial headlines.
- Inter for body copy, navigation, labels, and interface text.

No font files are included in this package.

## Design tokens
- Deep Ink: `#0F2848`
- Electric Blue: `#0455DF`
- Coral: `#FD7D62`
- Sunflower: `#F6BA32`
- Mint: `#A6D4C0`
- Warm Ivory: `#FDFCF7`
- Mint Wash: `#EEF5ED`

## Edit content
Most site-wide styling is in `assets/css/site.css`.
Small navigation and reveal behavior is in `assets/js/site.js`.
Each page is plain HTML and can be edited directly.
