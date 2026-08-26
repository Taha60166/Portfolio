# Taha Ahmed — Unity Game Developer Portfolio

A cinematic, dark-themed personal portfolio website. Built around Unity's own gizmo-cyan and amber colour language, a custom scene-view hero framing device, and a data-driven architecture so every project, certificate and contact detail lives in one file.

---

## Quick start

1. Open `index.html` in any modern browser — no build step required.
2. Open `assets/js/content.js` and fill in your project titles, descriptions and links.
3. Drop your video files in `assets/video/` and screenshot images in `assets/img/`.
4. Done.

---

## File map

```
portfolio/
├── index.html               ← Structure (rarely needs touching)
├── assets/
│   ├── css/
│   │   └── style.css        ← Design system tokens, layout, components
│   ├── js/
│   │   ├── content.js       ← ALL YOUR CONTENT GOES HERE
│   │   └── main.js          ← Rendering and interaction (don't edit this)
│   ├── img/                 ← Drop certificate + screenshot images here
│   └── video/               ← Drop gameplay capture videos here
└── README.md
```

---

## Filling in your projects

Open `assets/js/content.js` and find the `projects` array. Each project looks like this:

```js
{
  id: "project-01",
  number: "01",
  title: "Space Shooter",           // ← replace with real title
  type: "2D space shooter",         // ← e.g. "2D action platformer"
  summary: "A twin-stick …",        // ← 1–2 sentence description
  tags: ["unity", "2d", "gameplay"],// ← controls filter buttons
  featured: true,                   // ← true = wider card on desktop
  tech: ["Unity", "C#"],
  features: [
    "Custom projectile pool system",
    "Enemy wave manager",
    "Procedural background scroller"
  ],
  youtube:   "Xb7HM3m_Kis",                          // ← YouTube video ID or full URL for modal player
  video:     "assets/video/project-01-preview.mp4", // ← short silent hover clip for card (optional)
  poster:    "assets/img/project-01.jpg",            // ← still frame (optional; auto-uses YT thumbnail if empty)
  role: "Solo developer — all gameplay code and UI.",
  process: [
    "Started with a moving ship and one bullet to get the feel right.",
    "Added enemy waves once core movement was fun.",
    "Polished VFX and audio in the final week."
  ],
  gameplay: [
    "Top-down movement with mouse aim",
    "Three enemy types with different behaviours",
    "Power-ups drop from defeated enemies"
  ],
  challenges: "The enemy wave pacing took the most iteration …",
  learned: "I'm much faster at building pooled projectile systems now.",
  screenshots: [
    "assets/img/project-01-shot-a.jpg",
    "assets/img/project-01-shot-b.jpg"
  ],
  links: {
    play:     "https://your-itch-page/game",
    github:   "https://github.com/you/repo",
    download: ""
  }
}
```

Leave any field as an empty string `""` and the corresponding button is hidden automatically. Placeholders are generated for missing images and videos.

---

## Adding videos & YouTube

Each project can use YouTube for full gameplay videos and an optional local clip for card hover previews:

| Field | Source | Used for |
|---|---|---|
| `youtube` | YouTube ID or URL (e.g. `"Xb7HM3m_Kis"`) | Full HD gameplay with audio inside the project modal popup + direct YouTube link |
| `video` | Local file (e.g. `"assets/video/project-01-preview.mp4"`) | Plays muted on card hover (10–15s, under 2 MB) |
| `poster` | Image file (e.g. `"assets/img/project-01.jpg"`) | Card poster. If left empty, YouTube's HD thumbnail is used automatically! |

```js
youtube: "Xb7HM3m_Kis", // or "https://youtu.be/Xb7HM3m_Kis"
video:   "assets/video/project-01-preview.mp4", // optional hover preview
```

**How YouTube works:**
- When someone clicks a project, a privacy-enhanced YouTube player (`youtube-nocookie.com`) opens inside the pop-up modal and starts playing automatically.
- A "Watch on YouTube" button is also automatically added to the project links.
- If you don't provide a custom `poster` image, the project card automatically pulls the high-definition thumbnail from YouTube.
- When closing the popup modal, the YouTube player is immediately cleaned up so audio/video stops right away.

---

## Adding certificate images

Take a screenshot of each certificate or export as JPG/PNG. Name them `cert-01.jpg` … `cert-04.jpg` and place them in `assets/img/`. Then update the `image` field for each certificate in content.js:

```js
image: "assets/img/cert-01.jpg"
```

Clicking the certificate image opens it in a lightbox.

---

## Updating social links

In content.js, find the `contact` section and paste your real URLs into the `url` fields. Any channel with an empty `url` still shows in the list — your handle is visible — but the whole row links to `#contact` instead of an external page.

```js
{ name: "GitHub", icon: "github", handle: "your-username", url: "https://github.com/your-username" }
```

---

## Updating the contact form

The form uses `mailto:` — it opens the visitor's email app with the subject and message pre-filled. Set your email address:

```js
contact: {
  email: "your@email.com",
  …
}
```

If you'd prefer a real form service (Formspree, Netlify Forms, etc.), replace the `submit` handler at the bottom of `main.js` with the service's fetch call. The form fields are standard named inputs: `name`, `email`, `subject`, `message`.

---

## Hosting

The site is static HTML/CSS/JS with no build step. Upload the entire `portfolio/` folder to:

- **GitHub Pages** — push to a repo and enable Pages in Settings.
- **Netlify** — drag the folder onto netlify.com/drop.
- **Vercel** — `vercel --prod` from the folder.
- **itch.io** — zip the folder and upload as an HTML project.

For the best results, serve it over HTTPS (required for video autoplay on some browsers).

---

## Browser support

Chrome 90+, Firefox 90+, Safari 14+, Edge 90+. Older browsers get a graceful static layout — no JS errors, no layout breakage, just reduced animation.

---

## Editing checklist

Project 01 is partly done already — its video, poster and screenshots are in place, and the gameplay details visible in the footage have been filled in. What it still needs is the title and the four things only you can answer: `role`, `process`, `challenges`, `learned`.

- [ ] Replace all `[Project Name]` and `FILL:` markers in `content.js`
- [ ] Add a preview + full video pair per project (`project-0N-preview.mp4`, `project-0N-full.mp4`)
- [ ] Add a poster frame per project (`assets/img/project-0N.jpg`)
- [ ] Add certificate screenshots (`assets/img/cert-01.jpg` … `cert-04.jpg`)
- [ ] Set `contact.email` and social link URLs
- [ ] Add an Open Graph preview image at `assets/img/og-cover.jpg`
- [ ] Uncomment the Open Graph block in `index.html` and set your real domain
- [ ] Update `<meta name="description">` in `index.html` if you want a custom snippet
- [ ] Before uploading, delete raw camera-quality captures from `assets/video/` — only the `-preview` and `-full` files need to ship

---

© 2026 Taha Ahmed
