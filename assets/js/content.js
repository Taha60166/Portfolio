/* =============================================================================
   content.js — EVERYTHING YOU EDIT LIVES IN THIS FILE.
   -----------------------------------------------------------------------------
   No HTML or CSS knowledge needed. Change the text between the quote marks,
   keep the commas and brackets where they are, save, refresh the page.

   Anything written like [Project Name] or "FILL: ..." is a placeholder waiting
   for your real information.
   ============================================================================= */

window.PORTFOLIO = {

  /* ---------------------------------------------------------------------------
     1. PROFILE — name, role, and the words in the hero + about sections
     --------------------------------------------------------------------------- */
  profile: {
    name: "Taha Ahmed",
    role: "Unity Game Developer",
    location: "Quetta, Pakistan",
    availability: "Taking select freelance projects",
    tagline: "I build immersive games and interactive experiences with Unity.",

    heroBody:
      "I create gameplay systems, mechanics, player controllers, UI systems, level " +
      "experiences and interactive environments using Unity and C#.",

    // Small readout under the hero buttons. Keep these short.
    heroMeta: [
      { label: "Engine", value: "Unity" },
      { label: "Language", value: "C#" },
      { label: "Focus", value: "2D & 3D gameplay" }
    ],

    // About section. Each string becomes its own paragraph.
    about: [
      "I'm a Unity game developer. Most of what I do comes down to one loop: take an idea, " +
      "get it running in the engine, and keep changing it until it feels good to play.",

      "The part I enjoy most is the systems work — player controllers that respond the way " +
      "you expect, mechanics that stay interesting after the first minute, UI that gets out " +
      "of the way. I like the technical problems too: the bug that only happens on the third " +
      "level, the physics interaction that reads wrong, the input that feels half a frame late.",

      "I'm currently studying Computer Science at BUITEMS in Quetta and building Unity " +
      "projects alongside it, documenting each one as it ships."
    ],

    // Little chips under the about text.
    aboutTags: ["Gameplay programming", "Mechanics design", "Player controllers", "UI systems", "2D & 3D"],

    // The four stat tiles. Numeric values count up on scroll; text values fade in.
    stats: [
      { value: "7", suffix: "+", label: "Projects built" },
      { value: "Unity", label: "Primary engine" },
      { value: "4", label: "Certifications" },
      { value: "C#", label: "Language of choice" }
    ]
  },

  /* ---------------------------------------------------------------------------
     2. PROJECTS — your seven builds
     ---------------------------------------------------------------------------
     HOW TO FILL ONE IN:
       title      replace "[Project Name]" with the real title
       tags       controls the filter buttons. Pick from:
                  "unity", "2d", "3d", "gameplay", "other"
                  (they are pre-spread so the filters demo correctly — change to match reality)
       youtube    YouTube Video ID or full URL (e.g. "Xb7HM3m_Kis" or "https://youtu.be/Xb7HM3m_Kis")
                  Plays in full with audio inside the project details pop-up.
       video      SHORT, SILENT local clip (WebM / MP4) that plays when someone hovers the card.
                  10-15 seconds, ideally under 2 MB, e.g.
                  "assets/video/project-01-preview.mp4"
                  Leave "" and a generated placeholder is shown instead.
       poster     still frame shown before hover, e.g. "assets/img/project-01.jpg".
                  If left empty and youtube is set, YouTube's HD thumbnail is used automatically!
       featured   true makes the card span two columns. Two or three is a good number.
       links      set to "" to hide that button
       screenshots  add paths; leave [] and placeholder tiles are drawn

     See assets/video/README.txt for the ffmpeg commands that produce the
     preview / poster set from one raw capture.
     --------------------------------------------------------------------------- */
  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Prop Hunt Multiplayer Game",
      type: "3D Multiplayer / AI Hide & Seek Game",
      summary: "A 3D Prop Hunt game where players disguise as room props with dynamic physics and movement to evade AI hunters in interactive environments.",
      tags: ["unity", "3d"],
      featured: true,
      tech: ["Unity", "C#", "NGO", "Authentication", "Networking", "Physics"],
      features: [
        "Prop Morph System allowing players to disguise as any room object",
        "Patrolling Hunter AI with detection cones and alert states",
        "Dynamic collider and center-of-mass adaptation system"
      ],
      youtube: "R4Mn7QQMlQs",
      video: "assets/video/project-01-preview.mp4",
      poster: "assets/img/Prop_img/Cover.png",
      role: "Solo developer — engineered all core gameplay mechanics, prop transformation system, AI patrol logic, and UI.",
      process: [
        "Prototyped the prop transformation mechanic with dynamic mesh and collider swapping.",
        "Implemented NavMesh-based hunter AI search routines, vision cones, and alert states.",
        "Polished countdown timer, hiding zones, SFX, and round-based match flow."
      ],
      gameplay: [
        "Disguise as chairs, boxes, barrels, and props to hide in plain sight",
        "Navigate the environment while avoiding the hunter's line of sight and flashlight",
        "Dynamic camera toggle and stealth movement mechanics",
        "Survive the time limit to win the round"
      ],
      challenges: "Dynamically adjusting player colliders and rigidbodies when swapping into different shaped props without causing physics jitter or wall clipping.",
      learned: "Mastered runtime mesh/collider replacement, custom character controllers, and intelligent AI sensory perception in Unity.",
      screenshots: [
        "assets/img/Prop_img/1.png",
        "assets/img/Prop_img/2.png",
        "assets/img/Prop_img/3.png",
        "assets/img/Prop_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-02",
      number: "02",
      title: "2d Shooter",
      type: "FILL: project type",
      summary: "FILL: one or two sentences on what the game is and what the player does.",
      tags: ["unity", "2d"],
      featured: false,
      tech: ["Unity", "C#"],
      features: ["FILL: key feature", "FILL: key feature", "FILL: key feature"],
      youtube: "dQ4QIfwwrCQ",
      video: "assets/video/2dShooter_vid/2dShooterHover.mp4",
      poster: "assets/img/2dShooter_img/cover.png",
      role: "FILL: what you personally built.",
      process: ["FILL: prototype stage.", "FILL: build stage.", "FILL: polish stage."],
      gameplay: ["FILL: core loop", "FILL: controls", "FILL: progression"],
      challenges: "FILL: hardest technical problem and how you solved it.",
      learned: "FILL: what you took away from it.",
      screenshots: [
        "assets/img/2dShooter_img/1.png",
        "assets/img/2dShooter_img/2.png",
        "assets/img/2dShooter_img/3.png",
        "assets/img/2dShooter_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-03",
      number: "03",
      title: "AI Car Game",
      type: "3D car racing game",
      summary: "A 3D racing game with two modes — Human vs AI and AI vs AI — where the player drives a course lined with barriers, cones and lane obstacles.",
      tags: ["unity", "3d"],
      featured: false,
      tech: ["Unity", "C#"],
      features: [
        "Two game modes: Human vs AI and AI vs AI",
        "AI opponent driver that races the same track",
        "Third-person chase camera with an overhead view option"
      ],
      youtube: "Xb7HM3m_Kis",
      video: "assets/video/AiCarHover.mp4",
      poster: "assets/img/AiCar_img/cover.jpg",
      role: "Solo developer — all gameplay code, vehicle physics, AI pathing and UI.",
      process: [
        "Started with car physics controller to get the steering and acceleration feeling right.",
        "Built waypoint-based AI driver that navigates the track with obstacle avoidance.",
        "Added HUD, race timer, camera toggle, and barrier collision effects."
      ],
      gameplay: [
        "Race a car along a barrier-lined track against an AI opponent",
        "Switchable camera: third-person chase and top-down overhead",
        "Traffic cones, lane dividers and striped blocks as track obstacles",
        "In-game HUD with restart and return-to-menu controls",
        "Main menu with mode select, resolution options and controls screen"
      ],
      challenges: "Tuning vehicle wheel colliders, suspension damping, and AI waypoint lookahead to prevent drift spinouts on sharp corners.",
      learned: "Learned realistic vehicle physics modeling, waypoint-based AI steering behaviors, and dynamic camera follow systems in Unity.",
      screenshots: [
        "assets/img/AiCar_img/1.png",
        "assets/img/AiCar_img/2.jpg",
        "assets/img/AiCar_img/3.jpg",
        "assets/img/AiCar_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-04",
      number: "04",
      title: "3d First Person Shooter",
      type: "FILL: project type",
      summary: "FILL: one or two sentences on what the game is and what the player does.",
      tags: ["unity", "3d"],
      featured: true,
      tech: ["Unity", "C#"],
      features: ["FILL: key feature", "FILL: key feature", "FILL: key feature"],
      youtube: "iOxFujG2NCE",
      video: "assets/video/3dFPSHover.mp4",
      poster: "assets/img/3dFPS_img/Cover.png",
      role: "FILL: what you personally built.",
      process: ["FILL: prototype stage.", "FILL: build stage.", "FILL: polish stage."],
      gameplay: ["FILL: core loop", "FILL: controls", "FILL: progression"],
      challenges: "FILL: hardest technical problem and how you solved it.",
      learned: "FILL: what you took away from it.",
      screenshots: [
        "assets/img/3dFPS_img/1.png",
        "assets/img/3dFPS_img/2.png",
        "assets/img/3dFPS_img/3.png",
        "assets/img/3dFPS_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-05",
      number: "05",
      title: "3d Platformer",
      type: "FILL: project type",
      summary: "FILL: one or two sentences on what the game is and what the player does.",
      tags: ["unity", "3d"],
      featured: false,
      tech: ["Unity", "C#"],
      features: ["FILL: key feature", "FILL: key feature", "FILL: key feature"],
      youtube: "BjX48mvAZS8",
      video: "assets/video/3dPlatformerHover.mp4",
      poster: "assets/img/3dPlatformer_img/Cover.png",
      role: "FILL: what you personally built.",
      process: ["FILL: prototype stage.", "FILL: build stage.", "FILL: polish stage."],
      gameplay: ["FILL: core loop", "FILL: controls", "FILL: progression"],
      challenges: "FILL: hardest technical problem and how you solved it.",
      learned: "FILL: what you took away from it.",
      screenshots: [
        "assets/img/3dPlatformer_img/1.png",
        "assets/img/3dPlatformer_img/2.png",
        "assets/img/3dPlatformer_img/3.png",
        "assets/img/3dPlatformer_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-06",
      number: "06",
      title: "Mobile Endless Runner Game",
      type: "FILL: project type",
      summary: "FILL: one or two sentences on what the game is and what the player does.",
      tags: ["unity", "3d"],
      featured: false,
      tech: ["Unity", "C#"],
      features: ["FILL: key feature", "FILL: key feature", "FILL: key feature"],
      youtube: "PzLfNkqWoRw",
      video: "assets/video/CatRunHover.mp4",
      poster: "assets/img/CatRun_img/Cover.png",
      role: "FILL: what you personally built.",
      process: ["FILL: prototype stage.", "FILL: build stage.", "FILL: polish stage."],
      gameplay: ["FILL: core loop", "FILL: controls", "FILL: progression"],
      challenges: "FILL: hardest technical problem and how you solved it.",
      learned: "FILL: what you took away from it.",
      screenshots: [
        "assets/img/CatRun_img/1.png",
        "assets/img/CatRun_img/2.png",
        "assets/img/CatRun_img/3.png",
        "assets/img/CatRun_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-07",
      number: "07",
      title: "2d Platformer",
      type: "FILL: project type",
      summary: "FILL: one or two sentences on what the game is and what the player does.",
      tags: ["unity", "2d"],
      featured: false,
      tech: ["Unity", "C#"],
      features: ["FILL: key feature", "FILL: key feature", "FILL: key feature"],
      youtube: "yRlqJst9K78",
      video: "assets/video/2dPlatformerHover.mp4",
      poster: "assets/img/2dPlatformer_img/Cover.png",
      role: "FILL: what you personally built.",
      process: ["FILL: prototype stage.", "FILL: build stage.", "FILL: polish stage."],
      gameplay: ["FILL: core loop", "FILL: controls", "FILL: progression"],
      challenges: "FILL: hardest technical problem and how you solved it.",
      learned: "FILL: what you took away from it.",
      screenshots: [
        "assets/img/2dPlatformer_img/1.png",
        "assets/img/2dPlatformer_img/2.png",
        "assets/img/2dPlatformer_img/3.png",
        "assets/img/2dPlatformer_img/4.png"
      ],
      links: { play: "", github: "", download: "" }
    }
  ],

  // Filter buttons. "key" must match the tags above; "all" shows everything.
  filters: [
    { key: "all", label: "All" },
    { key: "unity", label: "Unity" },
    { key: "2d", label: "2D" },
    { key: "3d", label: "3D" }
  ],

  /* ---------------------------------------------------------------------------
     3. SKILLS — icon names come from the set in main.js (ICONS)
     --------------------------------------------------------------------------- */
  skills: [
    { name: "Unity", icon: "unity", note: "My primary engine. Scenes, prefabs, components and the editor workflow." },
    { name: "C#", icon: "code", note: "The language I write all my gameplay logic in." },
    { name: "Game Development", icon: "gamepad", note: "Taking a concept through to a playable, finished build." },
    { name: "Gameplay Programming", icon: "cpu", note: "The systems behind how a game actually plays and responds." },
    { name: "2D Game Development", icon: "square", note: "Sprites, 2D physics, tilemaps and side-on movement." },
    { name: "3D Game Development", icon: "cube", note: "3D scenes, cameras, colliders and movement in space." },
    { name: "Game Mechanics", icon: "puzzle", note: "Designing and building the rules a player learns to play with." },
    { name: "Player Controllers", icon: "joystick", note: "Movement, jumping, aiming and shooting that feel right." },
    { name: "UI Development", icon: "layout", note: "Menus, HUDs and in-game interfaces built in Unity UI." },
    { name: "Animation Systems", icon: "film", note: "Animator controllers, states and transitions driven by gameplay." },
    { name: "Physics", icon: "orbit", note: "Rigidbodies, colliders, forces and collision response." },
    { name: "Level Design", icon: "map", note: "Building and pacing spaces the player moves through." },
    { name: "Unity Input System", icon: "keyboard", note: "Mapping actions across keyboard, mouse and gamepad." },
    { name: "Git / Version Control", icon: "git", note: "Branches, commits and keeping project history clean." }
  ],

  /* ---------------------------------------------------------------------------
     4. PROCESS — the five stages
     --------------------------------------------------------------------------- */
  process: [
    { step: "01", title: "Idea & Concept", icon: "bulb", note: "One sentence on what the player does, and why that's worth playing. If it can't survive one sentence, it doesn't get built." },
    { step: "02", title: "Game Design", icon: "ruler", note: "Core loop, mechanics, controls and progression mapped out before any code — so development has something to aim at." },
    { step: "03", title: "Development in Unity", icon: "wrench", note: "Systems built in order of risk: the player controller first, then mechanics, then UI, then content." },
    { step: "04", title: "Testing & Polish", icon: "bug", note: "Play it, break it, fix the feel. This is where most of the actual time goes, and where a prototype becomes a game." },
    { step: "05", title: "Final Build", icon: "package", note: "Build, verify it runs outside the editor, capture footage and ship it." }
  ],

  /* ---------------------------------------------------------------------------
     5. JOURNEY — add a new entry at the bottom as things happen.
        Set "current" to true on the one you're living in right now.
     --------------------------------------------------------------------------- */
  journey: [
    {
      when: "The start",
      title: "Started Game Development",
      note: "Began learning Unity and C#, working through the engine's fundamentals — scenes, components, scripting and the editor.",
      current: false
    },
    {
      when: "Then",
      title: "Built My First Games",
      note: "Moved from tutorials to finishing things. Created gameplay systems and mechanics of my own inside complete, playable builds.",
      current: false
    },
    {
      when: "Next",
      title: "Expanded My Skills",
      note: "Worked across both 2D and 3D projects — shooters and platformers — picking up physics, UI, animation and input along the way.",
      current: false
    },
    {
      when: "Now",
      title: "Building More Advanced Unity Projects",
      note: "Taking on larger systems, documenting each project publicly, and available for select freelance work.",
      current: true
    }
  ],

  /* ---------------------------------------------------------------------------
     6. CERTIFICATIONS
     ---------------------------------------------------------------------------
     Your four verified Coursera credentials are already filled in.
     Add "image" paths once you've saved the certificate screenshots, e.g.
       image: "assets/img/cert-01.jpg"
     Until then a generated placeholder card is shown.
     --------------------------------------------------------------------------- */
  certificates: [
    {
      slug: "Certificate 01",
      course: "Game Design and Development 1: 2D Shooter",
      issuer: "Coursera",
      school: "Michigan State University",
      completed: "December 2025",
      credentialId: "QE05AL61OTMI",
      url: "https://coursera.org/verify/QE05AL61OTMI",
      image: "assets/img/cert-01.jpg"
    },
    {
      slug: "Certificate 02",
      course: "Game Design and Development 2: 2D Platformer",
      issuer: "Coursera",
      school: "Michigan State University",
      completed: "January 2026",
      credentialId: "OVSXAYCVE99D",
      url: "https://coursera.org/verify/OVSXAYCVE99D",
      image: "assets/img/cert-02.jpg"
    },
    {
      slug: "Certificate 03",
      course: "Game Design and Development 3: 3D Shooter",
      issuer: "Coursera",
      school: "Michigan State University",
      completed: "January 2026",
      credentialId: "WFCL2GIKPLF8",
      url: "https://coursera.org/verify/WFCL2GIKPLF8",
      image: "assets/img/cert-03.jpg"
    },
    {
      slug: "Certificate 04",
      course: "Game Design and Development 4: 3D Platformer",
      issuer: "Coursera",
      school: "Michigan State University",
      completed: "January 2026",
      credentialId: "KO6U2623HI64",
      url: "https://coursera.org/verify/KO6U2623HI64",
      image: "assets/img/cert-04.jpg"
    }
  ],

  /* ---------------------------------------------------------------------------
     7. CONTACT & SOCIAL
     ---------------------------------------------------------------------------
     Replace each "url" with your real link. A channel with an empty url still
     shows in the list (so the section looks complete while you gather links) —
     it just isn't clickable. Delete the whole line to remove a channel entirely.
     The contact form opens the visitor's email app addressed to `email` below.
     See README.md if you'd rather wire it to a real form service.
     --------------------------------------------------------------------------- */
  contact: {
    email: "tahaahmedyousufzai@gmail.com",
    channels: [
      { name: "GitHub", icon: "github", handle: "tahaahmedyousufzai", url: "https://github.com/tahaahmedyousufzai" },
      { name: "LinkedIn", icon: "linkedin", handle: "in/tahaahmedyousufzai", url: "https://www.linkedin.com/in/tahaahmedyousufzai" },
      { name: "Instagram", icon: "instagram", handle: "@tahaahmedyousufzai", url: "https://instagram.com/tahaahmedyousufzai" },
      { name: "Email", icon: "mail", handle: "tahaahmedyousufzai@gmail.com", url: "mailto:tahaahmedyousufzai@gmail.com" },
      { name: "itch.io", icon: "link", handle: "[your-itch-page]", url: "" }
    ]
  }
};
