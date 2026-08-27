/* =============================================================================
   main.js — rendering and interaction. You shouldn't need to edit this file.
   All your content lives in content.js.
   ============================================================================= */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  if (!D) { console.error("content.js did not load — check the script tag order."); return; }

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------- ICON SET (inline SVG) --------------------------- */
  const P = (d, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}${extra || ""}</svg>`;
  const ICONS = {
    unity:    P('<path d="M12 3.2 19 7.1v9.8L12 20.8 5 16.9V7.1z"/><path d="M12 8.4v7.2M8.6 10.3l6.8 3.9M15.4 10.3l-6.8 3.9"/>'),
    code:     P('<path d="m9 7-5 5 5 5M15 7l5 5-5 5"/>'),
    gamepad:  P('<rect x="2.5" y="7" width="19" height="10.5" rx="4"/><path d="M7 10.5v3M5.5 12h3M15.5 11.4h.01M17.8 13.2h.01"/>'),
    cpu:      P('<rect x="6.5" y="6.5" width="11" height="11" rx="2"/><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21"/>'),
    square:   P('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 14h5l2-3 2 4 2-2h3"/>'),
    cube:     P('<path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z"/><path d="M3.5 7 12 11.4 20.5 7M12 11.4v9.8"/>'),
    puzzle:   P('<path d="M10 4h4v2.2a1.8 1.8 0 1 0 3.6 0V4H20v4h-2.2a1.8 1.8 0 1 0 0 3.6H20V20h-6v-2.2a1.8 1.8 0 1 0-3.6 0V20H4v-6h2.2a1.8 1.8 0 1 0 0-3.6H4V4h6z"/>'),
    joystick: P('<circle cx="12" cy="7" r="3"/><path d="M12 10v6M8 20h8M9.5 16.5h5"/>'),
    layout:   P('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'),
    film:     P('<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M7 5v14M17 5v14M2.5 12h19M2.5 8.5h4.5M2.5 15.5h4.5M17 8.5h4.5M17 15.5h4.5"/>'),
    orbit:    P('<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9.5" ry="4.4" transform="rotate(-22 12 12)"/>'),
    map:      P('<path d="m9 4 6 2 5.5-2v14L15 20l-6-2-5.5 2V6z"/><path d="M9 4v14M15 6v14"/>'),
    keyboard: P('<rect x="2.5" y="6.5" width="19" height="11" rx="2"/><path d="M6 10h.01M9.5 10h.01M13 10h.01M16.5 10h.01M8 14h8"/>'),
    git:      P('<circle cx="7" cy="6.5" r="2.4"/><circle cx="7" cy="17.5" r="2.4"/><circle cx="17" cy="12" r="2.4"/><path d="M7 8.9v6.2M9.4 6.9c4 .5 5.3 2 5.5 4.4M9.4 17.1c4-.5 5.3-2 5.5-4.4"/>'),
    bulb:     P('<path d="M9 17.5h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1 .9 1.6h5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3z"/>'),
    ruler:    P('<path d="M3.5 15 15 3.5 20.5 9 9 20.5z"/><path d="M7.5 11 10 13.5M11 7.5 13.5 10"/>'),
    wrench:   P('<path d="M14.7 6.3a3.9 3.9 0 0 0 5.1 5.1l-8 8a2.6 2.6 0 0 1-3.7-3.7z"/><path d="M6.5 17.5h.01"/>'),
    bug:      P('<rect x="7.5" y="8" width="9" height="11" rx="4.5"/><path d="M9.5 8V6.5a2.5 2.5 0 0 1 5 0V8M4.5 11h3M16.5 11h3M4.5 15.5h3M16.5 15.5h3"/>'),
    package:  P('<path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z"/><path d="M3.5 7 12 11.4 20.5 7M12 11.4v9.8M7.7 4.9l8.6 4.3"/>'),
    github:   P('<path d="M9 20.5c-4 1.2-4-2.2-5.5-2.8m13 5.3v-3.6c0-1 .1-1.5-.5-2.1 2.6-.3 4.5-1.6 4.5-5a4.2 4.2 0 0 0-1.1-2.9 3.8 3.8 0 0 0-.1-2.9s-1.2-.4-3.9 1.4a9.6 9.6 0 0 0-5 0C7.7 3.6 6.5 4 6.5 4a3.8 3.8 0 0 0-.1 2.9A4.2 4.2 0 0 0 5.3 9.8c0 3.4 1.9 4.7 4.5 5-.6.6-.6 1.2-.5 2.1v3.6"/>'),
    linkedin: P('<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5V16M8 7.6h.01M12 16v-3.2a2 2 0 0 1 4 0V16M12 10.5V16"/>'),
    mail:     P('<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
    youtube:  P('<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10.5 9.5 5 2.5-5 2.5z"/>'),
    instagram:P('<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'),
    link:     P('<path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/>'),
    play:     P('<path d="M8.5 6.8 17 12l-8.5 5.2z"/>'),
    zoom:     P('<circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.4 15.4 4.1 4.1M8.6 10.8h4.4M10.8 8.6v4.4"/>'),
    arrow:    P('<path d="M5 12h13"/><path d="m12 5 7 7-7 7"/>'),
    diag:     P('<path d="M7 17 17 7"/><path d="M10 7h7v7"/>')
  };
  const icon = (n) => ICONS[n] || ICONS.link;

  /* Extract 11-char YouTube ID from ID or URL */
  function getYoutubeId(val) {
    if (!val) return "";
    const s = String(val).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
    const match = s.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : (s.length === 11 ? s : "");
  }

  /* ---------------- Generated placeholder art (no external images) ---------------- */
  function placeholderSVG(label, sub, w, h, accent) {
    const a = accent || "#35E6D0";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#141922"/><stop offset="1" stop-color="#0B0E13"/>
</linearGradient>
<pattern id="g" width="34" height="34" patternUnits="userSpaceOnUse">
<path d="M34 0H0v34" fill="none" stroke="${a}" stroke-opacity=".11" stroke-width="1"/>
</pattern>
<radialGradient id="gl" cx="50%" cy="46%" r="58%">
<stop offset="0" stop-color="${a}" stop-opacity=".2"/><stop offset="1" stop-color="${a}" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${w}" height="${h}" fill="url(#bg)"/>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<rect width="${w}" height="${h}" fill="url(#gl)"/>
<g fill="none" stroke="${a}" stroke-opacity=".5" stroke-width="1.4">
<rect x="18" y="18" width="26" height="26" stroke-opacity=".32"/>
<path d="M${w / 2 - 34} ${h / 2 - 20}h68v40h-68z" stroke-opacity=".22"/>
<path d="M${w / 2} ${h / 2 - 34}v68M${w / 2 - 40} ${h / 2}h80" stroke-opacity=".16"/>
</g>
<text x="${w / 2}" y="${h / 2 + 4}" fill="#E9EEF3" fill-opacity=".9" font-family="IBM Plex Mono, monospace" font-size="15" letter-spacing="3.5" text-anchor="middle">${label}</text>
<text x="${w / 2}" y="${h / 2 + 28}" fill="#778394" font-family="IBM Plex Mono, monospace" font-size="10.5" letter-spacing="2.4" text-anchor="middle">${sub}</text>
</svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /* ================================== BINDS ================================== */
  const prof = D.profile || {};
  $$("[data-bind]").forEach((el) => {
    const v = prof[el.getAttribute("data-bind")];
    if (v) el.textContent = v;
  });
  document.title = `${prof.name || "Portfolio"} — ${prof.role || "Game Developer"}`;
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* --------------------------------- HERO META -------------------------------- */
  const heroMeta = $("#heroMeta");
  if (heroMeta && prof.heroMeta) {
    heroMeta.innerHTML = prof.heroMeta.map((m) =>
      `<div class="hmeta"><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("");
  }

  /* ------------------------- HERO BACKDROP (real art) -------------------------
     Uses the first project poster that actually exists. Deliberately not a
     generated placeholder: if there's no real gameplay art yet, the hero keeps
     its clean grid rather than showing a fake screenshot. Preloaded first so it
     fades in complete instead of painting halfway through the animation. */
  const heroPlate = $("#heroPlate");
  if (heroPlate && !heroPlate.querySelector("video")) {
    const art = (D.projects || []).find((p) => p.poster || getYoutubeId(p.youtube));
    if (art) {
      const posterSrc = art.poster || (getYoutubeId(art.youtube) ? `https://img.youtube.com/vi/${getYoutubeId(art.youtube)}/maxresdefault.jpg` : "");
      if (posterSrc) {
        const pre = new Image();
        pre.onload = () => { heroPlate.style.backgroundImage = `url("${posterSrc}")`; };
        pre.src = posterSrc;
      }
    }
  }

  /* ----------------------------------- ABOUT ---------------------------------- */
  const aboutProse = $("#aboutProse");
  if (aboutProse && prof.about) {
    aboutProse.innerHTML = prof.about.map((p) => `<p>${esc(p)}</p>`).join("");
  }
  const aboutTags = $("#aboutTags");
  if (aboutTags && prof.aboutTags) {
    aboutTags.innerHTML = prof.aboutTags.map((t) => `<li>${esc(t)}</li>`).join("");
  }
  const statGrid = $("#statGrid");
  if (statGrid && prof.stats) {
    statGrid.innerHTML = prof.stats.map((s) => {
      const num = /^\d+$/.test(String(s.value));
      return `<div class="stat">
        <span class="stat__value" ${num ? `data-count="${esc(s.value)}" data-suffix="${esc(s.suffix || "")}"` : ""}>${num ? "0" + esc(s.suffix || "") : esc(s.value)}</span>
        <span class="stat__label">${esc(s.label)}</span>
      </div>`;
    }).join("");
  }

  /* ---------------------------------- SKILLS ---------------------------------- */
  const skillGrid = $("#skillGrid");
  if (skillGrid && D.skills) {
    skillGrid.innerHTML = D.skills.map((s, i) => `
      <article class="skill reveal" style="--d:${Math.min(i * 45, 400)}ms">
        <span class="skill__icon">${icon(s.icon)}</span>
        <h3 class="skill__name">${esc(s.name)}</h3>
        <p class="skill__note">${esc(s.note)}</p>
      </article>`).join("");
  }

  /* ---------------------------------- PROCESS --------------------------------- */
  const processList = $("#processList");
  if (processList && D.process) {
    processList.innerHTML = D.process.map((p, i) => `
      <li class="pstep reveal" style="--d:${i * 70}ms">
        <span class="pstep__num">Step ${esc(p.step)}</span>
        <span class="pstep__icon">${icon(p.icon)}</span>
        <h3 class="pstep__title">${esc(p.title)}</h3>
        <p class="pstep__note">${esc(p.note)}</p>
        <span class="pstep__rail" aria-hidden="true"></span>
      </li>`).join("");
  }

  /* ---------------------------------- JOURNEY --------------------------------- */
  const journeyList = $("#journeyList");
  if (journeyList && D.journey) {
    journeyList.innerHTML = D.journey.map((j, i) => `
      <li class="jitem reveal${j.current ? " is-current" : ""}" style="--d:${i * 80}ms">
        <span class="jitem__dot" aria-hidden="true"></span>
        <p class="jitem__when">${esc(j.when)}</p>
        <h3 class="jitem__title">${esc(j.title)}</h3>
        <p class="jitem__note">${esc(j.note)}</p>
      </li>`).join("");
  }

  /* ------------------------------- CERTIFICATES ------------------------------- */
  const certGrid = $("#certGrid");
  if (certGrid && D.certificates) {
    certGrid.innerHTML = D.certificates.map((c, i) => {
      const img = c.image || placeholderSVG(esc(c.slug || "CERTIFICATE"), "ADD IMAGE IN content.js", 800, 600, "#FFB23F");
      const alt = c.image ? `${c.course} certificate` : `${c.slug} placeholder`;
      return `<article class="cert reveal" style="--d:${i * 70}ms">
        <button class="cert__shot" data-lightbox="${esc(img)}" data-caption="${esc(c.course)} — ${esc(c.issuer)}" aria-label="Open ${esc(c.course)} certificate larger">
          <img src="${esc(img)}" alt="${esc(alt)}" loading="lazy">
          <span class="cert__zoom">${icon("zoom")}</span>
        </button>
        <div class="cert__body">
          <p class="cert__slug">${esc(c.slug)}</p>
          <h3 class="cert__course">${esc(c.course)}</h3>
          <p class="cert__issuer"><strong>${esc(c.issuer)}</strong>${c.school ? " · " + esc(c.school) : ""}</p>
          <dl class="cert__meta">
            <div><dt>Completed</dt><dd>${esc(c.completed)}</dd></div>
            ${c.credentialId ? `<div><dt>Credential</dt><dd>${esc(c.credentialId)}</dd></div>` : ""}
          </dl>
          ${c.url ? `<a class="btn btn--line cert__cta" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">View Certificate</a>`
                  : `<button class="btn btn--line cert__cta" data-lightbox="${esc(img)}" data-caption="${esc(c.course)}">View Certificate</button>`}
        </div>
      </article>`;
    }).join("");
  }

  /* --------------------------------- CONTACT ---------------------------------- */
  const channelList = $("#channelList");
  const footSocial = $("#footSocial");
  const chans = (D.contact && D.contact.channels) ? D.contact.channels.filter((c) => c.name) : [];
  if (channelList) {
    channelList.innerHTML = chans.map((c) => {
      const href = c.url || (c.icon === "mail" && D.contact.email ? "mailto:" + D.contact.email : "");
      const tag = href ? "a" : "span";
      const attrs = href ? ` href="${esc(href)}"${href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}` : "";
      return `<li class="channel"><${tag}${attrs}>
        <span class="channel__icon">${icon(c.icon)}</span>
        <span class="channel__text">
          <span class="channel__name">${esc(c.name)}</span>
          <span class="channel__handle">${esc(c.handle || "Add your link in content.js")}</span>
        </span>
        <span class="channel__arrow">${icon("diag")}</span>
      </${tag}></li>`;
    }).join("");
  }
  if (footSocial) {
    footSocial.innerHTML = chans.map((c) => {
      const href = c.url || (c.icon === "mail" && D.contact.email ? "mailto:" + D.contact.email : "#contact");
      return `<li><a class="sicon" href="${esc(href)}"${href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""} aria-label="${esc(c.name)}">${icon(c.icon)}</a></li>`;
    }).join("");
  }

  /* ================================= PROJECTS ================================= */
  const grid = $("#projectGrid");
  const emptyMsg = $("#projectEmpty");
  const projects = D.projects || [];

  function projectPoster(p) {
    if (p.poster) return p.poster;
    const ytId = getYoutubeId(p.youtube);
    if (ytId) return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
    return placeholderSVG(`PROJECT ${esc(p.number)}`, "ADD VIDEO / POSTER", 1280, 720);
  }

  function cardHTML(p, i) {
    const poster = projectPoster(p);
    const ytId = getYoutubeId(p.youtube);
    const isGif = (p.gif || (p.video && p.video.toLowerCase().endsWith('.gif')));
    const gifSrc = p.gif || (isGif ? p.video : '');
    const videoSrc = (!isGif && p.video) ? p.video : '';
    const hasPreview = !!(gifSrc || videoSrc);
    const tags = (p.tags || []).join(" ");
    const feats = (p.features || []).slice(0, 3);
    const playLabel = hasPreview ? "Hover to preview" : (ytId ? "Watch video" : "Video coming");

    return `<article class="pcard reveal${p.featured ? " is-featured" : ""}" data-tags="${esc(tags)}" data-id="${esc(p.id)}" style="--d:${Math.min(i * 60, 320)}ms">
      <button class="pcard__media" data-open="${esc(p.id)}" aria-label="Open ${esc(p.title)} details">
        <img class="pcard__poster" src="${esc(poster)}" alt="${p.poster || ytId ? esc(p.title) + " gameplay still" : "Placeholder art for project " + esc(p.number)}" loading="lazy">
        ${gifSrc ? `<img class="pcard__gif" src="${esc(gifSrc)}" alt="${esc(p.title)} animated preview" loading="lazy">` : ""}
        ${videoSrc ? `<video class="pcard__video" src="${esc(videoSrc)}" muted loop playsinline preload="none" aria-hidden="true"></video>` : ""}
        <span class="pcard__frame" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <span class="pcard__num" aria-hidden="true">${esc(p.number)}</span>
        <span class="pcard__badge"><i></i>Unity</span>
        <span class="pcard__play">${icon("play")}${playLabel}</span>
      </button>

      <div class="pcard__body">
        <p class="pcard__type">${esc(p.type)}</p>
        <h3 class="pcard__title"><span>${esc(p.number)} —</span> ${esc(p.title)}</h3>
        <p class="pcard__summary">${esc(p.summary)}</p>
        ${feats.length ? `<ul class="pcard__features">${feats.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        <div class="pcard__foot">
          <div class="chips">${(p.tech || []).map((t) => `<span class="chip${t.toLowerCase() === "unity" ? " chip--unity" : ""}">${esc(t)}</span>`).join("")}</div>
          <button class="pcard__cta" data-open="${esc(p.id)}">View Project ${icon("arrow")}</button>
        </div>
      </div>
    </article>`;
  }

  if (grid) grid.innerHTML = projects.map(cardHTML).join("");

  /* hover video preview */
  $$(".pcard").forEach((card) => {
    const vid = $(".pcard__video", card);
    if (!vid) return;
    let timer = null;
    const start = () => {
      if (reduceMotion) return;
      timer = setTimeout(() => {
        vid.preload = "auto";
        const play = vid.play();
        if (play && play.catch) play.catch(() => {});
        card.classList.add("is-playing");
      }, 130);
    };
    const stop = () => {
      clearTimeout(timer);
      card.classList.remove("is-playing");
      try { vid.pause(); vid.currentTime = 0; } catch (e) {}
    };
    card.addEventListener("mouseenter", start);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focusin", start);
    card.addEventListener("focusout", stop);
  });

  /* filters */
  const filterBar = $("#filters");
  if (filterBar && D.filters) {
    const count = (key) => key === "all" ? projects.length
      : projects.filter((p) => (p.tags || []).includes(key)).length;
    filterBar.innerHTML = D.filters.map((f, i) =>
      `<button class="fbtn${i === 0 ? " is-active" : ""}" type="button" aria-pressed="${i === 0}" data-filter="${esc(f.key)}">${esc(f.label)}<span class="fbtn__count">${count(f.key)}</span></button>`
    ).join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".fbtn");
      if (!btn) return;
      const key = btn.dataset.filter;
      $$(".fbtn", filterBar).forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });

      let shown = 0;
      // 220ms matches the `opacity .22s` transition on .pcard, so the card is
      // fully faded before display:none removes it from the grid.
      const FADE_MS = reduceMotion ? 0 : 220;
      $$(".pcard", grid).forEach((card) => {
        const tags = (card.dataset.tags || "").split(" ");
        const match = key === "all" || tags.includes(key);
        if (match) shown++;
        card.classList.add("is-hiding");
        setTimeout(() => {
          card.classList.toggle("is-out", !match);
          if (match) requestAnimationFrame(() => card.classList.remove("is-hiding"));
        }, FADE_MS);
      });
      if (emptyMsg) emptyMsg.hidden = shown !== 0;
    });
  }

  /* ================================== MODAL ================================== */
  const modal = $("#projectModal");
  const modalBody = $("#modalBody");
  let lastFocus = null;

  function block(title, inner) {
    return `<section class="mblock"><h4 class="mblock__title">${title}</h4>${inner}</section>`;
  }

  function modalHTML(p) {
    const poster = projectPoster(p);
    const ytId = getYoutubeId(p.youtube);
    const full = p.videoFull || p.video;
    const hasVideo = !!(ytId || full);

    let media = "";
    if (ytId) {
      media = `<iframe class="mhero__iframe" src="https://www.youtube.com/embed/${esc(ytId)}?autoplay=1&rel=0" title="${esc(p.title)} gameplay video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else if (full) {
      media = `<video src="${esc(full)}" poster="${esc(p.poster || poster)}" controls playsinline preload="metadata"></video>`;
    } else {
      media = `<img src="${esc(poster)}" alt="${p.poster ? esc(p.title) + " gameplay still" : "Placeholder art for project " + esc(p.number)}">`;
    }

    const shots = (p.screenshots && p.screenshots.length)
      ? p.screenshots
      : [1, 2, 3].map((n) => placeholderSVG(`SHOT 0${n}`, "ADD SCREENSHOT", 640, 400));

    // The Unity badge + tech chips overlay the bottom-left of the hero, which is
    // exactly where video controls sit. So when there's
    // real footage the badges move out of the hero and sit above the title
    // instead, and the hero's darkening gradient is suppressed with it.
    const tag = `<span class="pcard__badge" style="position:static"><i></i>Unity</span>
          <span class="chips">${(p.tech || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</span>`;

    return `
      <div class="mhero${hasVideo ? " has-video" : ""}${ytId ? " has-yt" : ""}">
        ${media}
        ${hasVideo ? "" : `<div class="mhero__tag">${tag}</div>`}
      </div>

      <div class="mbody">
        ${hasVideo ? `<div class="mtags">${tag}</div>` : ""}
        <h3 class="mtitle" id="modalTitle"><span>${esc(p.number)} —</span> ${esc(p.title)}</h3>
        <p class="msummary">${esc(p.summary)}</p>

        <dl class="mmeta">
          <div><dt>Project type</dt><dd>${esc(p.type)}</dd></div>
          <div><dt>Engine</dt><dd>Unity</dd></div>
          <div><dt>Language</dt><dd>C#</dd></div>
          <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
        </dl>

        <div class="mgrid">
          <div>
            ${block("Development process", `<ol class="mlist mlist--num">${(p.process || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`)}
            ${block("Gameplay features", `<ul class="mlist">${(p.gameplay || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`)}
            ${block("Key systems", `<ul class="mlist">${(p.features || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`)}
          </div>
          <div>
            ${block("Challenges", `<p>${esc(p.challenges)}</p>`)}
            ${block("What I learned", `<p>${esc(p.learned)}</p>`)}
            ${block("Technologies used", `<div class="chips">${(p.tech || []).map((t) => `<span class="chip${t.toLowerCase() === "unity" ? " chip--unity" : ""}">${esc(t)}</span>`).join("")}</div>`)}
            ${block("Screenshots & gallery", `<div class="mshots">${shots.map((s, i) => `
              <button class="mshot" data-lightbox="${esc(s)}" data-caption="${esc(p.title)} — image ${i + 1}" aria-label="Open image ${i + 1} larger">
                <img src="${esc(s)}" alt="${esc(p.title)} screenshot ${i + 1}" loading="lazy">
              </button>`).join("")}</div>`)}
          </div>
        </div>

        <div class="mlinks">
          ${p.links && p.links.play ? `<a class="btn btn--primary" href="${esc(p.links.play)}" target="_blank" rel="noopener noreferrer">Play the build</a>` : ""}
          ${ytId ? `<a class="btn btn--ghost" href="https://youtu.be/${esc(ytId)}" target="_blank" rel="noopener noreferrer">${icon("youtube")} YouTube</a>` : ""}
          ${p.links && p.links.github ? `<a class="btn btn--ghost" href="${esc(p.links.github)}" target="_blank" rel="noopener noreferrer">${icon("github")} GitHub</a>` : ""}
          ${p.links && p.links.download ? `<a class="btn btn--ghost" href="${esc(p.links.download)}" target="_blank" rel="noopener noreferrer">Download</a>` : ""}
          <a class="btn btn--line" href="#contact" data-close>Ask me about this project</a>
        </div>
      </div>`;
  }

  function openModal(id) {
    const p = projects.find((x) => x.id === id);
    if (!p || !modal) return;
    lastFocus = document.activeElement;
    modalBody.innerHTML = modalHTML(p);
    modal.hidden = false;
    document.body.classList.add("is-locked");
    modal.setAttribute("aria-labelledby", "modalTitle");
    $("#modalClose").focus();
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modalBody.innerHTML = "";
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) { openModal(open.dataset.open); return; }
    if (e.target.closest("#modalClose") || e.target.closest(".modal__backdrop")) closeModal();
    if (e.target.closest(".mlinks [data-close]")) closeModal();
  });

  /* ================================= LIGHTBOX ================================ */
  const lb = $("#lightbox"), lbImg = $("#lightboxImg"), lbCap = $("#lightboxCap");
  let lbFocus = null;

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-lightbox]");
    if (t && lb) {
      lbFocus = document.activeElement;
      lbImg.src = t.dataset.lightbox;
      lbImg.alt = t.dataset.caption || "Enlarged image";
      lbCap.textContent = t.dataset.caption || "";
      lb.hidden = false;
      document.body.classList.add("is-locked");
      $("#lightboxClose").focus();
      return;
    }
    if (e.target.closest("#lightboxClose") || e.target.closest(".lightbox__backdrop")) closeLightbox();
  });
  function closeLightbox() {
    if (!lb || lb.hidden) return;
    lb.hidden = true; lbImg.src = "";
    if (!modal || modal.hidden) document.body.classList.remove("is-locked");
    if (lbFocus) lbFocus.focus();
  }

  /* focus trap + escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeLightbox(); closeModal(); closeNav(); return; }
    if (e.key !== "Tab") return;
    const open = (lb && !lb.hidden) ? lb : (modal && !modal.hidden) ? modal : null;
    if (!open) return;
    const f = $$('a[href],button:not([disabled]),input,textarea,video[controls],[tabindex]:not([tabindex="-1"])', open)
      .filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* =================================== NAV =================================== */
  const nav = $("#siteNav"), burger = $("#burger"), navLinks = $("#navLinks"), bar = $("#scrollBar");
  function closeNav() {
    if (!burger || !navLinks) return;
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  }
  if (burger) {
    burger.addEventListener("click", () => {
      const on = burger.classList.toggle("is-open");
      navLinks.classList.toggle("is-open", on);
      burger.setAttribute("aria-expanded", String(on));
      burger.setAttribute("aria-label", on ? "Close menu" : "Open menu");
    });
  }
  $$(".nav__link, .nav__cta-mobile").forEach((a) => a.addEventListener("click", closeNav));

  const sections = $$("main section[id]");
  const navMap = {};
  $$(".nav__link").forEach((a) => { navMap[a.getAttribute("href").slice(1)] = a; });

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("is-stuck", y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

      let active = sections[0];
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= 140) active = s; });
      Object.values(navMap).forEach((a) => a.classList.remove("is-active"));
      if (active && navMap[active.id]) navMap[active.id].classList.add("is-active");
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =============================== SCROLL REVEAL ============================= */
  const revealables = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
        const v = $(".stat__value[data-count]", en.target) || (en.target.matches(".stat__value[data-count]") ? en.target : null);
        if (v) countUp(v);
        $$(".stat__value[data-count]", en.target).forEach(countUp);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: .12 });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-in"));
    $$(".stat__value[data-count]").forEach((el) => { el.textContent = el.dataset.count + (el.dataset.suffix || ""); });
  }

  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const dur = 1100; const t0 = performance.now();
    (function step(now) {
      const k = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ============================== CONTACT FORM ============================== */
  const form = $("#contactForm"), status = $("#formStatus");
  if (form) {
    const setError = (input, msg) => {
      const slot = $(`[data-error-for="${input.id}"]`, form);
      if (slot) slot.textContent = msg || "";
      input.classList.toggle("has-error", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
    };
    form.addEventListener("input", (e) => {
      if (e.target.classList.contains("field__input")) setError(e.target, "");
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cf-name"), email = $("#cf-email"), subject = $("#cf-subject"), message = $("#cf-message");
      let ok = true;
      if (!name.value.trim()) { setError(name, "Add your name so I know who I'm replying to."); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) { setError(email, "Check the email address — I'll reply to it."); ok = false; }
      if (!subject.value.trim()) { setError(subject, "A short subject helps me prioritise."); ok = false; }
      if (message.value.trim().length < 12) { setError(message, "Tell me a little more about the project."); ok = false; }

      if (!ok) {
        status.textContent = "Fix the highlighted fields and send again.";
        status.classList.add("is-error");
        $(".has-error", form).focus();
        return;
      }
      const to = (D.contact && D.contact.email) || "";
      const body = `${message.value.trim()}\n\n—\n${name.value.trim()}\n${email.value.trim()}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject.value.trim())}&body=${encodeURIComponent(body)}`;
      status.classList.remove("is-error");
      status.textContent = "Opening your email app with the message ready to send.";
      form.reset();
    });
  }

  /* ========================= HERO PARTICLES + FPS ========================== */
  const cv = $("#fx");
  if (cv && !reduceMotion) {
    const ctx = cv.getContext("2d");
    let w = 0, h = 0, dots = [], raf = null, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      const r = cv.getBoundingClientRect();
      w = r.width; h = r.height;
      cv.width = Math.floor(w * dpr); cv.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(64, Math.max(20, (w * h) / 26000)));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .16, vy: -0.08 - Math.random() * .2,
        r: Math.random() * 1.5 + .5, a: Math.random() * .5 + .18,
        amber: Math.random() > .82
      }));
    }

    let frames = 0, last = performance.now();
    const fpsOut = $("#fpsReadout");

    function draw(now) {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.y < -8) { d.y = h + 8; d.x = Math.random() * w; }
        if (d.x < -8) d.x = w + 8; if (d.x > w + 8) d.x = -8;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.amber ? `rgba(255,178,63,${d.a})` : `rgba(124,243,228,${d.a})`;
        ctx.shadowColor = d.amber ? "rgba(255,178,63,.8)" : "rgba(53,230,208,.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      frames++;
      if (now - last >= 1000) {
        if (fpsOut) fpsOut.textContent = Math.round((frames * 1000) / (now - last)) + " fps";
        frames = 0; last = now;
      }
      raf = requestAnimationFrame(draw);
    }

    size();
    raf = requestAnimationFrame(draw);
    let rt = null;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(size, 180); });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) { last = performance.now(); frames = 0; raf = requestAnimationFrame(draw); }
    });
  } else if (cv) {
    const fpsOut = $("#fpsReadout");
    if (fpsOut) fpsOut.textContent = "static";
  }
})();
