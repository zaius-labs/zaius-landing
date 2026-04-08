<svelte:head><title>RVST — Zaius</title></svelte:head>

<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem">
    <p class="back-link"><a href="/projects">&larr; Projects</a></p>
    <div class="project-hero-icon"><img src="/projects/rvst.png" alt="RVST" /></div>
    <h1 class="landing-title">RVST</h1>
    <p class="landing-subhead">A native desktop engine for Svelte.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <p class="section-body">Write Svelte 5 components. Style with Tailwind or scoped CSS. Ship a native desktop app.</p>
    <p class="section-body">No Electron. No webview. RVST replaces the browser engine entirely with a purpose-built Rust rendering stack. Your Svelte code compiles to JavaScript as usual. RVST executes it in an embedded Deno runtime, maps the component tree to a Rust layout engine, and renders with a GPU vector graphics engine.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">What you get</h2>
    <ul class="section-list">
      <li>Svelte 5 with runes, reactivity, scoped styles</li>
      <li>Tailwind v4 with full utility class support</li>
      <li>Custom window chrome</li>
      <li>Native file system access from Svelte components</li>
      <li>GPU-accelerated rendering with Vello</li>
      <li>Headless rendering and scene graph queries</li>
    </ul>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Why it matters</h2>
    <p class="section-body">The renderer is queryable. Agents can ask the engine what rendered where, verify layout matches intent, and catch visual regressions before a human sees them. Same Svelte components can target both the browser and RVST.</p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Svelte is the language. Rust is the kernel. Agents are first-class renderer users.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <p class="section-body">
      <a href="https://github.com/zaius-labs/rvst" target="_blank" rel="noopener" class="repo-link">github.com/zaius-labs/rvst</a>
    </p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Full docs, quick start, and templates are in the repo README.</p>
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
  .section-list { list-style: none; padding: 0; margin: 0; }
  .section-list li { padding: 0.3rem 0; color: var(--text-secondary, #666); font-size: 0.95rem; }
  .section-list li::before { content: "- "; color: #999; }
  .repo-link { font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent); text-decoration: none; letter-spacing: 0.02em; }
  .repo-link:hover { text-decoration: underline; }
</style>
