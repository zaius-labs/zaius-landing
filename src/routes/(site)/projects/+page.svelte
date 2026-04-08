<svelte:head><title>Projects — Zaius</title></svelte:head>

<!-- Hero -->
<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem">
    <h1 class="landing-title">Projects</h1>
    <p class="landing-subhead">Three systems. One goal: make AI work for the people using it.</p>
  </div>
</div>

<!-- Canopy -->
<div class="grid-row">
  <div class="grid-cell">
    <a href="/projects/canopy" class="project-card">
      <div class="project-icon">
        <img src="/projects/canopy.png" alt="Canopy" />
      </div>
      <div>
        <div class="feature-number">01 —</div>
        <div class="feature-title">Canopy</div>
        <div class="feature-desc">A learned model that watches how AI agents work and tells them what to do next. Six signals in, one pressure score out.</div>
      </div>
    </a>
  </div>
</div>

<!-- RVST -->
<div class="grid-row">
  <div class="grid-cell">
    <a href="/projects/rvst" class="project-card">
      <div class="project-icon">
        <img src="/projects/rvst.png" alt="RVST" />
      </div>
      <div>
        <div class="feature-number">02 —</div>
        <div class="feature-title">RVST</div>
        <div class="feature-desc">A Rust rendering engine that lets AI agents see and verify their own frontend work. Not a better Electron. A verifiable UI engine.</div>
        <div class="feature-repo"><a href="https://github.com/zaius-labs/rvst" target="_blank" rel="noopener" onclick="event.stopPropagation()">github.com/zaius-labs/rvst</a></div>
      </div>
    </a>
  </div>
</div>

<!-- Zaius -->
<div class="grid-row">
  <div class="grid-cell">
    <a href="/projects/zaius" class="project-card">
      <div class="project-icon">
        <img src="/projects/zaius.png" alt="Zaius" />
      </div>
      <div>
        <div class="feature-number">03 —</div>
        <div class="feature-title">Zaius</div>
        <div class="feature-desc">The platform tying it all together. An Elixir server that coordinates AI agents through pressure fields instead of prompts.</div>
      </div>
    </a>
  </div>
</div>

<!-- Footer -->
<div class="grid-row" style="border-bottom:none">
  <div class="grid-cell" style="padding-top:2rem;padding-bottom:1.5rem">
    <footer class="landing-footer">
      <a href="/">Home</a>
      <a href="https://x.com/shinyobjectz_" target="_blank" rel="noopener">Twitter</a>
      <a href="https://www.linkedin.com/in/shanemurphy" target="_blank" rel="noopener">LinkedIn</a>
      <a href="/context-dynamics.pdf">Book</a>
    </footer>
  </div>
</div>

<style>
  .project-card {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    text-decoration: none;
    color: inherit;
  }
  .project-card:hover {
    text-decoration: none;
  }
  .project-card:hover :global(.feature-title) {
    color: var(--accent);
  }
  .project-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
    background: #f5f3ee;
    margin-top: 0.15rem;
  }
  .project-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :global(.feature-repo) {
    margin-top: 0.35rem;
  }
  :global(.feature-repo a) {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: #999;
    text-decoration: none;
    letter-spacing: 0.02em;
  }
  :global(.feature-repo a:hover) {
    color: var(--accent);
  }
</style>
