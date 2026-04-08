<svelte:head><title>Zaius Platform — Zaius</title></svelte:head>

<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem">
    <p class="back-link"><a href="/projects">&larr; Projects</a></p>
    <div class="project-hero-icon"><img src="/projects/zaius.png" alt="Zaius" /></div>
    <h1 class="landing-title">Zaius</h1>
    <p class="landing-subhead">The platform that ties it all together.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <p class="section-body">Zaius is an Elixir server that coordinates AI agents. Not with prompts. Not with a central orchestrator. With pressure fields.</p>
    <p class="section-body">The core is a tick loop. Every cycle, it reads pressure scores from Canopy and decides what needs attention. High pressure means something is stuck, drifting, or blocked. The scheduler spawns focused sub-agents to deal with it. Low pressure means things are flowing. Leave them alone.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Agent Client Protocol</h2>
    <p class="section-body">External agents connect through ACP. Claude Code, Codex, Cursor — they all plug in as mods. Each one gets its own fine-tuning adapter so the system learns how different engines behave over time.</p>
  </div>
</div>

<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Bit Language</h2>
    <p class="section-body">Everything is structured in Bit, a composable format for defining work. No JSON configs. No YAML pipelines. Just plain-text constructs that humans can read and agents can parse.</p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Stop babysitting AI. Give it a task, let the system coordinate, come back to results that compound.</p>
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
