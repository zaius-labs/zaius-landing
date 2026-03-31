<svelte:head><title>RVST — Zaius</title></svelte:head>

<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem">
    <p class="back-link"><a href="/projects">&larr; Projects</a></p>
    <div class="project-hero-icon"><img src="/projects/rvst.png" alt="RVST" /></div>
    <h1 class="landing-title">RVST</h1>
    <p class="landing-subhead">A rendering engine AI agents can trust.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <p class="section-body">RVST is not another Electron alternative. It's a verifiable UI rendering engine built in Rust.</p>
    <p class="section-body">The problem: AI agents write frontend code but have no way to verify it actually looks right. They generate HTML and CSS, push it, and hope. There's no feedback loop between what the agent wrote and what the user sees.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">How it works</h2>
    <p class="section-body">RVST makes the renderer itself queryable. Agents can ask the engine what rendered where, verify layout matches intent, and catch visual regressions before a human ever sees them.</p>
    <p class="section-body">It takes Svelte as its input language. The Rust kernel handles layout, text shaping, and painting. The output conforms exactly to what Svelte produces. We don't modify components to work around engine gaps. The engine conforms to the language.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Where it's going</h2>
    <p class="section-body">Eventually this becomes a dual-target system: same Svelte components render both in the browser (for users) and in RVST (for agent verification). Two renderers, one source of truth.</p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Svelte is the language. Rust is the kernel. Agents are first-class renderer users.</p>
  </div>
</div>

<div class="grid-row" style="border-bottom:none">
  <div class="grid-cell" style="padding-top:2rem;padding-bottom:1.5rem">
    <footer class="landing-footer">
      <a href="/projects">Projects</a>
      <a href="https://x.com/shinyobjectz_" target="_blank" rel="noopener">Twitter</a>
      <a href="https://www.linkedin.com/in/shanemurphy" target="_blank" rel="noopener">LinkedIn</a>
      <a href="/context-dynamics.pdf">Book</a>
    </footer>
  </div>
</div>

<style>
  .back-link { margin-bottom: 1.5rem; }
  .back-link a { font-family: var(--font-mono); font-size: 0.7rem; color: #999; text-decoration: none; letter-spacing: 0.04em; }
  .back-link a:hover { color: var(--accent); }
  .project-hero-icon { width: 56px; height: 56px; border-radius: 10px; overflow: hidden; background: #f5f3ee; margin-bottom: 1.25rem; }
  .project-hero-icon img { width: 100%; height: 100%; object-fit: cover; }
</style>
