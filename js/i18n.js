/* ──────────────────────────────────────────────────────────────────────
   i18n.js — EN/DA language toggle
   Add <script src="i18n.js"></script> BEFORE script.js on every page.
   NOTE: Danish text below was machine/AI-translated. Please have a
   native speaker or your job center career coach review the Danish
   before publishing — especially the resume.html content.
   ────────────────────────────────────────────────────────────────────── */

const translations = {
  // Nav
  "nav.about": { en: "About", da: "Om mig" },
  "nav.projects": { en: "Projects", da: "Projekter" },
  "nav.journey": { en: "Journey", da: "Min vej" },
  "nav.resume": { en: "Resume", da: "CV" },
  "nav.contact": { en: "Contact", da: "Kontakt" },

  // Hero (index.html)
  "hero.title": { en: "Data-driven analysis built on a technical foundation", da: "Datadrevet analyse bygget på et teknisk fundament" },
  "hero.lead": {
    en: "I come from a technical background in web development and design, and I'm building practical data analytics skills - Python, SQL, Excel and Tableau - through hands-on projects and structured training. Along the way, my interest in financial markets and COT research has been the testing ground for most of these tools.",
    da: "Jeg kommer fra en teknisk baggrund inden for webudvikling og design, og jeg opbygger praktiske data-analytiske færdigheder - Python, SQL, Excel og Tableau - gennem konkrete projekter og struktureret uddannelse. Undervejs har min interesse for finansielle markeder og COT-research fungeret som testgrund for de fleste af disse værktøjer.",
  },
  "hero.btn.projects": { en: "View projects", da: "Se projekter" },
  "hero.btn.contact": { en: "Contact", da: "Kontakt" },
  "hero.panel1.kicker": { en: "Aspiring Data Analyst", da: "Kommende Data Analyst" },
  "hero.panel1.role": {
    en: "Data Analyst candidate with a hands-on, project-based path into analytics",
    da: "Data Analyst-kandidat med en praktisk, projektbaseret vej ind i analytics",
  },
  "hero.panel2.kicker": { en: "Core value", da: "Kerneværdi" },
  "hero.panel2.title": { en: "Evidence over claims", da: "Beviser frem for påstande" },
  "hero.panel2.text": {
    en: "I've built my analytics skills independently - without a formal data or finance background - through structured, documented projects. This page shows the work itself: pipelines, dashboards, and tools built and iterated on over time.",
    da: "Jeg har opbygget mine analytiske færdigheder på egen hånd - uden en formel data- eller finansbaggrund - gennem strukturerede, dokumenterede projekter. Denne side viser selve arbejdet: pipelines, dashboards og værktøjer bygget og forbedret over tid.",
  },

  // About
  "about.kicker": { en: "About", da: "Om mig" },
  "about.title": {
    en: "A profile shaped by technical work, hands-on data projects, and structured learning",
    da: "En profil formet af teknisk arbejde, konkrete dataprojekter og struktureret læring",
  },
  "about.who.kicker": { en: "Background", da: "Baggrund" },
  "about.who.title": { en: "Who I am", da: "Hvem jeg er" },
  "about.who.text": {
    en: "My background combines web development, design, and digital problem-solving. Over time, I became genuinely interested in working with data - building tools to clean, structure, and interpret it, first through financial market research and increasingly through formal analytics training.",
    da: "Min baggrund kombinerer webudvikling, design og digital problemløsning. Over tid er jeg blevet oprigtigt interesseret i at arbejde med data - at bygge værktøjer til at rense, strukturere og fortolke det, først gennem research i finansielle markeder og i stigende grad gennem formel analytics-uddannelse.",
  },
  "about.who.li1": { en: "Technical mindset with experience building structured digital solutions", da: "Teknisk mindset med erfaring i at bygge strukturerede digitale løsninger" },
  "about.who.li2": { en: "Independent learner with a strong analytical drive", da: "Selvstændig og analytisk stærk i min tilgang til læring" },
  "about.who.li3": { en: "Comfortable working with data pipelines, structured reporting, and dashboards", da: "Erfaren med data-pipelines, struktureret rapportering og dashboards" },
  "about.fit.kicker": { en: "Fit", da: "Match" },
  "about.fit.title": { en: "What I bring", da: "Hvad jeg tilbyder" },
  "about.fit.text": {
    en: "I bring hands-on evidence: building end-to-end data tools, cleaning and structuring datasets, and turning raw data into dashboards and reports. I'm currently completing focused training in Python, SQL, Excel and Tableau to formalize these skills, and I'm looking for a junior data analyst role with room to grow.",
    da: "Jeg tilbyder konkrete beviser: at bygge data-værktøjer fra ende til anden, rense og strukturere datasæt og omdanne rå data til dashboards og rapporter. Jeg er i gang med målrettet uddannelse i Python, SQL, Excel og Tableau for at formalisere disse færdigheder, og jeg søger en junior data analyst-stilling med plads til at udvikle mig.",
  },
  "about.fit.chip1": { en: "Python", da: "Python" },
  "about.fit.chip2": { en: "SQL", da: "SQL" },
  "about.fit.chip3": { en: "Excel", da: "Excel" },
  "about.fit.chip4": { en: "Data pipelines", da: "Data-pipelines" },
  "about.fit.chip5": { en: "Dashboards & reporting", da: "Dashboards & rapportering" },
  "about.fit.chip6": { en: "Pattern recognition", da: "Mønstergenkendelse" },
  "about.fit.chip7": { en: "AI-assisted development", da: "AI-assisteret udvikling" },

  // Projects
  "projects.kicker": { en: "Projects", da: "Projekter" },
  "projects.title": {
    en: "Selected data projects, including tools built while exploring financial markets",
    da: "Udvalgte dataprojekter, herunder værktøjer bygget gennem research i finansielle markeder",
  },
  "proj1.mini": { en: "Full data pipeline, database and dashboard, running weekly", da: "Fuld data-pipeline, database og dashboard, kører ugentligt" },
  "proj1.text": {
    en: "A full-stack analytics platform built to track Commitments of Traders (COT) data and macro positioning. A scheduled Python worker pulls weekly CFTC data into PostgreSQL; a FastAPI backend serves cached analytics to a React dashboard covering correlation, seasonality, signals, historical data, and a macro-sentiment panel. Fully containerized with Docker, bilingual (EN / UK), built with AI-assisted development.",
    da: "En full-stack analyseplatform bygget til at følge Commitments of Traders (COT)-data og makropositionering. En planlagt Python-worker henter ugentlig CFTC-data ind i PostgreSQL; en FastAPI-backend leverer cachede analyser til et React-dashboard med korrelation, sæsonmønstre, signaler, historiske data og et makro-sentimentpanel. Fuldt containeriseret med Docker, tosproget (EN/UK), udviklet med AI-assisteret udvikling.",
  },
  "proj1.chip1": { en: "React + Vite", da: "React + Vite" },
  "proj1.chip2": { en: "FastAPI", da: "FastAPI" },
  "proj1.chip3": { en: "Python", da: "Python" },
  "proj1.chip4": { en: "PostgreSQL", da: "PostgreSQL" },
  "proj1.chip5": { en: "Docker", da: "Docker" },
  "proj1.chip6": { en: "Data pipeline (ETL)", da: "Data-pipeline (ETL)" },
  "proj1.chip7": { en: "Data visualization", da: "Datavisualisering" },
  "proj1.chip8": { en: "AI-assisted development", da: "AI-assisteret udvikling" },

  "proj2.mini": { en: "Structured Excel reporting across markets", da: "Struktureret Excel-rapportering på tværs af markeder" },
  "proj2.text": {
    en: "An Excel-based analytical system for structuring and interpreting Commitments of Traders data across FX, commodity, and crypto markets. The framework organizes raw CFTC data, compares participant groups, and generates structured weekly signals - built entirely with formulas, pivot-style logic, and a repeatable reporting workflow.",
    da: "Et Excel-baseret analysesystem til at strukturere og fortolke Commitments of Traders-data på tværs af FX-, råvare- og krypto-markeder. Systemet organiserer rå CFTC-data, sammenligner deltagergrupper og genererer strukturerede ugentlige signaler - bygget udelukkende med formler, pivot-lignende logik og en genanvendelig rapporteringsproces.",
  },
  "proj2.chip1": { en: "Excel", da: "Excel" },
  "proj2.chip2": { en: "Data cleaning", da: "Datarensning" },
  "proj2.chip3": { en: "Pivot-style reporting", da: "Pivot-lignende rapportering" },
  "proj2.chip4": { en: "Multi-market analysis", da: "Analyse på tværs af markeder" },
  "proj2.chip5": { en: "Structured signals", da: "Strukturerede signaler" },

  "proj3.mini": { en: "Applying programming logic to market signals", da: "Programmeringslogik anvendt på markedssignaler" },
  "proj3.text": {
    en: "A self-directed programming project: a Pine Script v6 indicator that visualizes COT positioning data directly on price charts, calculating a composite index, net-positioning changes, and divergence signals with a built-in alert system. Good evidence of independent, rule-based programming - separate from the core data-analytics stack.",
    da: "Et selvstændigt programmeringsprojekt: en Pine Script v6-indikator, der visualiserer COT-positioneringsdata direkte på prisdiagrammer, med beregning af et sammensat indeks, ændringer i nettopositionering og divergenssignaler med et indbygget alarmsystem. Et godt eksempel på selvstændig, regelbaseret programmering - adskilt fra det centrale data-analytics-stack.",
  },
  "proj3.chip1": { en: "Pine Script", da: "Pine Script" },
  "proj3.chip2": { en: "Programming logic", da: "Programmeringslogik" },
  "proj3.chip3": { en: "Signal design", da: "Signaldesign" },
  "proj3.chip4": { en: "Independent project", da: "Selvstændigt projekt" },

  "proj4.mini": { en: "Structured process and reporting discipline", da: "Struktureret proces og rapporteringsdisciplin" },
  "proj4.text": {
    en: "A structured documentation system built in Notion for tracking process, decisions, and outcomes over time - covering preparation logs, structured notes, and outcome statistics. Evidence of the same discipline needed to maintain clean, reliable data records and repeatable reporting workflows.",
    da: "Et struktureret dokumentationssystem bygget i Notion til at følge proces, beslutninger og resultater over tid - med forberedelseslogs, strukturerede noter og resultatstatistik. Et eksempel på den samme disciplin, der kræves for at vedligeholde rene, pålidelige dataregistre og genanvendelige rapporteringsprocesser.",
  },
  "proj4.chip1": { en: "Notion", da: "Notion" },
  "proj4.chip2": { en: "Process documentation", da: "Procesdokumentation" },
  "proj4.chip3": { en: "Structured tracking", da: "Struktureret sporing" },
  "proj4.chip4": { en: "Data organization", da: "Dataorganisering" },

  // Journey
  "journey.kicker": { en: "Journey", da: "Min vej" },
  "journey.title": { en: "How I moved toward data", da: "Sådan bevægede jeg mig mod data" },
  "journey.intro": {
    en: "A short timeline showing that the interest is real, sustained, and backed by technical work rather than abstract wishes.",
    da: "En kort tidslinje, der viser, at interessen er ægte, vedvarende og bakket op af konkret teknisk arbejde frem for abstrakte ønsker.",
  },
  "journey.step1.title": { en: "Technical foundation", da: "Teknisk fundament" },
  "journey.step1.text": {
    en: "Several years in web development and design - the source of the structured, analytical thinking that now drives my data work.",
    da: "Adskillige år inden for webudvikling og design - kilden til den strukturerede, analytiske tænkning, der nu driver mit dataarbejde.",
  },
  "journey.step2.title": { en: "Transition into data & markets", da: "Overgang til data & markeder" },
  "journey.step2.text": {
    en: "A deliberate move into financial markets and data-driven decision-making - drawn to structured research and evidence over guesswork, which naturally evolved into a broader interest in data analytics.",
    da: "En bevidst overgang til finansielle markeder og datadrevet beslutningstagning - tiltrukket af struktureret research og beviser frem for gætværk, hvilket naturligt udviklede sig til en bredere interesse for data analytics.",
  },
  "journey.step3.title": { en: "Building analytics skills", da: "Opbygning af analytics-færdigheder" },
  "journey.step3.text": {
    en: "Four self-built tools over the past year: an Excel COT system, a Pine Script indicator, a full-stack Python analytics dashboard, and a structured workflow system - now being formalized through a Data Analytics Specialist program (Python, SQL, Excel, Tableau).",
    da: "Fire selvbyggede værktøjer i løbet af det seneste år: et Excel COT-system, en Pine Script-indikator, et full-stack Python-analysedashboard og et struktureret workflow-system - nu ved at blive formaliseret gennem et Data Analytics Specialist-forløb (Python, SQL, Excel, Tableau).",
  },

  // Contact
  "contact.kicker": { en: "Contact", da: "Kontakt" },
  "contact.title": { en: "Links and profile", da: "Links og profil" },
  "contact.intro": {
    en: "Open to conversations with people working in data analytics, business intelligence, or related fields. Here are the best ways to reach me.",
    da: "Åben for samtaler med folk, der arbejder med data analytics, business intelligence eller relaterede felter. Her er de bedste måder at kontakte mig på.",
  },
  "contact.label.email": { en: "Email", da: "E-mail" },
  "contact.label.linkedin": { en: "LinkedIn", da: "LinkedIn" },
  "contact.label.x": { en: "X (Twitter)", da: "X (Twitter)" },
  "contact.label.resume": { en: "Full Resume", da: "Fuldt CV" },
  "contact.label.resumeSub": { en: "skills, experience, education", da: "kompetencer, erfaring, uddannelse" },

  // Resume page
  "resume.kicker": { en: "Resume", da: "CV" },
  "resume.name.role": { en: "Aspiring Data Analyst — Python, SQL, Excel, Tableau", da: "Kommende Data Analyst — Python, SQL, Excel, Tableau" },
  "resume.name.tagline": { en: "Kateryna Panchenko - Aspiring Data Analyst", da: "Kateryna Panchenko - Kommende Data Analyst" },
  "resume.summary": {
    en: "Digital generalist moving into data analytics, with a background in frontend development, digital design, and self-built financial data tools. Currently completing a Data Analytics Specialist program (Python, SQL, Excel, Tableau) to formalize practical, hands-on experience gained by building COT/market data pipelines, Excel reporting systems, and dashboards. Adaptable, detail-oriented, and structured in how I work - currently based in Denmark and learning Danish from scratch.",
    da: "Digital generalist på vej ind i data analytics, med baggrund i frontend-udvikling, digitalt design og selvbyggede finansielle data-værktøjer. I gang med et Data Analytics Specialist-forløb (Python, SQL, Excel, Tableau) for at formalisere den praktiske erfaring, jeg har opnået ved at bygge COT/markeds-data-pipelines, Excel-rapporteringssystemer og dashboards. Tilpasningsdygtig, detaljeorienteret og struktureret i mit arbejde - bor i øjeblikket i Danmark og lærer dansk fra bunden.",
  },
  "resume.generalCv": { en: "General CV", da: "Generelt CV" },
  "resume.print.button": { en: "Print / Save as PDF", da: "Print / Gem som PDF" },

  "resume.skills.kicker": { en: "Capabilities", da: "Kompetencer" },
  "resume.skills.title": { en: "Skills, tools & languages", da: "Kompetencer, værktøjer & sprog" },
  "resume.skills.data.kicker": { en: "Data & Analytics", da: "Data & Analytics" },
  "resume.skills.data.li1": { en: "Python (pandas) — building", da: "Python (pandas) — under opbygning" },
  "resume.skills.data.li2": { en: "SQL — building", da: "SQL — under opbygning" },
  "resume.skills.data.li3": { en: "Excel (formulas, pivot tables, structured reporting)", da: "Excel (formler, pivottabeller, struktureret rapportering)" },
  "resume.skills.data.li4": { en: "Tableau — building", da: "Tableau — under opbygning" },
  "resume.skills.data.li5": { en: "Data visualization & dashboards", da: "Datavisualisering & dashboards" },
  "resume.skills.data.li6": { en: "Data cleaning & structuring", da: "Datarensning & strukturering" },
  "resume.skills.tools.kicker": { en: "Tools & Workflow", da: "Værktøjer & Workflow" },
  "resume.skills.other.kicker": { en: "Soft Skills", da: "Personlige Kompetencer" },
  "resume.skills.other.chip1": { en: "Independence", da: "Selvstændighed" },
  "resume.skills.other.chip2": { en: "Reliability & Punctuality", da: "Pålidelighed & Punktlighed" },
  "resume.skills.other.chip3": { en: "Teamwork", da: "Samarbejdsevne" },
  "resume.skills.other.chip4": { en: "Adaptability", da: "Tilpasningsevne" },
  "resume.skills.other.chip5": { en: "Detail-oriented", da: "Detaljeorienteret" },
  "resume.skills.other.chip6": { en: "Driving license B", da: "Kørekort B" },
  "resume.skills.other.chip7": { en: "Curiosity / Growth Mindset", da: "Nysgerrighed / Lyst til at lære" },
  "resume.skills.other.chip8": { en: "Analytical Mindset", da: "Analytisk Tilgang" },
  "resume.skills.other.chip9": { en: "Problem-solving", da: "Problemløsning" },

  "resume.skills.lang.kicker": { en: "Languages", da: "Sprog" },
  "resume.lang.uk.name": { en: "Ukrainian", da: "Ukrainsk" },
  "resume.lang.uk.level": { en: "Native", da: "Modersmål" },
  "resume.lang.ru.name": { en: "Russian", da: "Russisk" },
  "resume.lang.ru.level": { en: "Fluent", da: "Flydende" },
  "resume.lang.en.name": { en: "English", da: "Engelsk" },
  "resume.lang.en.level": { en: "B2+", da: "B2+" },
  "resume.lang.pl.name": { en: "Polish", da: "Polsk" },
  "resume.lang.pl.level": { en: "B1", da: "B1" },
  "resume.lang.de.name": { en: "German", da: "Tysk" },
  "resume.lang.de.level": { en: "A2", da: "A2" },
  "resume.lang.da.name": { en: "Danish", da: "Dansk" },
  "resume.lang.da.level": { en: "Beginner", da: "Begynder" },

  "resume.exp.kicker": { en: "Experience", da: "Erfaring" },
  "resume.exp.title": { en: "Work experience", da: "Arbejdserfaring" },

  "resume.exp.role1.dates": { en: "November 2021 – January 2022 | Poland", da: "November 2021 – Januar 2022 | Polen" },
  "resume.exp.role1.title": { en: "3D Asset Coordinator — Tomorrow", da: "3D Asset Koordinator — Tomorrow" },
  "resume.exp.role1.li1": { en: "Coordinated the 3D asset library via a project manager for 3ds Max", da: "Koordination af 3D asset biblioteket via Project Manager for 3ds Max" },
  "resume.exp.role1.li2": { en: "Fixed models in 3ds Max and prepared them for upload to the library", da: "Reparation af modeller i 3ds Max og forberedelse til upload til biblioteket" },
  "resume.exp.role1.li3": { en: "Worked with materials and textures using V-Ray 5", da: "Arbejde med materialer & teksturer ved hjælp af V-ray 5" },
  "resume.exp.role1.li4": { en: "Communicated with subcontractors", da: "Kommunikation med underleverandører" },
  "resume.exp.role1.li5": { en: "Searched for and purchased new models to expand the asset library", da: "Søgning og køb af nye modeller til udvidelse af asset biblioteket" },

  "resume.exp.role2.dates": { en: "June 2021 – August 2021 | Poland", da: "Juni 2021 – August 2021 | Polen" },
  "resume.exp.role2.title": { en: "Google Ads Sales Representative — TTEC", da: "Google Ads Salgsrepræsentant — TTEC" },
  "resume.exp.role2.li1": { en: "Managed Google Ads accounts", da: "Administration af Google Ads konti" },
  "resume.exp.role2.li2": { en: "Created advertising campaigns", da: "Oprettelse af reklamekampagner" },
  "resume.exp.role2.li3": { en: "Communicated with clients by phone", da: "Kommunikation med kunder via telefon" },
  "resume.exp.role2.li4": { en: "Presented new Google Ads features", da: "Præsentation af nye funktioner i Google Ads" },

  "resume.exp.role3.dates": { en: "October 2020 – December 2020 | Ukraine", da: "Oktober 2020 – December 2020 | Ukraine" },
  "resume.exp.role3.title": { en: "Junior Front-End Developer — Limpid Armor", da: "Junior Front-End Udvikler — Limpid Armor" },
  "resume.exp.role3.li1": { en: "Built a company website from design mockups using HTML, CSS, and JavaScript", da: "Byggede en virksomhedshjemmeside ud fra designmockups ved hjælp af HTML, CSS og JavaScript" },
  "resume.exp.role3.li2": { en: "Implemented interactive elements and UI functionality with JavaScript", da: "Implementerede interaktive elementer og UI-funktionalitet med JavaScript" },
  "resume.exp.role3.li3": { en: "Developed responsive layouts for multiple screen sizes", da: "Udviklede responsive layouts tilpasset flere skærmstørrelser" },

  "resume.exp.role4.dates": { en: "July 2018 – September 2020 | Ukraine", da: "Juli 2018 – September 2020 | Ukraine" },
  "resume.exp.role4.title": { en: "Graphic Designer — АрміяTM (UA Army)", da: "Grafisk Designer — АрміяTM (UA Army)" },
  "resume.exp.role4.li1": { en: "Developed merch design for АрміяTM under the Ministry of Defense of Ukraine", da: "Udvikling af merch design for АрміяTM under Ukraines Forsvarsministerium" },
  "resume.exp.role4.li2": { en: "Created mockups for the online shop on Facebook", da: "Oprettelse af mockups til online-butikken på Facebook" },
  "resume.exp.role4.li3": { en: "Negotiated with the client", da: "Forhandling med kunden" },

  "resume.edu.kicker": { en: "Education", da: "Uddannelse" },
  "resume.edu.title": { en: "Education & training", da: "Uddannelse & kurser" },
  "resume.edu.item0.status": { en: "Planned — Jobcenter-funded upon employer confirmation", da: "Planlagt — finansieret af jobcentret ved bekræftelse fra arbejdsgiver" },
  "resume.edu.item0.text": {
    en: "Python, statistics, SQL, Excel, Tableau.",
    da: "Python, statistik, SQL, Excel, Tableau.",
  },
  "resume.edu.item0.placeholder": {
    en: "Jobcenter-funded in full if an employer confirms interest in hiring me as a data analyst afterward — no cost to the employer.",
    da: "Finansieret fuldt ud af jobcentret, hvis en arbejdsgiver bekræfter interesse i at ansætte mig som data analyst bagefter — ingen omkostning for arbejdsgiveren.",
  },
  "resume.edu.item4.title": { en: "Environment Design", da: "Miljødesign" },
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.innerHTML = entry[lang];
    }
  });
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("site-lang", lang);
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.textContent = lang === "en" ? "DA" : "EN";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("site-lang") || "en";
  applyLanguage(saved);

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang") || "en";
      applyLanguage(current === "en" ? "da" : "en");
    });
  });
});