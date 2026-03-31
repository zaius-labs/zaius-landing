<svelte:head><title>Canopy — Zaius</title></svelte:head>

<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem">
    <p class="back-link"><a href="/projects">&larr; Projects</a></p>
    <div class="project-hero-icon"><img src="/projects/canopy.png" alt="Canopy" /></div>
    <h1 class="landing-title">Canopy</h1>
    <p class="landing-subhead">The model that learns how agents work.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <p class="section-body">Canopy reads six signals from every AI agent session. Intent, spatial position in the codebase, momentum, coherence decay, knowledge state, and structured user intent. It fuses them through a Mixture-of-Experts layer and outputs a single pressure score.</p>
    <p class="section-body">That score drives everything. Which agent gets spawned next. What it should focus on. Whether the current trajectory is productive or going in circles.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Architecture</h2>
    <p class="section-body">The backbone is Mamba, a state-space model that processes temporal sequences without the quadratic cost of attention. Hidden states capture things handcrafted features can't: transitions between work phases, stuck states, drift from the original goal.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Validation</h2>
    <p class="section-body">We tested this rigorously. Five research tracks. Frozen benchmarks. Bootstrap confidence intervals on every metric. The result: a hybrid architecture where gradient-boosted trees handle prediction on handcrafted features (AUROC 0.924) while Mamba hidden states handle temporal structure underneath.</p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Canopy doesn't tell agents what to think. It tells them where the pressure is.</p>
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
