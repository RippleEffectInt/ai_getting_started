/* Static GitHub Pages renderer for the reviewed localisation drafts. */
(function () {
  "use strict";

  const code = location.pathname.split("/").filter(Boolean).pop();
  const c = t[code];
  if (!c) {
    location.replace("../");
    return;
  }

  document.documentElement.lang = c.lang;
  document.title = `${c.native} | Get started with Microsoft Copilot | Ripple Effect`;

  const h = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
  const ways = c.ways.map((item, index) => `
    <figure class="launch-card">
      <div class="launch-number">${index + 1}</div>
      <div class="image-frame"><img src="../assets/images/${["copilot-taskbar.png", "copilot-search.png", "copilot-app-launcher.png"][index]}" alt="${h(item[0])}"></div>
      <figcaption><strong>${h(item[0])}</strong><span>${h(item[1])}</span></figcaption>
    </figure>`).join("");
  const tries = c.tries.map((item, index) => `
    <article class="challenge-card">
      <div class="challenge-top"><span>0${index + 1}</span><button class="done-button" type="button" data-try="${index}">${h(c.mark)}</button></div>
      <h3>${h(item[0])}</h3><p>${h(item[1])}</p>
    </article>`).join("");
  const checks = c.checks.map((item, index) => `
    <article><span class="check-number">${index + 1}</span><h3>${h(item[0])}</h3><p>${h(item[1])}</p></article>`).join("");
  const rules = c.rules.map((item, index) => `
    <article class="golden-rule${index === 4 ? " rule-featured" : ""}"><span>${index + 1}</span><div><h3>${h(item[0])}</h3><p>${h(item[1])}</p></div></article>`).join("");

  document.getElementById("app").innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="../"><span class="brand-mark">RE</span><span><strong>Ripple Effect</strong><small>${h(c.native)}</small></span></a>
      <nav><a href="#open">${h(c.open)}</a><a href="#task">${h(c.task)}</a><a href="#check">${h(c.check)}</a></nav>
      <a class="help-link" href="#help">${h(c.help)}</a>
    </header>
    <div class="localisation-review-banner"><strong>${h(c.status)}</strong><span>${h(c.master)}</span></div>
    <main id="main">
      <section class="hero">
        <div class="hero-copy"><p class="eyebrow">● 10 minutes</p><h1>${h(c.hero)}</h1><p class="hero-lede">${h(c.lede)}</p><a class="primary-button" href="#open">${h(c.open)} ↓</a></div>
        <aside class="hero-card"><p class="card-kicker">Copilot</p><p class="big-quote">${h(c.ask)}</p></aside>
      </section>
      <section class="section-shell" id="open"><div class="section-heading"><p class="step-label">1</p><h2>${h(c.open)}</h2></div><div class="launch-grid">${ways}</div></section>
      <section class="first-task-section" id="task"><div class="section-shell"><div class="section-heading light"><p class="step-label light">2</p><h2>${h(c.task)}</h2></div>
        <div class="task-builder"><div class="task-input"><label for="tasks">${h(c.label)}</label><p class="field-help">${h(c.caution)}</p><textarea id="tasks"></textarea></div>
        <div class="prompt-preview"><div class="prompt-topline">${h(c.promptLabel)} <button class="copy-button" id="copy-prompt" type="button">${h(c.copy)}</button></div><pre id="prompt-output">${h(c.prompt)}</pre></div></div>
      </div></section>
      <section class="section-shell mode-section"><div class="mode-copy"><p class="step-label">Think Deeper</p><h2>Think Deeper</h2><p>${h(c.think)}</p></div><figure class="mode-image"><img src="../assets/images/changing-model.png" alt="${h(c.modelAlt)}"></figure></section>
      <section class="practice-section"><div class="section-shell"><div class="section-heading"><h2>${h(c.practice)}</h2></div><div class="challenge-grid">${tries}</div></div></section>
      <section class="check-section" id="check"><div class="section-shell"><div class="check-heading"><p class="step-label light">${h(c.checkLabel)}</p><h2>${h(c.check)}</h2></div><div class="check-grid">${checks}</div></div></section>
      <section class="section-shell"><div class="section-heading"><p class="step-label">${h(c.safetyLabel)}</p><h2>${h(c.safety)}</h2></div><div class="five-rules-grid">${rules}</div></section>
      <section class="help-section" id="help"><div class="section-shell help-inner"><div><h2>${h(c.help)}</h2><p>${h(c.helpBody)}</p></div><div class="help-card"><strong>Ripple Effect AI</strong></div></div></section>
      <section class="closing-section"><a class="primary-button" href="../">${h(c.back)}</a></section>
    </main>`;

  const tasks = document.getElementById("tasks");
  const output = document.getElementById("prompt-output");
  const updatePrompt = () => { output.textContent = `${c.prompt}\n\n${tasks.value}`; };
  tasks.addEventListener("input", updatePrompt);
  document.getElementById("copy-prompt").addEventListener("click", async (event) => {
    await navigator.clipboard.writeText(output.textContent);
    event.currentTarget.textContent = c.copied;
    setTimeout(() => { event.currentTarget.textContent = c.copy; }, 1500);
  });
  document.querySelectorAll("[data-try]").forEach((button) => button.addEventListener("click", () => {
    button.classList.toggle("is-done");
    button.textContent = button.classList.contains("is-done") ? c.tried : c.mark;
  }));
})();
