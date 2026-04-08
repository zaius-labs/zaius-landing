<script lang="ts">
  let email = $state('');
  let submitted = $state(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Still show success
    }
    submitted = true;
  }
</script>

<svelte:head><title>Zaius — The Agent Harness That Evolves</title></svelte:head>

<!-- Hero -->
<div class="grid-row">
  <div class="grid-cell" style="padding-top:4rem;padding-bottom:3.5rem">
    <section class="landing-hero">
      <h1 class="landing-title">The Agent Harness<br>That Evolves.</h1>
      <p class="landing-subhead">Zaius runs complex, multi-step work autonomously and gets better at it every time. Give it a task. Come back to results that compound.</p>
      <p class="platform-inline">
        <span class="badge">Open Source · MIT License</span>
        <span class="badge">macOS · Linux · Cloud</span>
      </p>
      {#if submitted}
        <p class="badge">You're on the list.</p>
      {:else}
        <form class="email-capture" onsubmit={handleSubmit}>
          <input type="email" bind:value={email} placeholder="your@email.com" aria-label="Email address" required />
          <button type="submit">Notify me</button>
        </form>
      {/if}
    </section>
  </div>
</div>

<!-- What it is -->
<div class="grid-row">
  <div class="grid-cell">
    <p>Zaius is a harness for large language models. A structured runtime that gives them memory, tools, coordination, and a learning system that improves across every run. Other tools hand control to the model and hope for the best. Zaius keeps the model accountable to a plan, and evolves the plan based on what it has learned.</p>
    <p>Underneath is <strong>Canopy</strong>, a harness dynamics model that trains on the operational history of every session and injects what it learns into future runs as structured directives. The system does not just run work. It accumulates intelligence about how work gets done.</p>
  </div>
</div>

<!-- Features -->
<div class="grid-row">
  <div class="grid-cell">
    <div class="feature-list">
      <div class="feature-item">
        <div class="feature-number">01 —</div>
        <div class="feature-title">Runs and learns.</div>
        <div class="feature-desc">Every session trains Canopy. The next run starts smarter.</div>
      </div>
      <div class="feature-item">
        <div class="feature-number">02 —</div>
        <div class="feature-title">Pressure-field coordination.</div>
        <div class="feature-desc">Work flows toward what matters. No central orchestrator.</div>
      </div>
      <div class="feature-item">
        <div class="feature-number">03 —</div>
        <div class="feature-title">Mod ecosystem.</div>
        <div class="feature-desc">Extend capabilities with plain-file mods. Read them, edit them, ship them.</div>
      </div>
      <div class="feature-item">
        <div class="feature-number">04 —</div>
        <div class="feature-title">Bit language.</div>
        <div class="feature-desc">Define structure, behavior, and data in one composable format.</div>
      </div>
    </div>
  </div>
</div>

<!-- Context Dynamics -->
<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Context Dynamics</h2>
    <p class="section-body">We wrote the textbook on measuring AI agent behavior. Context Dynamics introduces a physics-inspired framework for understanding how agents move through context space, why they commit, when they degrade, and how to build systems that improve from their own operation.</p>
    <p class="section-body" style="color:#888;font-size:0.85rem">Inertia. Entropy. Space. Three forces. One framework.</p>
    <div class="hero-cta" style="margin-top:1rem">
      <a href="/context-dynamics.pdf" class="cta-button cta-primary">Download Latest Draft</a>
    </div>
  </div>
</div>

<!-- Projects -->
<div class="grid-row">
  <div class="grid-cell">
    <h2 class="section-title">Projects</h2>
    <div class="home-projects">
      <a href="/projects/canopy" class="home-project">
        <img src="/projects/canopy.png" alt="Canopy" class="home-project-icon" />
        <div>
          <div class="feature-title">Canopy</div>
          <div class="feature-desc">Six signals in, one pressure score out.</div>
        </div>
      </a>
      <a href="/projects/rvst" class="home-project">
        <img src="/projects/rvst.png" alt="RVST" class="home-project-icon" />
        <div>
          <div class="feature-title">RVST</div>
          <div class="feature-desc">A verifiable UI rendering engine.</div>
        </div>
      </a>
      <a href="/projects/zaius" class="home-project">
        <img src="/projects/zaius.png" alt="Zaius" class="home-project-icon" />
        <div>
          <div class="feature-title">Zaius</div>
          <div class="feature-desc">Pressure-field agent coordination.</div>
        </div>
      </a>
    </div>
  </div>
</div>

<!-- Footer -->
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
  .home-projects {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
  }
  .home-project {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
  }
  .home-project:hover {
    text-decoration: none;
  }
  .home-project:hover :global(.feature-title) {
    color: var(--accent);
  }
  .home-project :global(.feature-title) {
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 1.2;
  }
  .home-project :global(.feature-desc) {
    font-size: 0.85rem;
    line-height: 1.3;
    margin-top: 0.15rem;
  }
  .home-project-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    flex-shrink: 0;
  }
</style>
