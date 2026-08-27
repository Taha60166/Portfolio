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
    tagline: "I build high-performance games that feel amazing to play.",

    heroBody:
      "I build solid, fast-running games using Unity and C#. My work covers everything from " +
      "multiplayer networking and performance optimization to creating smooth player controls, " +
      "fun game mechanics, and clean UI systems.",

    // Small readout under the hero buttons. Keep these short.
    heroMeta: [
      { label: "Experience", value: "2+ Years" },
      { label: "Engine", value: "Unity" },
      { label: "Language", value: "C#" },
      { label: "Key Skills", value: "Multiplayer & Optimization" }
    ],

    // About section. Each string becomes its own paragraph.
    about: [
      "I'm a Unity game developer with over 2 years of experience building immersive 2D, 3D, and multiplayer games. " +
      "My journey started in 2023, and since then, I've developed a diverse range of projects from fast-paced shooters " +
      "and mobile runners to complex 3D platformers and AI-driven racing games.",

      "My biggest strength is engineering robust gameplay systems. I have solid hands-on experience with multiplayer networking " +
      "using Netcode for GameObjects (NGO), Unity Relay, and Firebase. I love tackling deep technical challenges, whether it's setting " +
      "up advanced animation layers, coding AI with NavMesh, or heavily optimizing performance with occlusion culling, " +
      "light baking, and URP shaders.",

      "I recently graduated with a degree in Computer Science from BUITEMS in Quetta (3.7 CGPA) and hold 4 Game Design and Development " +
      "certifications from Michigan State University. I'm constantly learning new tools, pushing the boundaries of what I can build in Unity, " +
      "and looking forward to exploring the Roblox Engine in the future."
    ],

    // Little chips under the about text.
    aboutTags: ["Multiplayer (NGO & Relay)", "Performance Optimization", "AI & NavMesh", "Advanced Animation", "Gameplay Systems", "2d Games",
      "3d Games", "Mobile Games"
    ],

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
      type: "3D Multiplayer Hide & Seek",
      summary: "A tactical multiplayer game merging classic Prop Hunt with hero abilities. My Final Year Project built with comprehensive Unity Gaming Services, including Relay, Auth, Cloud Code, and Firebase.",
      tags: ["3d", "gameplay", "multiplayer"],
      featured: true,
      tech: ["Unity", "C#", "NGO", "UGS Auth", "Relay", "Cloud Code", "Cloud Save", "Firebase", "Vivox"],
      features: [
        "Round-based team swapping (Hunters vs. Props) with unique tactical powers and abilities",
        "Comprehensive backend: Google Auth, Friend System, Cloud Save, and Custom Lobbies",
        "Advanced Teammate Spectator System, Voice/Text Chat (Vivox), and Scoreboard",
        "Highly optimized with Occlusion Culling, custom graphics settings, and rebinding"
      ],
      youtube: "R4Mn7QQMlQs",
      video: "assets/video/project-01-preview.mp4",
      poster: "assets/img/Prop_img/Cover.jpg",
      role: "Solo Developer Engineered full network architecture, backend integration, gameplay loop, and optimization.",
      process: [
        "Integrated UGS (Auth, Relay, Cloud Code) and Firebase to build a robust backend and custom Friend System.",
        "Developed the core gameplay loop with Netcode for GameObjects (NGO), including role swapping and tactical powers.",
        "Optimized for low-end laptops using Occlusion Culling, light baking, and scalable graphics settings."
      ],
      gameplay: [
        "Hunters: Use weapons and tactical detection powers to find props.",
        "Props: Morph into physical objects and use abilities (stun, switch into random object) to survive.",
        "Seamlessly switch to a Teammate Spectator Mode upon elimination.",
        "Play over LAN or WAN via Relay codes with built-in Vivox Voice & Text chat."
      ],
      challenges: "Synchronizing physical prop transformations over the network without jitter, and creating a secure bilateral friend system using Cloud Code endpoints.",
      learned: "Mastered Unity Netcode for GameObjects, deep UGS backend integration, client-server authority, and advanced performance optimization.",
      screenshots: [
        "assets/img/Prop_img/1.jpg",
        "assets/img/Prop_img/2.jpg",
        "assets/img/Prop_img/3.jpg",
        "assets/img/Prop_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-02",
      number: "02",
      title: "2D Space Shooter",
      type: "Level-Based Arcade Shooter",
      summary: "A level-based 2D space shooter where the player pilots a spaceship through the galaxy, dodging and shooting alien ships while completing unique level objectives.",
      tags: ["2d", "gameplay"],
      featured: false,
      tech: ["Unity", "C#", "UI Systems", "Mini-map"],
      features: [
        "Level-based progression with unique objectives for each stage",
        "Clean UI with a functional HUD displaying life, score, and power-ups",
        "Working mini-map system for navigation and enemy tracking"
      ],
      youtube: "dQ4QIfwwrCQ",
      video: "assets/video/2dShooter_vid/2dShooterHover.mp4",
      poster: "assets/img/2dShooter_img/cover.jpg",
      role: "Solo Developer Built during a Coursera certification, implementing all core mechanics, UI, and level logic.",
      process: [
        "Built the core player movement and shooting mechanics for the spaceship.",
        "Implemented enemy alien ships, power-up systems, and a fully functional HUD.",
        "Designed the mini-map system and structured the game into multiple objective-based levels."
      ],
      gameplay: [
        "Pilot a spaceship through the galaxy and shoot down alien enemy ships.",
        "Collect power-ups to gain combat advantages and survive longer.",
        "Use the mini-map to track enemies and complete level-specific objectives."
      ],
      challenges: "Building a functional and accurate mini-map system that scales correctly with the level boundaries and tracks entities in real-time.",
      learned: "Gained solid experience in Unity UI construction, level progression logic, and implementing spatial awareness tools like mini-maps.",
      screenshots: [
        "assets/img/2dShooter_img/1.jpg",
        "assets/img/2dShooter_img/2.jpg",
        "assets/img/2dShooter_img/3.jpg",
        "assets/img/2dShooter_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-03",
      number: "03",
      title: "AI Car Game",
      type: "3D Racing & AI Simulation",
      summary: "A 3D racing game focused on AI behavior and vehicle physics, featuring two distinct modes: Human vs AI and AI vs AI.",
      tags: ["3d", "gameplay"],
      featured: false,
      tech: ["Unity", "C#", "NavMesh", "BFS", "Ray Sensors"],
      features: [
        "Two dynamic game modes: Human vs AI and an autonomous AI vs AI mode",
        "Advanced AI driving with Ray sensors for real-time obstacle avoidance",
        "Realistic car physics with Wheel Colliders and synchronized steering visuals",
        "In-game settings menu featuring dynamic screen resolution adjustments"
      ],
      youtube: "Xb7HM3m_Kis",
      video: "assets/video/AiCarHover.mp4",
      poster: "assets/img/AiCar_img/cover.jpg",
      role: "Solo Developer Engineered the vehicle physics, NavMesh-based AI, and smooth camera follow systems.",
      process: [
        "Implemented realistic car physics using Unity's Wheel Colliders, syncing visual tire rotation with steering input.",
        "Developed the AI logic using NavMesh, BFS, and Ray sensors to allow autonomous obstacle avoidance.",
        "Built out the UI systems, including a custom resolution settings menu, and polished the dynamic camera tracking."
      ],
      gameplay: [
        "Race against an intelligent AI that navigates the track and dodges obstacles autonomously.",
        "Watch autonomous vehicles compete against each other in the AI vs AI mode.",
        "Experience realistic vehicle handling and smooth camera tracking through tight corners."
      ],
      challenges: "Synchronizing the visual mesh of the tires with the physics of the Wheel Colliders, and tuning the raycast sensors so the AI avoids obstacles at high speeds without oversteering.",
      learned: "Mastered NavMesh and Breadth-First Search (BFS) for AI pathfinding, Ray sensors for spatial awareness, and realistic car physics using Wheel Colliders.",
      screenshots: [
        "assets/img/AiCar_img/1.jpg",
        "assets/img/AiCar_img/2.jpg",
        "assets/img/AiCar_img/3.jpg",
        "assets/img/AiCar_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-04",
      number: "04",
      title: "3D FPS: Bug Hunter",
      type: "Level-Based First Person Shooter",
      summary: "A thrilling 3D FPS game where the player navigates through hostile environments, hunting giant insects and finding keys to unlock the next levels, culminating in a massive boss fight.",
      tags: ["3d", "gameplay"],
      featured: true,
      tech: ["Unity", "C#", "Cinemachine", "Terrain Design"],
      features: [
        "First-person combat against hostile insect enemies with dodge and shoot mechanics",
        "Level exploration requiring players to find hidden keys to unlock doors",
        "A challenging final Boss Level featuring a giant insect",
        "Cinematic menu backgrounds utilizing Cinemachine Dolly states"
      ],
      youtube: "iOxFujG2NCE",
      video: "assets/video/3dFPSHover.mp4",
      poster: "assets/img/3dFPS_img/Cover.jpg",
      role: "Solo Developer Built during a Coursera certification, implementing all FP behaviors, level design, and boss mechanics.",
      process: [
        "Prototyped the initial map layouts and structured the level-based progression system.",
        "Implemented the First-Person (FP) controller, enemy insect AI, and key/door interaction logic.",
        "Designed the terrain, crafted the final Boss fight, and added cinematic flair to the main menu using Dolly cameras."
      ],
      gameplay: [
        "Navigate 3D environments to hunt down aggressive insect enemies.",
        "Dodge enemy attacks and manage health while searching for hidden keys.",
        "Unlock doors to progress through levels and face off against the giant Boss insect."
      ],
      challenges: "Designing intuitive level prototypes that naturally guided the player towards keys and doors without making the environment feel too linear or confusing.",
      learned: "Mastered map prototyping, First-Person character behaviors, Unity's Terrain system, and Cinemachine Dolly states for cinematic presentation.",
      screenshots: [
        "assets/img/3dFPS_img/1.jpg",
        "assets/img/3dFPS_img/2.jpg",
        "assets/img/3dFPS_img/3.jpg",
        "assets/img/3dFPS_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-05",
      number: "05",
      title: "3D Platformer Adventure",
      type: "Level-Based 3D Platformer",
      summary: "A dynamic 3D platforming adventure where players navigate treacherous terrain, defeat enemies by jumping on them, and solve spatial puzzles using keys and tele-portals.",
      tags: ["3d", "gameplay"],
      featured: false,
      tech: ["Unity", "C#", "Cinemachine", "Terrain"],
      features: [
        "Classic platforming combat: jump on enemies to defeat them and dodge their attacks",
        "Environmental hazards like lava pits, alongside doors, keys, and tele-portals",
        "A final Boss Level requiring agility and precise platforming timing",
        "Animated cinematic main menu utilizing Cinemachine Dolly states"
      ],
      youtube: "BjX48mvAZS8",
      video: "assets/video/3dPlatformerHover.mp4",
      poster: "assets/img/3dPlatformer_img/Cover.jpg",
      role: "Solo Developer Built for the 'Game Design and Development 4' Coursera certification, implementing all mechanics, terrain, and cameras.",
      process: [
        "Designed the 3D terrain and laid out complex platforming sequences with hazards like lava pits.",
        "Implemented player movement, enemy jumping mechanics, and interactive elements like keys and tele-portals.",
        "Set up the Cinemachine camera system for smooth player tracking and created a Dolly track for the animated menu background."
      ],
      gameplay: [
        "Run and jump through 3D environments while avoiding deadly hazards like lava.",
        "Defeat enemies by landing on them, and dodge their incoming attacks.",
        "Find keys to unlock doors, use tele-portals to navigate, and face off against the final Boss."
      ],
      challenges: "Tuning the jump physics and Cinemachine camera settings to ensure the platforming felt precise, responsive, and easy to read in a 3D space.",
      learned: "Gained expertise in Unity's Terrain system, 3D platformer physics, and advanced Cinemachine features like Dolly tracks and target tracking.",
      screenshots: [
        "assets/img/3dPlatformer_img/1.jpg",
        "assets/img/3dPlatformer_img/2.jpg",
        "assets/img/3dPlatformer_img/3.jpg",
        "assets/img/3dPlatformer_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-06",
      number: "06",
      title: "Cat Runner (Mobile)",
      type: "3D Mobile Endless Runner",
      summary: "An addictive mobile endless runner where players control an agile cat, dodging dynamic obstacles and racing through randomly generated low-poly environments.",
      tags: ["3d", "gameplay", "mobile"],
      featured: false,
      tech: ["Unity", "C#", "Mobile", "Audio Mixer"],
      features: [
        "Endless procedural level generation with two distinct, randomly alternating environments",
        "Dynamic and static obstacles requiring quick reflexes and swipe controls",
        "Clean, mobile-optimized UI featuring a live score and instant respawn system",
        "Integrated Unity Audio Mixer for balanced background music and SFX"
      ],
      youtube: "PzLfNkqWoRw",
      video: "assets/video/CatRunHover.mp4",
      poster: "assets/img/CatRun_img/Cover.jpg",
      role: "Solo Developer Engineered the endless level generation, mobile input handling, and audio mixing.",
      process: [
        "Designed the core endless loop by dynamically instantiating and managing level chunks.",
        "Integrated low-poly assets to ensure high performance and smooth framerates on mobile devices.",
        "Polished the game with a clean UI, an active score system, and dynamic audio tracks using the Sound Mixer."
      ],
      gameplay: [
        "Control a running cat to dodge incoming static and moving obstacles.",
        "Survive as long as possible to rack up a high score.",
        "Experience seamless transitions between randomly alternating biomes."
      ],
      challenges: "Managing memory and performance on mobile devices by efficiently instantiating and destroying level segments without causing lag spikes.",
      learned: "Mastered runtime object instantiation, mobile optimization using low-poly assets, and professional audio mixing in Unity.",
      screenshots: [
        "assets/img/CatRun_img/1.jpg",
        "assets/img/CatRun_img/2.jpg",
        "assets/img/CatRun_img/3.jpg",
        "assets/img/CatRun_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    },
    {
      id: "project-07",
      number: "07",
      title: "2D Platformer",
      type: "Level-Based 2D Platformer",
      summary: "A challenging 2D platformer where players jump on enemies, dodge deadly traps like acid, saw blades, and spikes, and collect keys to reach the goal crystal in each level.",
      tags: ["2d", "gameplay"],
      featured: false,
      tech: ["Unity", "C#", "Tile Palette", "Tile Rules", "2D Animation"],
      features: [
        "Level design built with Unity's Tile Palette and custom Tile Rules for rapid world creation",
        "Deadly environmental hazards including acid pools, spinning saw blades, and spike traps",
        "Smart enemy AI with patrol behaviors that players defeat by jumping on them",
        "Key collection and goal crystal system driving level-based progression",
        "Full life and health system with responsive 2D sprite animations"
      ],
      youtube: "yRlqJst9K78",
      video: "assets/video/2dPlatformerHover.mp4",
      poster: "assets/img/2dPlatformer_img/Cover.jpg",
      role: "Solo Developer Built during a Coursera certification, implementing all level design tools, enemy AI, and animation systems.",
      process: [
        "Set up the Tile Palette and authored custom Tile Rules to efficiently design and iterate on level layouts.",
        "Implemented player controls, enemy stomp mechanics, and a life/health system with UI feedback.",
        "Designed hazard placements (acid, saw blades, spikes) and polished all 2D sprite animations for characters and enemies."
      ],
      gameplay: [
        "Jump on enemies to defeat them while dodging their patrol attacks.",
        "Navigate through levels filled with acid, saw blades, and spike traps.",
        "Collect keys scattered across the level and reach the goal crystal to advance."
      ],
      challenges: "Creating efficient and visually consistent level layouts using Tile Rules, and designing smart enemy patrol patterns that challenge the player without feeling unfair.",
      learned: "Mastered Unity's Tile Palette and Tile Rules for 2D level design, 2D sprite animation workflows, and building responsive health and life systems.",
      screenshots: [
        "assets/img/2dPlatformer_img/1.jpg",
        "assets/img/2dPlatformer_img/2.jpg",
        "assets/img/2dPlatformer_img/3.jpg",
        "assets/img/2dPlatformer_img/4.jpg"
      ],
      links: { play: "", github: "", download: "" }
    }
  ],

  // Filter buttons. "key" must match the tags above; "all" shows everything.
  filters: [
    { key: "all", label: "All" },
    { key: "2d", label: "2D" },
    { key: "3d", label: "3D" },
    { key: "multiplayer", label: "Multiplayer" },
    { key: "mobile", label: "Mobile" }
  ],

  /* ---------------------------------------------------------------------------
     3. SKILLS — icon names come from the set in main.js (ICONS)
     --------------------------------------------------------------------------- */
  skills: [
    { name: "Unity", icon: "unity", note: "My primary engine. Scenes, prefabs, components and the editor workflow." },
    { name: "C#", icon: "code", note: "The language I write all my gameplay logic in." },
    { name: "Multiplayer Networking", icon: "link", note: "Netcode for GameObjects (NGO), Unity Relay, Lobby systems, and real-time synchronization." },
    { name: "Performance Optimization", icon: "cpu", note: "Occlusion Culling, light baking, URP shader config, and profiling for low-end hardware." },
    { name: "Game Development", icon: "gamepad", note: "Taking a concept through to a playable, finished build." },
    { name: "Gameplay Programming", icon: "code", note: "The systems behind how a game actually plays and responds." },
    { name: "AI & NavMesh", icon: "map", note: "NavMesh agents, BFS pathfinding, ray sensors, and patrol behavior systems." },
    { name: "Firebase & UGS", icon: "link", note: "Google Auth, Cloud Save, Cloud Code, Realtime Database, and Cloud Console." },
    { name: "2D Game Development", icon: "square", note: "Sprites, 2D physics, Tile Palettes, Tile Rules, and side-on movement." },
    { name: "3D Game Development", icon: "cube", note: "3D scenes, cameras, colliders and movement in space." },
    { name: "Game Mechanics", icon: "puzzle", note: "Designing and building the rules a player learns to play with." },
    { name: "Player Controllers", icon: "joystick", note: "Movement, jumping, aiming and shooting that feel right. FPS and TPS." },
    { name: "UI Development", icon: "layout", note: "Menus, HUDs, scoreboards, and in-game interfaces built in Unity UI." },
    { name: "Animation Systems", icon: "film", note: "Animator controllers, blend trees, animation layers, and upper/lower body split animations." },
    { name: "Cinemachine", icon: "film", note: "Virtual cameras, Dolly tracks, target tracking, and cinematic sequences." },
    { name: "Physics", icon: "orbit", note: "Rigidbodies, colliders, Wheel Colliders, ragdoll physics, and forces." },
    { name: "Level Design", icon: "map", note: "Building and pacing spaces the player moves through. Terrain and prototyping." },
    { name: "Mobile Development", icon: "layout", note: "Building optimized games for mobile devices with touch input and low-poly assets." },
    { name: "Audio & Sound Mixer", icon: "gamepad", note: "Unity Audio Mixer for balancing music, SFX, and spatial audio." },
    { name: "Unity Input System", icon: "keyboard", note: "Mapping actions across keyboard, mouse and gamepad with rebindable keys." },
    { name: "Git / Version Control", icon: "git", note: "Branches, commits and keeping project history clean." }
  ],

  /* ---------------------------------------------------------------------------
     4. PROCESS — the five stages
     --------------------------------------------------------------------------- */
  process: [
    { step: "01", title: "Idea & Concept", icon: "bulb", note: "One sentence on what the player does, and why that's worth playing. If it can't survive one sentence, it doesn't get built." },
    { step: "02", title: "Game Design", icon: "ruler", note: "Core loop, mechanics, controls and progression mapped out before any code so development has something to aim at." },
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
      note: "Began learning Unity and C#, working through the engine's fundamentals scenes, components, scripting and the editor.",
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
      note: "Worked across both 2D and 3D projects shooters and platformers picking up physics, UI, animation and input along the way.",
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
      { name: "LinkedIn", icon: "linkedin", handle: "in/tahaahmedyousufzai", url: "https://www.linkedin.com/in/tahaahmedyousufzai" },
      { name: "Instagram", icon: "instagram", handle: "@tagstudios.official", url: "https://www.instagram.com/tagstudios.official?igsi=Mno5d3k5dHRsb3Nk" },
      { name: "Email", icon: "mail", handle: "Taha Ahmed", url: "mailto:tahaahmedyousufzai@gmail.com" },
      { name: "itch.io", icon: "link", handle: "taha-1.itch.io", url: "https://taha-1.itch.io" }
    ]
  }
};
