window.SITE_BIRTHDATE = "2000-01-01";

window.SITE_NODES = {
  root: {
    html: `
      <p class="block"><a class="reveal" href="#" data-reveal="intro">Hello.</a></p>
      <p class="block hint">Click underlined text.</p>
    `,
  },

  intro: {
    html: `
      <p class="block">My name is <a class="reveal" href="#" data-reveal="name">Ijtihed</a>.</p>
      <p class="block">I do <a class="reveal" href="#" data-reveal="professional">software engineering</a> and <a class="reveal" href="#" data-reveal="research">research</a>.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="threads">More</a>.</p>
    `,
  },

  name: {
    html: `
      <p class="block">Pronounced like "Ij ti hed".</p>
      <p class="block">I am <span data-age></span> years old.</p>
    `,
  },

  threads: {
    html: `
      <p class="block tight">Pick a thread.</p>
      <p class="block">
        <a class="reveal" href="#" data-reveal="professional">Professional</a>.
        <a class="reveal" href="#" data-reveal="projects">Projects</a>.
        <a class="reveal" href="#" data-reveal="personal">Personal</a>.
        <a class="reveal" href="#" data-reveal="contact">Contact</a>.
      </p>
    `,
  },

  professional: {
    html: `
      <p class="block">I work as a founding software engineer.</p>
      <p class="block">
        Currently involved with
        <a class="ext" href="https://nullfellows.com" target="_blank" rel="noreferrer">Null Fellows</a>.
        Research with
        <a class="ext" href="https://cbl.aalto.fi" target="_blank" rel="noreferrer">Aalto Computational Behavior Lab</a>.
      </p>
      <p class="block"><a class="reveal" href="#" data-reveal="professional_detail">What I do</a>.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="professional_experiences">All experiences</a>.</p>
    `,
  },

  professional_detail: {
    html: `
      <p class="block">Simulation and autonomy engineering.</p>
      <p class="block">Real time systems, robotics oriented tooling, and reliable execution.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="professional_stack">Stack</a>.</p>
    `,
  },

  professional_stack: {
    html: `
      <p class="block">Unity, C sharp, Rust, C plus plus, Python.</p>
      <p class="block">Sensor and simulation pipelines, deployment, and performance tuning.</p>
    `,
  },

  professional_experiences: {
    html: `
      <p class="block"><a class="ext" href="https://cbl.aalto.fi" target="_blank" rel="noreferrer">Aalto Computational Behavior Lab</a> — research assistant — 2025–</p>
      <p class="block"><a class="ext" href="https://nullfellows.com" target="_blank" rel="noreferrer">Null Fellows</a> — {lead} — 2025–</p>
      <p class="block"><a class="ext" href="https://www.kovahq.com" target="_blank" rel="noreferrer">Kova Labs</a> — founding engineer — 2025–2026</p>
      <p class="block"><a class="ext" href="https://sensofusion.com" target="_blank" rel="noreferrer">Sensofusion</a> — software engineer (systems) — 2025</p>
      <p class="block">Aalto — teaching assistant — 2025</p>
      <p class="block">Bulgarian Academy of Sciences — research intern — 2023</p>
      <p class="block">King Abdulaziz University — research assistant — 2022–2024</p>
    `,
  },

  research: {
    html: `
      <p class="block">
        I do research around physical AI and human interaction.
      </p>
      <p class="block">
        With
        <a class="ext" href="https://cbl.aalto.fi" target="_blank" rel="noreferrer">Aalto Computational Behavior Lab</a>.
      </p>
      <p class="block"><a class="reveal" href="#" data-reveal="research_detail">Current direction</a>.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="research_education">Education</a>.</p>
    `,
  },

  research_detail: {
    html: `
      <p class="block">Human in the loop evaluation.</p>
      <p class="block">VR based interaction setups, data logging, and benchmarking.</p>
      <p class="block"><a class="ext" href="human-robot-interaction-vr.html" target="_blank" rel="noreferrer">Human-robot interaction in VR</a>.</p>
    `,
  },

  research_education: {
    html: `
      <p class="block">ETH Zürich — Graduate Exchange in Computer Science</p>
      <p class="block">Aalto University — MSc Pure Math</p>
      <p class="block">Aalto University — BSc Computational Engineering</p>
    `,
  },

  projects: {
    html: `
      <p class="block">A few things I have built.</p>
      <p class="block">
        <a class="reveal" href="#" data-reveal="proj_site">This site</a>.
        <a class="reveal" href="#" data-reveal="proj_chrono">Real time physics</a>.
        <a class="reveal" href="#" data-reveal="proj_vr">VR research tooling</a>.
      </p>
      <p class="block"><a class="reveal" href="#" data-reveal="projects_more">More projects</a>.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="projects_links">Links</a>.</p>
    `,
  },

  proj_site: {
    html: `
      <p class="block">Minimal, fast, and readable.</p>
      <p class="block">Designed to expand by clicking instead of scrolling menus.</p>
    `,
  },

  proj_chrono: {
    html: `
      <p class="block">
        Real time physics work using
        <a class="ext" href="https://projectchrono.org/" target="_blank" rel="noreferrer">Project Chrono</a>.
      </p>
      <p class="block">Dynamics engine for simulations and robotics applications.</p>
    `,
  },

  proj_vr: {
    html: `
      <p class="block">VR pipelines for human robot interaction experiments.</p>
      <p class="block">Bridging runtime input to simulation, and logging clean datasets.</p>
      <p class="block"><a class="ext" href="human-robot-interaction-vr.html" target="_blank" rel="noreferrer">Human-robot interaction in VR</a>.</p>
    `,
  },

  projects_more: {
    html: `
      <p class="block"><a class="ext" href="https://github.com/Ijtihed/Skribe" target="_blank" rel="noreferrer">Skribe</a>.</p>
      <p class="block"><a class="ext" href="https://github.com/Ijtihed/EmotionDetection-Game" target="_blank" rel="noreferrer">The Yappin' Spirit</a>.</p>
      <p class="block"><a class="ext" href="https://nullfellows.com" target="_blank" rel="noreferrer">nullfellows.com</a>.</p>
      <p class="block"><a class="ext" href="https://doi.org/10.7759/cureus.44889" target="_blank" rel="noreferrer">Publication (DOI)</a>.</p>
      <p class="block">QR generator.</p>
      <p class="block">Holy Quran offline reader.</p>
    `,
  },

  projects_links: {
    html: `
      <p class="block">
        <a class="ext" href="https://github.com/Ijtihed" target="_blank" rel="noreferrer">GitHub</a>.
        <a class="ext" href="https://www.linkedin.com/in/ijtihed/" target="_blank" rel="noreferrer">LinkedIn</a>.
      </p>
    `,
  },

  personal: {
    html: `
      <p class="block">I have had setbacks.</p>
      <p class="block">I kept going anyway.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="personal_detail">More context</a>.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="personal_interests">Interests</a>.</p>
    `,
  },

  personal_detail: {
    html: `
      <p class="block">I moved countries early and rebuilt from scratch.</p>
      <p class="block">I learned to separate identity from outcomes.</p>
      <p class="block"><a class="reveal" href="#" data-reveal="personal_rule">Rule</a>.</p>
    `,
  },

  personal_rule: {
    html: `
      <p class="block">It is only over if you give up.</p>
      <p class="block">I try to act like my future is real and then work toward it.</p>
    `,
  },

  personal_interests: {
    html: `
      <p class="block">Number theory, VR/AR research, real-time physics simulations.</p>
    `,
  },

  contact: {
    html: `
      <p class="block">You can reach me here.</p>
      <p class="block">
        <a class="ext" href="mailto:YOUR_EMAIL_HERE">Email</a>.
        <a class="ext" href="https://www.linkedin.com/in/ijtihed/" target="_blank" rel="noreferrer">LinkedIn</a>.
        <a class="ext" href="https://github.com/Ijtihed" target="_blank" rel="noreferrer">GitHub</a>.
        <a class="ext" href="cv.pdf" target="_blank" rel="noreferrer">CV</a>.
      </p>
    `,
  },
};


















