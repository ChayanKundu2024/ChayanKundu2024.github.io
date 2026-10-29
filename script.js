/* =====================================================================
   script.js  -  builds the pages from content.js. You never need to
   edit this file. (Menu items are in the PAGES list just below.)
   ===================================================================== */
(function () {
  const $ = (id) => document.getElementById(id);

  /* ---------- helpers ---------- */
  const join = (arr) => arr.filter(Boolean).join(" · ");
  const endDot = (s) => (/[.?!]$/.test(s) ? s : s + ".");
  const boldMe = (s) => String(s).replace(/Chayan Kundu/g, "<strong>Chayan Kundu</strong>");
  const doiUrl = (d) => "https://doi.org/" + String(d).trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
  const fmtDate = (d) => {
    const dt = new Date(d + "T00:00:00");
    return isNaN(dt) ? d : dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };
  const ext = (url) => (/^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "");
  const empty = (c) => { c.innerHTML = '<p class="empty">Nothing here yet.</p>'; };

  /* ---------- menu (edit here to add / rename pages) ---------- */
  const PAGES = [
    ["index", "Home", "index.html"],
    ["articles", "Articles", "articles.html"]
  ];
  const here = (location.pathname.split("/").pop() || "index").replace(".html", "") || "index";

  /* ---------- theme (dark / light) ---------- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    const b = $("theme-toggle");
    if (b) b.textContent = t === "dark" ? "☀ Light" : "☾ Dark";
  }

  function renderHeader() {
    const h = $("site-header");
    if (!h) return;
    h.innerHTML =
      '<div class="bar-inner"><a class="brand" href="index.html">' + SITE.name + "</a><nav>" +
      PAGES.map((p) => '<a href="' + p[2] + '"' + (p[0] === here ? ' class="active"' : "") + ">" + p[1] + "</a>").join("") +
      '<button id="theme-toggle" type="button" aria-label="Switch light or dark theme"></button></nav></div>';
    $("theme-toggle").addEventListener("click", () => {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }

  function renderFooter() {
    const f = $("site-footer");
    if (f) f.innerHTML = '<div class="inner">© ' + new Date().getFullYear() + " " + SITE.name + "</div>";
  }

  /* ---------- link buttons (email, LinkedIn, ...) ---------- */
  function linkButtons() {
    const L = SITE.links || {};
    const defs = [
      ["email", "Email", (v) => "mailto:" + v],
      ["linkedin", "LinkedIn", (v) => v],
      ["scholar", "Google Scholar", (v) => v],
      ["orcid", "ORCID", (v) => v],
      ["researchgate", "ResearchGate", (v) => v]
    ];
    return defs
      .filter((d) => L[d[0]])
      .map((d) => '<a class="btn" href="' + d[2](L[d[0]]) + '"' + ext(L[d[0]]) + ">" + d[1] + "</a>")
      .join("");
  }

  /* ---------- Home page ---------- */
  function renderHero() {
    const h = $("hero");
    if (!h) return;
    const initials = SITE.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
    let pic = '<div class="initials">' + initials + "</div>";
    h.innerHTML =
      '<div id="hero-pic"></div><div><h1>' + SITE.name + '</h1><p class="title">' + SITE.title +
      '</p><p class="affil">' + SITE.affiliation + '</p><div class="btns">' + linkButtons() + "</div></div>";
    const slot = $("hero-pic");
    if (SITE.photo) {
      const img = new Image();
      img.alt = SITE.name;
      img.onload = () => slot.replaceWith(img);
      img.onerror = () => { slot.outerHTML = pic; };
      img.src = SITE.photo;
    } else {
      slot.outerHTML = pic;
    }
  }

  function renderChips(id, arr) {
    const c = $(id);
    if (!c) return;
    c.innerHTML = arr.map((t) => '<li class="chip">' + t + "</li>").join("");
  }

  function renderList(id, items) {
    const c = $(id);
    if (!c) return;
    if (!items.length) return empty(c);
    c.innerHTML = items.map((i) => {
      const meta = join([i.where, i.when]);
      const pts = i.points && i.points.length ? "<ul>" + i.points.map((p) => "<li>" + p + "</li>").join("") + "</ul>" : "";
      return '<div class="item"><h3>' + i.title + "</h3>" + (meta ? '<div class="meta">' + meta + "</div>" : "") + pts + "</div>";
    }).join("");
  }

  /* ---------- Publications page ---------- */
  function renderPublications() {
    const c = $("publications");
    if (!c) return;
    if (!PUBLICATIONS.length) return empty(c);
    c.innerHTML = PUBLICATIONS.map((p) =>
      "<li>" + boldMe(p.authors) + " (" + p.year + "). " +
      '<span class="pub-title">' + endDot(p.title) + "</span> <em>" + p.journal + "</em>." +
      (p.doi ? ' <a href="' + doiUrl(p.doi) + '" target="_blank" rel="noopener">DOI ↗</a>' : "") + "</li>"
    ).join("");
  }

  /* ---------- Articles ---------- */
  const sortedArticles = () => [...ARTICLES].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  function cardHtml(a) {
    return '<article class="card"><div class="date">' + fmtDate(a.date) + "</div><h3>" + a.title + "</h3><p>" + a.summary + "</p>" +
      '<ul class="chips">' + (a.tags || []).map((t) => '<li class="chip">' + t + "</li>").join("") + "</ul>" +
      (a.link ? '<a class="more" href="' + a.link + '"' + ext(a.link) + ">Read more →</a>" : "") + "</article>";
  }

  function renderArticles() {
    const grid = $("articles");
    if (!grid) return;
    const all = sortedArticles();
    if (!all.length) return empty(grid);

    const bar = $("filters");
    let active = "All";
    const draw = () => {
      const list = active === "All" ? all : all.filter((a) => (a.tags || []).includes(active));
      grid.innerHTML = list.map(cardHtml).join("");
      if (bar) bar.querySelectorAll(".filter").forEach((b) => b.classList.toggle("on", b.dataset.tag === active));
    };
    if (bar) {
      const tags = [...new Set(all.flatMap((a) => a.tags || []))].sort();
      bar.innerHTML = ["All", ...tags].map((t) => '<button type="button" class="filter" data-tag="' + t + '">' + t + "</button>").join("");
      bar.addEventListener("click", (e) => {
        if (e.target.dataset.tag) { active = e.target.dataset.tag; draw(); }
      });
    }
    draw();
  }

  function renderLatest() {
    const c = $("latest-articles");
    if (!c) return;
    const top = sortedArticles().slice(0, 3);
    if (!top.length) return empty(c);
    c.innerHTML = top.map(cardHtml).join("");
  }

  /* ---------- go ---------- */
  renderHeader();
  renderFooter();
  renderHero();
  const about = $("about");
  if (about) about.innerHTML = SITE.about;
  renderChips("interests", INTERESTS);
  if (typeof SKILLS !== "undefined") renderChips("skills", SKILLS);
  renderList("education", EDUCATION);
  renderList("teaching", TEACHING);
  renderList("experience", EXPERIENCE);
  renderList("training", TRAINING);
  renderList("conferences", CONFERENCES);
  renderList("awards", AWARDS);
  renderPublications();
  renderList("presentations", PRESENTATIONS.map((p) => ({ title: p.title, where: join([p.type, p.event]), when: p.when })));
  renderArticles();
  renderLatest();
  const contact = $("contact-links");
  if (contact) contact.innerHTML = linkButtons();
})();
