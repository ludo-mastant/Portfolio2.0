/* ===========================
   Premium BTS SIO Portfolio
   =========================== */

   const $ = (q, el = document) => el.querySelector(q);
   const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));
   
   /* ---------------------------
      Data
   ---------------------------- */
   const STACK = ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL", "Git/GitHub"];
   
   const PROJECTS = [
     {
       id: "p1",
       title: "Clone Netflix (Front + BDD)",
       category: "Web",
       kicker: "Projet web • UI",
       desc:
         "Projet web où j'ai reproduit l'interface de Netflix avec HTML, CSS et JavaScript, puis relié à une base de données (phpMyAdmin) pour gérer du contenu.",
       tech: ["HTML", "CSS", "JavaScript", "PHP", "phpMyAdmin", "SQL"],
       meta: ["Rôle : dev", "Objectif : reproduire une UI + connecter une BDD", "Résultat : interface fonctionnelle"],
       proof: ["Captures UI (assets/preuves)", "Schéma BDD (PDF/PNG)", "README projet"],
       links: [
         { label: "Repo GitHub", href: "https://github.com/Elie-Shyti/Beeflix" },
         { label: "Preuves (dossier)", href: "./assets/Beeflix" },
       ],
     },
     {
       id: "p2",
       title: "Jeu Monopoly (Python)",
       category: "Python",
       kicker: "Projet logiciel",
       desc: "Développement d'un jeu Monopoly en Python avec gestion des joueurs et des règles.",
       tech: ["Python"],
       meta: ["Rôle : dev", "Fonctions : joueurs, règles, tours", "Résultat : jeu jouable en console"],
       proof: ["Extraits de code commentés", "README + règles"],
       links: [{ label: "Repo", href: "https://github.com/ludo-mastant/Projet-Monopoly" }],
     },
     {
       id: "p3",
       title: "Projet Unity 2D (maintenance)",
       category: "Jeu",
       kicker: "Work in progress",
       desc:
         "Développement d’un jeu 2D avec Unity. Projet actuellement en maintenance pour améliorer le gameplay et l’interface utilisateur.",
       tech: ["Unity", "C#"],
       meta: ["Rôle : dev", "Statut : en cours", "Prochaines étapes : gameplay + UI"],
       proof: ["Captures (assets/preuves)", "Roadmap (PDF)", "README"],
       links: [{ label: "pas de Repo", href: "#" }],
     },
     {
       id: "p4",
       title: "Stage CTI Saint-Étienne (Service MEO)",
       category: "Stage",
       kicker: "CTI • Mise en Œuvre",
       desc:
         "Stage au CTI (Centre de Traitement Informatique) de Saint-Étienne, dans le service MEO. Découverte des environnements (HorsProd, Prod, Qualif) et des processus de mise en production.",
       tech: ["Linux/Unix", "SSH", "Scripts", "Exploitation", "Docs"],
       meta: ["Missions : MEP", "Scripts Unix/Linux", "Réunions versions/incidents"],
       proof: ["Compte-rendu stage (PDF)", "Journal de bord", "Scripts (anonymisés)"],
       links: [{ label: "Dossier preuves", href: "./assets/" }],
     },
   ];
   
   const SKILLS = [
     {
       group: "Web",
       percent: 85,
       items: [
         { title: "HTML/CSS (responsive)", proof: "Clone Netflix : structure + mise en page + responsive" },
         { title: "JavaScript (DOM)", proof: "Interactions UI, navigation" },
         { title: "PHP (bases)", proof: "Connexion BDD, pages dynamiques" },
       ],
     },
     {
       group: "Python",
       percent: 75,
       items: [
         { title: "Logique / algorithmes", proof: "Jeu Monopoly : règles, tours, joueurs" },
         { title: "Structuration du code", proof: "Fonctions, classe, organisation" },
       ],
     },
     {
       group: "SQL / Données",
       percent: 70,
       items: [
         { title: "Modélisation simple", proof: "Tables, relations, contraintes" },
         { title: "Requêtes", proof: "SELECT/INSERT/UPDATE/DELETE" },
       ],
     },
     {
       group: "Git / Docs",
       percent: 82,
       items: [
         { title: "Git/GitHub", proof: "Repos, commits, README, Markdown" },
         { title: "Documentation", proof: "Preuves : captures, PDF, procédures, journal de bord" },
       ],
     },
   ];
   
   /* VEILLE : 3 points clés 2025 */
   const VEILLE = [
     {
       title: "2025 — UE 5.6 : grosse priorité performance / open-world",
       desc:
         "Le signal principal de 2025, c’est l’accent mis sur la performance et les mondes ouverts. En pratique : optimiser tôt (profiling), limiter la logique lourde en Blueprints (tick), et garder une base C++ solide pour des systèmes stables.",
       tag: "Perf • Open-world",
       tech: ["UE 5.6", "Profiling", "C++", "Blueprints"],
     },
     {
       title: "2025 — UE 5.7 : worldbuilding et outils créatifs renforcés",
       desc:
         "Fin 2025, UE 5.7 améliore encore les outils de construction de monde et les workflows (procédural/PCG, environnements, rendu/animation). L’impact côté dev : mieux organiser le projet (assets, modules) et garder une documentation claire.",
       tag: "Outils • Worldbuilding",
       tech: ["UE 5.7", "PCG", "Worldbuilding", "Workflow"],
     },
     {
       title: "2025 — Côté “langage” : C++/Blueprints + montée de Verse (UEFN)",
       desc:
         "En 2025, le duo C++ + Blueprints reste la base des projets UE5, mais Verse (surtout UEFN/Fortnite) prend de l’importance avec des outils d’assistance. À surveiller : l’évolution des workflows de scripting dans l’écosystème Epic.",
       tag: "Langage • Scripting",
       tech: ["C++", "Blueprints", "Verse", "UEFN"],
     },
   ];
   
   /* CERTIFICATIONS : tu modifies juste ici */
   const CERTIFS = [
     {
       title: "SecNumacadémie",
       org: "SecNum de l'ANSSI",
       date: "2024",
       proof: "./assets/ma-certification_SecNum.pdf",
     },
     // Ajoute-en d'autres si tu veux
   ];
   
   const TIMELINE = [
     { title: "Bac STI2D option SIN", date: "Avant BTS", desc: "Systèmes Informatique Numérique : bases techniques et numériques." },
     { title: "BTS SIO option SLAM", date: "2024 → 2026", desc: "Développement d'applications : Web, Python, SQL, projets et preuves." },
     { title: "Stage CTI (Service MEO)", date: "1ère année", desc: "MEP, scripts Unix/Linux, réunions versions/incidents, découverte du monde pro." },
   ];
   
   /* ---------------------------
      Theme
   ---------------------------- */
   const themeKey = "portfolio_theme";
   function setTheme(mode) {
     document.documentElement.setAttribute("data-theme", mode);
     localStorage.setItem(themeKey, mode);
     const icon = mode === "light" ? "☼" : "☾";
     $$(".chip__icon").forEach((el) => (el.textContent = icon));
   }
   function toggleTheme() {
     const current = document.documentElement.getAttribute("data-theme") || "dark";
     setTheme(current === "dark" ? "light" : "dark");
   }
   setTheme(localStorage.getItem(themeKey) || "dark");
   $("#btnTheme")?.addEventListener("click", toggleTheme);
   $("#btnTheme2")?.addEventListener("click", toggleTheme);
   
   /* ---------------------------
      Header drawer
   ---------------------------- */
   const drawer = $("#drawer");
   const openDrawer = () => {
     drawer.classList.add("is-open");
     drawer.setAttribute("aria-hidden", "false");
   };
   const closeDrawer = () => {
     drawer.classList.remove("is-open");
     drawer.setAttribute("aria-hidden", "true");
   };
   $("#btnBurger")?.addEventListener("click", openDrawer);
   $("#btnCloseDrawer")?.addEventListener("click", closeDrawer);
   drawer?.addEventListener("click", (e) => { if (e.target === drawer) closeDrawer(); });
   $$(".drawer__links a").forEach((a) => a.addEventListener("click", closeDrawer));
   
   /* ---------------------------
      Typing effect
   ---------------------------- */
   const typingEl = $("#typing");
   const roles = [
     "développeur web (SLAM).",
     "profil orienté projets.",
     "passionné par le dev et les jeux.",
   ];
   let tIndex = 0, cIndex = 0, deleting = false;
   
   function tickTyping() {
     const text = roles[tIndex];
     if (!deleting) {
       cIndex++;
       typingEl.textContent = text.slice(0, cIndex);
       if (cIndex >= text.length) {
         deleting = true;
         setTimeout(tickTyping, 1100);
         return;
       }
     } else {
       cIndex--;
       typingEl.textContent = text.slice(0, cIndex);
       if (cIndex <= 0) {
         deleting = false;
         tIndex = (tIndex + 1) % roles.length;
       }
     }
     const speed = deleting ? 30 : 45;
     setTimeout(tickTyping, speed);
   }
   tickTyping();
   
   /* ---------------------------
      Stack chips
   ---------------------------- */
   const stackWrap = $("#stackChips");
   STACK.forEach((s) => {
     const span = document.createElement("span");
     span.className = "chiplet";
     span.textContent = s;
     stackWrap.appendChild(span);
   });
   
   /* ---------------------------
      Reveal on scroll
   ---------------------------- */
   const revealObs = new IntersectionObserver(
     (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
     { threshold: 0.12 }
   );
   $$(".reveal").forEach((el) => revealObs.observe(el));
   
   /* ---------------------------
      Stats count-up
   ---------------------------- */
   function animateCount(el) {
     const target = Number(el.dataset.count || "0");
     const duration = 900;
     const start = performance.now();
     const from = 0;
   
     function step(now) {
       const p = Math.min(1, (now - start) / duration);
       const eased = 1 - Math.pow(1 - p, 3);
       const value = Math.round(from + (target - from) * eased);
       el.textContent = target >= 1000 ? value.toLocaleString("fr-FR") : String(value);
       if (p < 1) requestAnimationFrame(step);
     }
     requestAnimationFrame(step);
   }
   
   const statObs = new IntersectionObserver(
     (entries) => {
       entries.forEach((e) => {
         if (e.isIntersecting) {
           animateCount(e.target);
           statObs.unobserve(e.target);
         }
       });
     },
     { threshold: 0.7 }
   );
   $$(".stat__num").forEach((el) => statObs.observe(el));
   
   /* ---------------------------
      Projects render + filter + modal
   ---------------------------- */
   const categories = ["Tous", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
   let activeCat = "Tous";
   let search = "";
   
   const tabs = $("#projectTabs");
   const grid = $("#projectsGrid");
   
   function renderTabs() {
     tabs.innerHTML = "";
     categories.forEach((c) => {
       const btn = document.createElement("button");
       btn.className = "tab" + (c === activeCat ? " is-active" : "");
       btn.type = "button";
       btn.textContent = c;
       btn.addEventListener("click", () => {
         activeCat = c;
         renderTabs();
         renderProjects();
       });
       tabs.appendChild(btn);
     });
   }
   
   function projectMatches(p) {
     const matchCat = activeCat === "Tous" ? true : p.category === activeCat;
     const q = search.trim().toLowerCase();
     const matchSearch =
       !q ||
       p.title.toLowerCase().includes(q) ||
       p.desc.toLowerCase().includes(q) ||
       p.tech.join(" ").toLowerCase().includes(q);
     return matchCat && matchSearch;
   }
   
   function renderProjects() {
     grid.innerHTML = "";
     const list = PROJECTS.filter(projectMatches);
   
     if (!list.length) {
       const empty = document.createElement("div");
       empty.className = "panel";
       empty.innerHTML = `<h3 class="h3">Aucun résultat</h3><p class="p">Change de filtre ou de recherche.</p>`;
       grid.appendChild(empty);
       return;
     }
   
     list.forEach((p) => {
       const card = document.createElement("article");
       card.className = "card reveal is-visible";
       card.innerHTML = `
         <div class="card__top">
           <h3 class="card__title">${escapeHtml(p.title)}</h3>
           <span class="card__tag">${escapeHtml(p.category)}</span>
         </div>
         <p class="card__desc">${escapeHtml(p.desc)}</p>
         <div class="chips">
           ${p.tech.slice(0, 4).map((t) => `<span class="pchip">${escapeHtml(t)}</span>`).join("")}
           ${p.tech.length > 4 ? `<span class="pchip">+${p.tech.length - 4}</span>` : ""}
         </div>
         <div class="card__bot">
           <button class="card__btn" type="button" data-open="${p.id}">
             Détails <span aria-hidden="true">↗</span>
           </button>
           <div class="card__meta">${escapeHtml(p.kicker)}</div>
         </div>
       `;
       grid.appendChild(card);
     });
   
     $$("[data-open]").forEach((btn) => {
       btn.addEventListener("click", () => openModal(btn.dataset.open));
     });
   }
   
   $("#projectSearch")?.addEventListener("input", (e) => {
     search = e.target.value;
     renderProjects();
   });
   
   renderTabs();
   renderProjects();
   
   /* Modal */
   const modal = $("#modal");
   const btnCloseModal = $("#btnCloseModal");
   const btnPrev = $("#btnPrev");
   const btnNext = $("#btnNext");
   
   let modalIndex = 0;
   
   function openModal(projectId) {
     const list = PROJECTS.filter(projectMatches);
     modalIndex = Math.max(0, list.findIndex((p) => p.id === projectId));
     if (modalIndex < 0) modalIndex = 0;
     fillModal(list[modalIndex], list);
     modal.classList.add("is-open");
     modal.setAttribute("aria-hidden", "false");
     document.body.style.overflow = "hidden";
   }
   
   function closeModal() {
     modal.classList.remove("is-open");
     modal.setAttribute("aria-hidden", "true");
     document.body.style.overflow = "";
   }
   
   function fillModal(p, currentList) {
     $("#modalKicker").textContent = p.kicker;
     $("#modalTitle").textContent = p.title;
     $("#modalDesc").textContent = p.desc;
   
     const tech = $("#modalTech");
     tech.innerHTML = "";
     p.tech.forEach((t) => {
       const s = document.createElement("span");
       s.className = "pchip";
       s.textContent = t;
       tech.appendChild(s);
     });
   
     const meta = $("#modalMeta");
     meta.innerHTML = "";
     p.meta.forEach((m) => {
       const li = document.createElement("li");
       li.textContent = m;
       meta.appendChild(li);
     });
   
     const proof = $("#modalProof");
     proof.innerHTML = "";
     p.proof.forEach((pr) => {
       const li = document.createElement("li");
       li.textContent = pr;
       proof.appendChild(li);
     });
   
     const links = $("#modalLinks");
     links.innerHTML = "";
     p.links.forEach((l) => {
       const a = document.createElement("a");
       a.className = "link";
       a.href = l.href;
       a.target = "_blank";
       a.rel = "noreferrer";
       a.textContent = l.label;
       links.appendChild(a);
     });
   
     btnPrev.onclick = () => {
       modalIndex = (modalIndex - 1 + currentList.length) % currentList.length;
       fillModal(currentList[modalIndex], currentList);
     };
     btnNext.onclick = () => {
       modalIndex = (modalIndex + 1) % currentList.length;
       fillModal(currentList[modalIndex], currentList);
     };
   }
   
   btnCloseModal?.addEventListener("click", closeModal);
   modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
   window.addEventListener("keydown", (e) => {
     if (e.key === "Escape") {
       if (modal.classList.contains("is-open")) closeModal();
       if ($("#cmdk").classList.contains("is-open")) closeCmdk();
     }
     if (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)) {
       e.preventDefault();
       toggleCmdk(true);
     }
   });
   
   /* ---------------------------
      Skills accordion + meters
   ---------------------------- */
   function setMeter(idText, idBar, value) {
     $(idText).textContent = `${value}%`;
     $(idBar).style.width = `${value}%`;
   }
   setMeter("#mDev", "#bDev", SKILLS.find((s) => s.group === "Web")?.percent ?? 0);
   setMeter("#mNet", "#bNet", SKILLS.find((s) => s.group === "Python")?.percent ?? 0);
   setMeter("#mSec", "#bSec", SKILLS.find((s) => s.group === "Git / Docs")?.percent ?? 0);
   
   const acc = $("#skillsAccordion");
   SKILLS.forEach((g, idx) => {
     const box = document.createElement("div");
     box.className = "acc" + (idx === 0 ? " is-open" : "");
     box.innerHTML = `
       <button class="acc__btn" type="button">
         ${escapeHtml(g.group)} <span>${g.percent}%</span>
       </button>
       <div class="acc__panel">
         <ul class="bullets">
           ${g.items.map((i) => `<li><strong>${escapeHtml(i.title)}</strong> — ${escapeHtml(i.proof)}</li>`).join("")}
         </ul>
       </div>
     `;
     box.querySelector(".acc__btn").addEventListener("click", () => box.classList.toggle("is-open"));
     acc.appendChild(box);
   });
   
   /* ---------------------------
      Veille
   ---------------------------- */
   const veilleGrid = $("#veilleGrid");
   VEILLE.forEach((v) => {
     const card = document.createElement("article");
     card.className = "card reveal";
     card.innerHTML = `
       <div class="card__top">
         <h3 class="card__title">${escapeHtml(v.title)}</h3>
         <span class="card__tag">${escapeHtml(v.tag)}</span>
       </div>
       <p class="card__desc">${escapeHtml(v.desc)}</p>
       <div class="chips">
         ${v.tech.map((t) => `<span class="pchip">${escapeHtml(t)}</span>`).join("")}
       </div>
     `;
     veilleGrid.appendChild(card);
     revealObs.observe(card);
   });
   
   /* ---------------------------
      Parcours (timeline)
   ---------------------------- */
   const tl = $("#timeline");
   TIMELINE.forEach((t) => {
     const li = document.createElement("li");
     li.className = "titem";
     li.innerHTML = `
       <div class="titem__top">
         <h3 class="titem__title">${escapeHtml(t.title)}</h3>
         <div class="titem__date">${escapeHtml(t.date)}</div>
       </div>
       <p class="titem__desc">${escapeHtml(t.desc)}</p>
     `;
     tl.appendChild(li);
   });
   
   /* ---------------------------
     Certifications (rendu)
   ---------------------------- */
   const certifsGrid = document.querySelector("#certifsGrid");
   if (certifsGrid) {
     certifsGrid.innerHTML = "";
     CERTIFS.forEach((c) => {
       const card = document.createElement("article");
       card.className = "card reveal";
       card.innerHTML = `
         <div class="card__top">
           <h3 class="card__title">${escapeHtml(c.title)}</h3>
           <span class="card__tag">${escapeHtml(c.org)}</span>
         </div>
         <p class="card__desc">${escapeHtml(c.date)}</p>
         <div class="card__bot">
           <a class="link" href="${c.proof}" target="_blank" rel="noreferrer">Voir le justificatif (PDF)</a>
         </div>
       `;
       certifsGrid.appendChild(card);
       try { revealObs.observe(card); } catch {}
     });
   }
   
   /* ---------------------------
      Quick buttons
   ---------------------------- */
   $("#btnFocusProjects")?.addEventListener("click", () => (location.hash = "#projets"));
   $("#btnFocusSkills")?.addEventListener("click", () => (location.hash = "#competences"));
   $("#btnFocusContact")?.addEventListener("click", () => (location.hash = "#contact"));
   
   /* ---------------------------
      Contact form: mailto
   ---------------------------- */
   $("#contactForm")?.addEventListener("submit", (e) => {
     e.preventDefault();
     const fd = new FormData(e.target);
     const name = String(fd.get("name") || "");
     const email = String(fd.get("email") || "");
     const subject = String(fd.get("subject") || "");
     const message = String(fd.get("message") || "");
   
     const body =
       `Nom: ${name}\nEmail: ${email}\n\n` +
       `Message:\n${message}\n\n` +
       `---\nEnvoyé depuis le portfolio BTS SIO`;
   
     const mailto = `mailto:ludo-mastant@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
     window.location.href = mailto;
   });
   
   /* Footer year */
   $("#year").textContent = String(new Date().getFullYear());
   
   /* ---------------------------
      Command Palette (CmdK)
   ---------------------------- */
   const cmdk = $("#cmdk");
   const cmdkPanel = $("#cmdkList");
   const cmdkInput = $("#cmdkInput");
   
   const COMMANDS = [
     { title: "Aller aux Projets", desc: "Voir les réalisations", tag: "section", action: () => (location.hash = "#projets") },
     { title: "Aller aux Compétences", desc: "Mapping & preuves", tag: "section", action: () => (location.hash = "#competences") },
     { title: "Aller à la Veille", desc: "Sujets suivis", tag: "section", action: () => (location.hash = "#veille") },
     { title: "Aller au Parcours", desc: "Timeline", tag: "section", action: () => (location.hash = "#parcours") },
     { title: "Aller au Contact", desc: "Écrire un message", tag: "section", action: () => (location.hash = "#contact") },
     { title: "Basculer le thème", desc: "Dark / Light", tag: "ui", action: toggleTheme },
   ];
   
   let cmdkActiveIndex = 0;
   let cmdkFiltered = [...COMMANDS];
   
   function toggleCmdk(open) {
     const isOpen = cmdk.classList.contains("is-open");
     const willOpen = open ?? !isOpen;
     if (willOpen) openCmdk();
     else closeCmdk();
   }
   
   function openCmdk() {
     cmdk.classList.add("is-open");
     cmdk.setAttribute("aria-hidden", "false");
     document.body.style.overflow = "hidden";
     cmdkInput.value = "";
     cmdkActiveIndex = 0;
     cmdkFiltered = [...COMMANDS];
     renderCmdk();
     setTimeout(() => cmdkInput.focus(), 20);
   }
   function closeCmdk() {
     cmdk.classList.remove("is-open");
     cmdk.setAttribute("aria-hidden", "true");
     document.body.style.overflow = "";
   }
   
   $("#btnCmd")?.addEventListener("click", () => toggleCmdk(true));
   cmdk?.addEventListener("click", (e) => { if (e.target === cmdk) closeCmdk(); });
   
   cmdkInput?.addEventListener("input", () => {
     const q = cmdkInput.value.trim().toLowerCase();
     cmdkFiltered = COMMANDS.filter((c) =>
       !q || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
     );
     cmdkActiveIndex = 0;
     renderCmdk();
   });
   
   cmdkInput?.addEventListener("keydown", (e) => {
     if (e.key === "ArrowDown") {
       e.preventDefault();
       cmdkActiveIndex = Math.min(cmdkFiltered.length - 1, cmdkActiveIndex + 1);
       renderCmdk();
     }
     if (e.key === "ArrowUp") {
       e.preventDefault();
       cmdkActiveIndex = Math.max(0, cmdkActiveIndex - 1);
       renderCmdk();
     }
     if (e.key === "Enter") {
       e.preventDefault();
       const cmd = cmdkFiltered[cmdkActiveIndex];
       if (cmd) {
         closeCmdk();
         setTimeout(() => cmd.action(), 20);
       }
     }
   });
   
   function renderCmdk() {
     cmdkPanel.innerHTML = "";
     if (!cmdkFiltered.length) {
       cmdkPanel.innerHTML = `<div class="cmdkItem"><div class="cmdkItem__left">
         <div class="cmdkItem__title">Aucun résultat</div>
         <div class="cmdkItem__desc">Essaie un autre mot-clé.</div>
       </div><div class="cmdkItem__tag">info</div></div>`;
       return;
     }
   
     cmdkFiltered.forEach((c, idx) => {
       const div = document.createElement("div");
       div.className = "cmdkItem" + (idx === cmdkActiveIndex ? " is-active" : "");
       div.innerHTML = `
         <div class="cmdkItem__left">
           <div class="cmdkItem__title">${escapeHtml(c.title)}</div>
           <div class="cmdkItem__desc">${escapeHtml(c.desc)}</div>
         </div>
         <div class="cmdkItem__tag">${escapeHtml(c.tag)}</div>
       `;
       div.addEventListener("mouseenter", () => { cmdkActiveIndex = idx; renderCmdk(); });
       div.addEventListener("click", () => { closeCmdk(); setTimeout(() => c.action(), 20); });
       cmdkPanel.appendChild(div);
     });
   }
   
   /* ---------------------------
      Background particles (Canvas)
   ---------------------------- */
   const canvas = $("#fx-canvas");
   const ctx = canvas.getContext("2d", { alpha: true });
   
   let W, H, DPR;
   function resize() {
     DPR = Math.min(2, window.devicePixelRatio || 1);
     W = canvas.width = Math.floor(window.innerWidth * DPR);
     H = canvas.height = Math.floor(window.innerHeight * DPR);
     canvas.style.width = window.innerWidth + "px";
     canvas.style.height = window.innerHeight + "px";
   }
   window.addEventListener("resize", resize);
   resize();
   
   const particles = [];
   const N = 90;
   
   function rand(min, max) { return Math.random() * (max - min) + min; }
   
   function initParticles() {
     particles.length = 0;
     for (let i = 0; i < N; i++) {
       particles.push({
         x: rand(0, W),
         y: rand(0, H),
         r: rand(0.8, 2.4) * DPR,
         vx: rand(-0.25, 0.25) * DPR,
         vy: rand(-0.15, 0.2) * DPR,
         a: rand(0.08, 0.22),
       });
     }
   }
   initParticles();
   
   function draw() {
     ctx.clearRect(0, 0, W, H);
   
     const g = ctx.createRadialGradient(W * 0.2, H * 0.1, 0, W * 0.2, H * 0.1, Math.max(W, H) * 0.7);
     g.addColorStop(0, "rgba(120,255,160,0.06)");
     g.addColorStop(1, "rgba(0,0,0,0)");
     ctx.fillStyle = g;
     ctx.fillRect(0, 0, W, H);
   
     for (const p of particles) {
       p.x += p.vx; p.y += p.vy;
       if (p.x < -20) p.x = W + 20;
       if (p.x > W + 20) p.x = -20;
       if (p.y < -20) p.y = H + 20;
       if (p.y > H + 20) p.y = -20;
   
       ctx.beginPath();
       ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
       ctx.fillStyle = `rgba(255,255,255,${p.a})`;
       ctx.fill();
     }
   
     for (let i = 0; i < particles.length; i++) {
       for (let j = i + 1; j < particles.length; j++) {
         const a = particles[i], b = particles[j];
         const dx = a.x - b.x, dy = a.y - b.y;
         const d2 = dx * dx + dy * dy;
         const max = (140 * DPR) * (140 * DPR);
         if (d2 < max) {
           const t = 1 - d2 / max;
           ctx.strokeStyle = `rgba(255,255,255,${0.08 * t})`;
           ctx.lineWidth = 1 * DPR;
           ctx.beginPath();
           ctx.moveTo(a.x, a.y);
           ctx.lineTo(b.x, b.y);
           ctx.stroke();
         }
       }
     }
   
     requestAnimationFrame(draw);
   }
   draw();
   
   /* ---------------------------
      Utils
   ---------------------------- */
   function escapeHtml(str) {
     return String(str)
       .replaceAll("&", "&amp;")
       .replaceAll("<", "&lt;")
       .replaceAll(">", "&gt;")
       .replaceAll('"', "&quot;")
       .replaceAll("'", "&#039;");
   }
   
