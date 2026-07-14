const {
  vendors,
  spanishVendors = [],
  criteria,
  useCases,
  productCapabilities = [],
  riskItems,
  cveItems,
  patchResponseItems = [],
  mediaIncidentItems = [],
  advancedMetrics,
  threatHeatmap,
  integrationProtocolItems = [],
  techItems,
  deploymentItems,
  innovationItems = [],
  scenarios,
  evidenceItems,
  profilePresets,
  metricGuidance = {}
} = window.ICS_DATA;

const STORAGE_KEY = "ics-security-studio-state-v1";

function findVendor(name) {
  return vendors.find(v => v.name === name)
    || spanishVendors.find(v => v.name === name)
    || spanishVendors.find(v => name.includes(v.name.split(" ")[0]));
}

// ─── i18n ───────────────────────────────────────────────────────────
const i18n = {
  es: {
    panel: "Panel ejecutivo", profile: "Perfil del cliente", scoring: "Scoring",
    usecases: "Casos imprescindibles", framework: "Detección e inteligencia",
    evidence: "Evidencia y confianza", capabilities: "Funcionalidades",
    risks: "Riesgos y vulnerabilidades", technical: "Protocolos y especificaciones técnicas",
    deployment: "Despliegue", innovation: "Innovación", spanish: "Fabricantes españoles",
    compare: "Comparador",
    hintDashboard: "Revisa la recomendación, ranking ponderado y lectura ejecutiva antes de exportar.",
    hintProfile: "Define sector, tamaño, madurez OT SOC y contexto para adaptar pesos y casos imprescindibles.",
    hintScoring: "Ajusta los pesos de decisión. Estos valores recalculan ranking, recomendación y PDF.",
    hintUsecases: "Marca los casos obligatorios. Si un fabricante no llega al umbral, aparecerá como pendiente.",
    hintFramework: "Compara modelo SOC/OT, radar, Data Quality e integraciones por fabricante.",
    hintEvidence: "Contrasta fuentes públicas, confianza declarada y validaciones pendientes de PoC/RFP.",
    hintCapabilities: "Revisa portfolio por marca, soluciones equivalentes, grado de implementación y cautelas.",
    hintRisks: "Analiza CVEs, respuesta a parches, incidentes publicados y acciones de mitigación.",
    hintTechnical: "Valida cobertura de protocolos industriales, arquitectura de sensores y modelo de despliegue.",
    hintDeployment: "Evalúa provisión, on-premise, soberanía operativa y modelos de despliegue.",
    hintInnovation: "Evalúa capacidades de IA, digital twins, predicción y preparación Industry 4.0.",
    hintSpanish: "Ecosistema nacional de ciberseguridad industrial: S2 Grupo, CounterCraft, Telefónica Tech y más.",
    hintCompare: "Selecciona 2-3 fabricantes para comparar lado a lado.",
    previous: "Anterior", next: "Siguiente", link: "Enlace", pdfSection: "PDF sección",
    configuration: "Configuración", pending: "Pendiente",
    workRoute: "Ruta de trabajo", allVerticals: "Todos",
    searchPlaceholder: "Buscar fabricantes, protocolos, secciones...",
    navPanel: "Panel", navClient: "Cliente", navScoring: "Scoring", navCases: "Casos",
    navDetection: "Detección", navEvidence: "Evidencia", navFunctions: "Funciones",
    navRisk: "Riesgo", navTechnical: "Técnico", navDeploy: "Despliegue",
    navInnovation: "Innovación", navCompare: "Comparar", navSpain: "España",
    completionReady: "Configuración lista para revisión ejecutiva y exportación.",
    pendingLabel: "Pendiente"
  },
  en: {
    panel: "Executive Dashboard", profile: "Client Profile", scoring: "Scoring",
    usecases: "Must-Have Use Cases", framework: "Detection & Intelligence",
    evidence: "Evidence & Confidence", capabilities: "Capabilities",
    risks: "Risks & Vulnerabilities", technical: "Protocols & Technical Specs",
    deployment: "Deployment", innovation: "Innovation", spanish: "Spanish Vendors",
    compare: "Compare",
    hintDashboard: "Review recommendation, weighted ranking and executive summary before exporting.",
    hintProfile: "Set sector, size, OT SOC maturity and context to adjust weights and use cases.",
    hintScoring: "Adjust decision weights. These values recalculate ranking, recommendation and PDF.",
    hintUsecases: "Mark mandatory use cases. If a vendor falls below threshold, it will show as pending.",
    hintFramework: "Compare SOC/OT model, radar, Data Quality and integrations per vendor.",
    hintEvidence: "Review public sources, declared confidence and pending PoC/RFP validations.",
    hintCapabilities: "Review portfolio by brand, equivalent solutions, implementation grade and caveats.",
    hintRisks: "Analyze CVEs, patch response, published incidents and mitigation actions.",
    hintTechnical: "Validate industrial protocol coverage, sensor architecture and deployment model.",
    hintDeployment: "Evaluate provisioning, on-premise, operational sovereignty and deployment models.",
    hintInnovation: "Evaluate AI capabilities, digital twins, prediction and Industry 4.0 readiness.",
    hintSpanish: "National industrial cybersecurity ecosystem: S2 Grupo, CounterCraft, Telefonica Tech and more.",
    hintCompare: "Select 2-3 vendors for side-by-side comparison.",
    previous: "Previous", next: "Next", link: "Link", pdfSection: "PDF section",
    configuration: "Configuration", pending: "Pending",
    workRoute: "Work path", allVerticals: "All",
    searchPlaceholder: "Search vendors, protocols, sections...",
    navPanel: "Panel", navClient: "Client", navScoring: "Scoring", navCases: "Cases",
    navDetection: "Detection", navEvidence: "Evidence", navFunctions: "Functions",
    navRisk: "Risk", navTechnical: "Technical", navDeploy: "Deploy",
    navInnovation: "Innovation", navCompare: "Compare", navSpain: "Spain",
    completionReady: "Configuration ready for executive review and export.",
    pendingLabel: "Pending"
  }
};

let currentLang = localStorage.getItem("ics-lang") || "es";

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.es[key]) || key;
}

function getSectionMeta() {
  return {
    dashboard: { title: t("panel"), hint: t("hintDashboard") },
    profile: { title: t("profile"), hint: t("hintProfile") },
    assessment: { title: t("scoring"), hint: t("hintScoring") },
    usecases: { title: t("usecases"), hint: t("hintUsecases") },
    framework: { title: t("framework"), hint: t("hintFramework") },
    evidence: { title: t("evidence"), hint: t("hintEvidence") },
    capabilities: { title: t("capabilities"), hint: t("hintCapabilities") },
    risks: { title: t("risks"), hint: t("hintRisks") },
    technical: { title: t("technical"), hint: t("hintTechnical") },
    deployment: { title: t("deployment"), hint: t("hintDeployment") },
    innovation: { title: t("innovation"), hint: t("hintInnovation") },
    compare: { title: t("compare"), hint: t("hintCompare") },
    spanish: { title: t("spanish"), hint: t("hintSpanish") }
  };
}

let sectionMeta = getSectionMeta();

const state = {
  weights: Object.fromEntries(criteria.map(c => [c.id, c.weight])),
  required: Object.fromEntries(useCases.map(u => [u.label, false])),
  profile: {
    preset: "balanced",
    sector: "No definido",
    size: "No definido",
    soc: "No definido",
    notes: ""
  },
  scenario: "balanced",
  scoringSource: "Pesos base",
  frameworkVendors: {},
  currentView: "dashboard",
  verticalFilter: null,
  compareVendors: ["", "", ""]
};

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      weights: state.weights,
      required: state.required,
      profile: state.profile,
      scenario: state.scenario,
      scoringSource: state.scoringSource,
      frameworkVendors: state.frameworkVendors,
      currentView: state.currentView
    }));
  } catch {}
}

function restoreState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.weights) criteria.forEach(c => {
      if (Number.isFinite(Number(saved.weights[c.id]))) state.weights[c.id] = Number(saved.weights[c.id]);
    });
    if (saved.required) useCases.forEach(u => { state.required[u.label] = Boolean(saved.required[u.label]); });
    if (saved.profile) state.profile = { ...state.profile, ...saved.profile };
    if (saved.scenario) state.scenario = saved.scenario;
    if (saved.scoringSource) state.scoringSource = saved.scoringSource;
    if (saved.frameworkVendors) state.frameworkVendors = saved.frameworkVendors;
    if (saved.currentView && sectionMeta[saved.currentView]) state.currentView = saved.currentView;
  } catch { localStorage.removeItem(STORAGE_KEY); }
}

function getNavOrder() {
  return [...document.querySelectorAll(".rail-item[data-view]")].map(i => i.dataset.view);
}

function activeSectionId() {
  return document.querySelector(".view.active")?.id || state.currentView || "dashboard";
}

function configurationProgress() {
  const profileFields = ["sector", "size", "soc"];
  const profileDone = profileFields.filter(k => state.profile[k] && state.profile[k] !== "No definido").length;
  const requiredCount = Object.values(state.required).filter(Boolean).length;
  const weightsChanged = criteria.some(c => Number(state.weights[c.id]) !== Number(c.weight));
  const frameworkSelected = selectedFrameworkIndexes().length > 0;
  const notesDone = state.profile.notes.trim().length > 0;
  const score = profileDone + (requiredCount ? 1 : 0) + (weightsChanged ? 1 : 0) + (frameworkSelected ? 1 : 0) + (notesDone ? 1 : 0);
  const total = profileFields.length + 4;
  const percent = Math.round((score / total) * 100);
  const missing = [];
  if (profileDone < profileFields.length) missing.push("perfil cliente");
  if (!requiredCount) missing.push("casos imprescindibles");
  if (!weightsChanged) missing.push("pesos");
  if (!frameworkSelected) missing.push("fabricante en detección");
  return { percent, missing };
}

function updateCommandPanel(viewId = activeSectionId()) {
  const meta = sectionMeta[viewId] || sectionMeta.dashboard;
  const title = document.getElementById("currentSectionTitle");
  const hint = document.getElementById("currentSectionHint");
  const completionText = document.getElementById("completionText");
  const completionBar = document.getElementById("completionBar");
  const completionHint = document.getElementById("completionHint");
  if (!title || !hint || !completionText || !completionBar || !completionHint) return;
  const progress = configurationProgress();
  title.textContent = meta.title;
  hint.textContent = meta.hint;
  completionText.textContent = `${progress.percent}%`;
  completionBar.style.width = `${progress.percent}%`;
  completionHint.textContent = progress.missing.length
    ? `${t("pendingLabel")}: ${progress.missing.join(", ")}.`
    : t("completionReady");
}

function toast(message, tone = "success") {
  const region = document.getElementById("toastRegion");
  if (!region) return;
  const item = document.createElement("div");
  item.className = `toast ${tone}`;
  item.textContent = message;
  region.appendChild(item);
  window.setTimeout(() => item.classList.add("visible"), 20);
  window.setTimeout(() => { item.classList.remove("visible"); window.setTimeout(() => item.remove(), 220); }, 3200);
}

function scoreVendors() {
  return vendors.map((vendor, vi) => {
    let score = 0, totalWeight = 0;
    criteria.forEach(c => {
      const w = Number(state.weights[c.id]);
      score += w * c.scores[vi];
      totalWeight += w;
    });
    const unmetRequirements = useCases
      .filter(u => state.required[u.label] && (u.fits || u.fit)[vi] < 4)
      .map(u => u.label);
    return { ...vendor, score: score / totalWeight, unmetRequirements };
  }).sort((a, b) => b.score - a.score);
}

function renderRanking() {
  let ranked = scoreVendors();
  if (state.verticalFilter && verticalMap[state.verticalFilter]) {
    const allowed = verticalMap[state.verticalFilter];
    ranked = ranked.filter(v => allowed.includes(v.name));
  }
  const max = Math.max(...ranked.map(i => i.score));
  const profileLabel = profilePresets[state.profile.preset]?.label || "Balanceado";
  const scenarioSelect = document.getElementById("scenario");
  const scenarioName = scenarioSelect.options[scenarioSelect.selectedIndex]?.text || "Balanceado";
  const requiredCount = Object.values(state.required).filter(Boolean).length;

  document.getElementById("rankingBars").innerHTML = ranked.map((item, i) => `
    <div class="ranking-row">
      <div class="rank-pill">#${i + 1}</div>
      <div class="vendor-name with-logo"><img src="${item.logo}" alt="${item.name}" loading="lazy">${item.name}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(item.score / max) * 100}%;background:${item.color}"></div></div>
      <div class="score">${item.score.toFixed(2)}</div>
      ${item.unmetRequirements.length ? `<div class="gate-note">Requiere validación: ${item.unmetRequirements.join(", ")}</div>` : ""}
    </div>
  `).join("");

  const first = ranked.find(i => i.unmetRequirements.length === 0) || ranked[0];
  document.getElementById("winnerName").textContent = first.name;
  document.getElementById("winnerReason").textContent = `${first.bestFor} ${first.unmetRequirements.length ? "Tiene requisitos pendientes de validar." : "Cubre los requisitos imprescindibles."}`;
  document.getElementById("activeConfig").innerHTML = `
    <span>Perfil: <strong>${profileLabel}</strong></span>
    <span>Scoring: <strong>${state.scoringSource}</strong></span>
    <span>Escenario: <strong>${scenarioName}</strong></span>
    <span>Requisitos: <strong>${requiredCount}</strong></span>
  `;
  document.getElementById("gateCount").textContent = ranked.reduce((s, i) => s + i.unmetRequirements.length, 0);
  document.getElementById("riskAverage").textContent = (vendors.reduce((s, v) => s + v.risk, 0) / vendors.length).toFixed(1);
  updateCommandPanel();
}

function renderQuadrant() {
  const svg = document.getElementById("quadrantChart");
  const ranked = scoreVendors();
  const plot = (v, min, max, size, pad) => pad + ((v - min) / (max - min)) * (size - pad * 2);
  const yPlot = (v, min, max, size, pad) => size - pad - ((v - min) / (max - min)) * (size - pad * 2);

  svg.innerHTML = `
    <rect x="0" y="0" width="520" height="360" rx="8" fill="#fbfcfe"/>
    <line x1="70" y1="180" x2="490" y2="180" stroke="#d8dee8" stroke-width="2"/>
    <line x1="280" y1="28" x2="280" y2="318" stroke="#d8dee8" stroke-width="2"/>
    <line x1="70" y1="318" x2="490" y2="318" stroke="#17212f" stroke-width="2"/>
    <line x1="70" y1="318" x2="70" y2="28" stroke="#17212f" stroke-width="2"/>
    <text x="286" y="48" fill="#647084" font-size="12" font-weight="800">Priorizar</text>
    <text x="78" y="48" fill="#647084" font-size="12" font-weight="800">Potencial</text>
    <text x="350" y="342" fill="#647084" font-size="12" font-weight="800">Ajuste cliente</text>
    <text x="18" y="170" fill="#647084" font-size="12" font-weight="800" transform="rotate(-90 18 170)">Fortaleza</text>
    ${ranked.map(item => {
      const x = plot(item.fit, 3, 5, 520, 70);
      const y = yPlot(item.strength, 3, 5, 360, 42);
      const size = item.unmetRequirements.length ? 10 : 13;
      return `
        <circle cx="${x}" cy="${y}" r="${size}" fill="${item.color}" opacity="0.90"/>
        <text x="${x + 16}" y="${y + 4}" fill="#17212f" font-size="11" font-weight="850">${item.name}</text>
      `;
    }).join("")}
  `;
}

function renderVendors() {
  document.getElementById("vendorStrip").innerHTML = vendors.map(v => `
    <article class="vendor-tile" style="--vendor-accent:${v.color}">
      <div class="vendor-card-head">
        <img src="${v.logo}" alt="${v.name}" loading="lazy">
        <strong>${v.name}</strong>
      </div>
      <div class="badge-row">
        <span class="badge">${v.gartner}</span>
        <span class="badge ens-badge">${v.compliance.split(",")[0]}</span>
      </div>
      <div class="advantage-box"><strong>Ventajas</strong>${v.bestFor}</div>
      <p><strong>Cumplimiento:</strong> ${v.complianceDetail}</p>
      <div class="disadvantage-box"><strong>Cautelas</strong>${v.caution}</div>
      <div class="vendor-links">
        <a href="${v.docsUrl}" target="_blank" rel="noreferrer">Documentación</a>
        <a href="${v.productUrl}" target="_blank" rel="noreferrer">Producto</a>
        <a href="${v.complianceUrl}" target="_blank" rel="noreferrer">Cumplimiento</a>
      </div>
    </article>
  `).join("");
}

function renderRiskVisual() {
  if (!cveItems || !cveItems.length) { document.getElementById("riskVisual").innerHTML = ""; return; }
  const maxCves = Math.max(...cveItems.map(i => i.cves.length));
  document.getElementById("riskVisual").innerHTML = `
    <svg viewBox="0 0 900 380" role="img" aria-label="Grafo visual de riesgo">
      <rect x="0" y="0" width="900" height="380" fill="#fbfcfe"/>
      <text x="24" y="34" fill="#17212f" font-size="18" font-weight="850">Riesgo operativo vs CVEs recientes</text>
      <text x="24" y="56" fill="#647084" font-size="12">Tamaño = volumen CVEs. Color = riesgo operativo estimado.</text>
      ${cveItems.map((item, i) => {
        const vendor = findVendor(item.vendor);
        if (!vendor) return "";
        const x = 60 + i * (820 / cveItems.length);
        const risk = vendor.risk;
        const y = 240 - risk * 38;
        const radius = 18 + (item.cves.length / maxCves) * 22;
        const critical = item.cves.filter(c => (c.cvss || 0) >= 7 || c.severity === "Critica" || c.severity === "Alta").length;
        const rotate = cveItems.length > 6 ? `transform="rotate(-45 ${x} 280)"` : "";
        const anchor = cveItems.length > 6 ? "end" : "middle";
        return `
          <line x1="${x}" y1="245" x2="${x}" y2="82" stroke="#e2e8f0" stroke-width="1"/>
          <circle cx="${x}" cy="${y}" r="${radius}" fill="${vendor.color}" opacity="0.90"/>
          <text x="${x}" y="${y + 5}" text-anchor="middle" fill="white" font-size="14" font-weight="900">${item.cves.length}</text>
          <text x="${x}" y="280" text-anchor="${anchor}" fill="#17212f" font-size="11" font-weight="850" ${rotate}>${item.vendor}</text>
          <text x="${x}" y="296" text-anchor="${anchor}" fill="#647084" font-size="10" ${rotate ? `transform="rotate(-45 ${x} 296)"` : ""}>Alta/Crit: ${critical}</text>
        `;
      }).join("")}
    </svg>
  `;
}

function renderCveTable() {
  const target = document.getElementById("cveTable");
  if (!cveItems.length && !patchResponseItems.length && !mediaIncidentItems.length) { target.innerHTML = ""; return; }
  let html = "";
  if (patchResponseItems.length) {
    html += `<div class="risk-subpanel"><h3>Respuesta a CVEs y parches</h3><table><thead><tr><th>Fabricante</th><th>CVE / producto</th><th>Parche</th><th>Tiempo respuesta</th><th>Estado</th></tr></thead><tbody>${patchResponseItems.map(i => `<tr><td><strong>${i.vendor}</strong><br><small>${i.disclosed}</small></td><td>${i.cve}<br><small>${i.product}</small></td><td>${i.patch}</td><td>${i.responseTime}</td><td><span class="status-pill">${i.status}</span><br><small>${i.evidence}</small><br><a href="${i.source}" target="_blank" rel="noreferrer">Fuente</a></td></tr>`).join("")}</tbody></table></div>`;
  }
  if (mediaIncidentItems.length) {
    html += `<div class="risk-subpanel"><h3>Incidentes documentados en medios</h3><table><thead><tr><th>Fabricante</th><th>Fecha</th><th>Tipo</th><th>Impacto</th><th>Noticia</th></tr></thead><tbody>${mediaIncidentItems.map(i => `<tr><td><strong>${i.vendor}</strong></td><td>${i.date}</td><td><span class="status-pill">${i.type}</span></td><td>${i.impact}</td><td><a href="${i.url}" target="_blank" rel="noreferrer">${i.source}</a></td></tr>`).join("")}</tbody></table></div>`;
  }
  if (cveItems.length) {
    html += `<div class="risk-subpanel"><h3>Relación de CVEs/advisories</h3><table><thead><tr><th>Fabricante</th><th>CVEs</th><th>Resumen</th></tr></thead><tbody>${cveItems.map(i => `<tr><td><strong>${i.vendor}</strong></td><td>${i.cves.length ? i.cves.map(c => {
      const sev = c.cvss >= 9 ? "alta" : c.cvss >= 7 ? "high" : "medium";
      return `<span class="cve-badge ${sev}">${c.id} (${c.cvss})</span><br><small>${c.description || ""}</small>`;
    }).join("<br>") : "<small>Sin CVEs críticos</small>"}</td><td>${i.summary || ""}</td></tr>`).join("")}</tbody></table></div>`;
  }
  target.innerHTML = html;
}

function renderCriteria() {
  document.getElementById("criteriaList").innerHTML = criteria.map(c => `
    <div class="criterion">
      <div class="criterion-label">
        <label for="weight-${c.id}">${c.label}</label>
        ${renderMetricInfo(c.id)}
      </div>
      <input id="weight-${c.id}" data-criterion="${c.id}" type="range" min="1" max="5" step="1" value="${state.weights[c.id]}">
      <span class="weight-value" id="value-${c.id}">${state.weights[c.id]}</span>
    </div>
  `).join("");

  document.querySelectorAll("[data-criterion]").forEach(input => {
    input.addEventListener("input", e => {
      state.weights[e.target.dataset.criterion] = Number(e.target.value);
      state.scoringSource = "Ajuste manual de pesos";
      document.getElementById(`value-${e.target.dataset.criterion}`).textContent = e.target.value;
      persistState();
      refresh();
    });
  });
}

function renderMetricInfo(metricId) {
  const guide = metricGuidance[metricId];
  if (!guide) return "";
  return `
    <details class="metric-info">
      <summary aria-label="Ver explicación de la métrica">i</summary>
      <div class="metric-popover">
        <strong>Cómo se pondera</strong><p>${guide.basis}</p>
        <strong>Evidencia usada</strong><p>${guide.evidence}</p>
        <strong>Validación recomendada</strong><p>${guide.validation}</p>
        <div class="metric-links">${guide.links.map((l, i) => `<a href="${l}" target="_blank" rel="noreferrer">Fuente ${i + 1}</a>`).join("")}</div>
      </div>
    </details>
  `;
}

function renderScoringMethodology() {
  const target = document.getElementById("scoringMethodology");
  if (!target) return;
  target.innerHTML = `
    <article class="methodology-card">
      <div>
        <span class="kicker">Metodología de ponderación OT/ICS</span>
        <strong>De dónde salen las métricas y cómo defender el scoring</strong>
        <p>Las notas 1-5 son una valoracion cualitativa basada en documentación oficial, capacidades publicadas, advisories, cobertura de protocolos industriales y criterio técnico de arquitectura OT. No sustituyen una PoC.</p>
      </div>
      <div class="methodology-steps">
        <div><span>1</span><p><strong>Base documental:</strong> documentación oficial, fichas de producto, certificaciones IEC 62443 y advisories.</p></div>
        <div><span>2</span><p><strong>Ajuste cliente:</strong> pesos, casos imprescindibles, sector industrial, SOC OT y requisitos de soberanía.</p></div>
        <div><span>3</span><p><strong>Validación PoC:</strong> cada "i" indica qué probar y qué evidencia pedir al fabricante.</p></div>
      </div>
    </article>
  `;
}

function applyProfilePreset(presetId) {
  const preset = profilePresets[presetId] || profilePresets.balanced;
  criteria.forEach(c => { state.weights[c.id] = preset.weights[c.id] || c.weight; });
  useCases.forEach(u => { state.required[u.label] = (preset.required || []).includes(u.label); });
  state.profile.preset = presetId;
  state.scoringSource = `Perfil cliente: ${preset.label}`;
  persistState();
  renderCriteria();
  renderUseCases();
  renderProfile();
  refresh();
  toast("Perfil aplicado y scoring recalculado.");
}

function syncProfileForm() {
  const preset = document.getElementById("profilePreset");
  const sector = document.getElementById("profileSector");
  const size = document.getElementById("profileSize");
  const soc = document.getElementById("profileSoc");
  const notes = document.getElementById("profileNotes");
  if (preset) state.profile.preset = preset.value;
  if (sector) state.profile.sector = sector.value;
  if (size) state.profile.size = size.value;
  if (soc) state.profile.soc = soc.value;
  if (notes) state.profile.notes = notes.value;
  persistState();
}

function renderProfile() {
  const preset = profilePresets[state.profile.preset] || profilePresets.balanced;
  document.getElementById("profileGrid").innerHTML = `
    <article class="profile-panel">
      <label for="profilePreset">Tipo de cliente</label>
      <select id="profilePreset">
        ${Object.entries(profilePresets).map(([id, p]) => `<option value="${id}" ${id === state.profile.preset ? "selected" : ""}>${p.label}</option>`).join("")}
      </select>
      <label for="profileSector">Sector industrial</label>
      <select id="profileSector">
        ${["No definido", "Energia / Utilities", "Oil & Gas", "Manufactura", "Agua / Saneamiento", "Transporte", "Farmaceutica", "Mineria", "Defensa", "Sector publico"].map(s => `<option ${s === state.profile.sector ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <label for="profileSize">Tamaño planta/operación</label>
      <select id="profileSize">
        ${["No definido", "< 500 dispositivos OT", "500-5.000 dispositivos", "5.000-50.000 dispositivos", "> 50.000 dispositivos"].map(s => `<option ${s === state.profile.size ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <label for="profileSoc">SOC OT / SIEM</label>
      <select id="profileSoc">
        ${["No definido", "Sin SOC OT", "SOC IT con visibilidad OT basica", "SOC OT dedicado", "SOC convergente IT/OT avanzado"].map(s => `<option ${s === state.profile.soc ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <label for="profileNotes">Notas de contexto</label>
      <textarea id="profileNotes" rows="4" placeholder="Ej: IEC 62443 SL2 requerido, PLCs Siemens S7, red Purdue legacy...">${state.profile.notes}</textarea>
      <div class="profile-actions">
        <button class="inline-link" id="applyProfile" type="button">Aplicar perfil</button>
      </div>
    </article>
    <article class="profile-panel">
      <strong>Impacto del perfil activo</strong>
      <p>${preset.label}</p>
      <div class="fit-chips">
        ${Object.entries(preset.weights || {}).map(([k, v]) => `<span class="fit-chip high">${criteria.find(c => c.id === k)?.label || k}: ${v}</span>`).join("") || `<span class="fit-chip">Pesos base</span>`}
      </div>
      <p><strong>Casos imprescindibles sugeridos:</strong> ${(preset.required || []).length ? preset.required.join(", ") : "Ninguno"}</p>
    </article>
  `;

  document.getElementById("profilePreset").addEventListener("change", () => {
    syncProfileForm();
    applyProfilePreset(document.getElementById("profilePreset").value);
  });
  ["profileSector", "profileSize", "profileSoc"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => { syncProfileForm(); refresh(); });
  });
  document.getElementById("profileNotes").addEventListener("input", () => { syncProfileForm(); updateCommandPanel(); });
  document.getElementById("applyProfile").addEventListener("click", () => {
    syncProfileForm();
    applyProfilePreset(document.getElementById("profilePreset").value);
  });
}

function renderUseCases() {
  document.getElementById("usecaseList").innerHTML = useCases.map(u => `
    <div class="usecase">
      <div class="usecase-title">${u.label}</div>
      <button class="toggle ${state.required[u.label] ? "active" : ""}" data-usecase="${u.label}" type="button">
        ${state.required[u.label] ? "Imprescindible" : "Deseable"}
      </button>
      <div class="fit-chips">
        ${vendors.map((v, i) => {
          const fit = (u.fits || u.fit || [])[i];
          return `<span class="fit-chip ${fit >= 4 ? "high" : "low"}">${v.name}: ${fit}</span>`;
        }).join("")}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-usecase]").forEach(btn => {
    btn.addEventListener("click", e => {
      const label = e.currentTarget.dataset.usecase;
      state.required[label] = !state.required[label];
      persistState();
      renderUseCases();
      refresh();
      toast(state.required[label] ? "Caso marcado como imprescindible." : "Caso marcado como deseable.", "info");
    });
  });
}

function renderRisks() {
  renderRiskVisual();
  renderCveTable();
  document.getElementById("riskGrid").innerHTML = (riskItems || []).map(item => `
    <article class="risk-item">
      <div class="risk-head">
        <strong>${item.vendor}</strong>
        <span class="risk-level ${(item.level || "media").toLowerCase()}">${item.level || "Media"}</span>
      </div>
      ${item.items ? `<ul>${item.items.map(r => `<li>${r}</li>`).join("")}</ul>` : ""}
      ${item.detail ? `<p>${item.detail}</p>` : ""}
      ${item.action ? `<p><strong>Acción:</strong> ${item.action}</p>` : ""}
      ${item.score ? `<p><strong>Score riesgo:</strong> ${item.score}/5</p>` : ""}
    </article>
  `).join("");
}

function renderTechnical() {
  document.getElementById("techGrid").innerHTML = (techItems || []).map(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return "";
    const protocols = Array.isArray(item.protocolsSupported) ? item.protocolsSupported.join(", ") : (item.protocolsSupported || item.protocols || "");
    const sensors = Array.isArray(item.sensorTypes) ? item.sensorTypes.join(", ") : (item.sensorTypes || item.sensorArchitecture || "");
    const deploy = item.deploymentModel || "";
    const arch = item.architecture || "";
    const api = item.apiCapabilities || "";
    const scale = item.scalability || "";
    return `
      <article class="tech-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <dl>
          <div><dt>Protocolos soportados</dt><dd>${protocols}</dd></div>
          <div><dt>Arquitectura</dt><dd>${arch}</dd></div>
          <div><dt>Tipos de sensor</dt><dd>${sensors}</dd></div>
          <div><dt>Modelo de despliegue</dt><dd>${deploy}</dd></div>
          ${api ? `<div><dt>API</dt><dd>${api}</dd></div>` : ""}
          ${scale ? `<div><dt>Escalabilidad</dt><dd>${scale}</dd></div>` : ""}
        </dl>
      </article>
    `;
  }).join("");
}

function renderDeployment() {
  document.getElementById("deploymentGrid").innerHTML = (deploymentItems || []).map(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return "";
    return `
      <article class="deployment-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="deployment-meta">
          <div><span>On-premise</span><p>${item.onPremise || item.onprem || "No documentado"}</p></div>
          <div><span>Cloud</span><p>${item.cloud || "No documentado"}</p></div>
          <div><span>Híbrido</span><p>${item.hybrid || "No documentado"}</p></div>
          ${item.airGapped ? `<div><span>Air-gapped</span><p>${item.airGapped}</p></div>` : ""}
          ${item.typicalDeployTime ? `<div><span>Tiempo de despliegue</span><p>${item.typicalDeployTime}</p></div>` : ""}
          ${item.sensorDeployment ? `<div><span>Despliegue de sensores</span><p>${item.sensorDeployment}</p></div>` : ""}
          ${item.detail ? `<div><span>Detalle</span><p>${item.detail}</p></div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderInnovation() {
  document.getElementById("innovationGrid").innerHTML = (innovationItems || []).map(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return "";
    const maturity = item.maturity || 0;
    return `
      <article class="innovation-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="score-pair">
          <div class="badge"><span>Madurez</span><strong>${maturity}/5</strong></div>
          <div class="badge"><span>Nivel</span><strong>${maturity >= 4 ? "Alto" : maturity >= 3 ? "Medio" : "Basico"}</strong></div>
        </div>
        <div class="innovation-meta">
          ${item.aiCapabilities ? `<div><span>IA / Machine Learning</span><p>${item.aiCapabilities}</p></div>` : ""}
          ${item.digitalTwin ? `<div><span>Digital Twin</span><p>${item.digitalTwin}</p></div>` : ""}
          ${item.predictiveSecurity ? `<div><span>Seguridad predictiva</span><p>${item.predictiveSecurity}</p></div>` : ""}
          ${item.innovation ? `<div><span>Innovación</span><p>${item.innovation}</p></div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderCapabilities() {
  if (!productCapabilities.length) {
    document.getElementById("capabilitiesGrid").innerHTML = `<article class="capability-item"><strong>No disponible</strong></article>`;
    return;
  }
  document.getElementById("capabilitiesGrid").innerHTML = productCapabilities.map(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return "";
    return `
      <article class="capability-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${item.vendor}" loading="lazy">
          <div><strong>${item.vendor}</strong><p>${item.primary}</p></div>
        </div>
        <div class="capability-score">
          <span>Grado de implementación</span>
          <strong>${item.maturity.toFixed(1)}/5</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${(item.maturity / 5) * 100}%;background:${vendor.color}"></div></div>
          <p>${item.implementationGrade}</p>
        </div>
        <div class="capability-block"><span>Funcionalidades principales</span><div class="fit-chips">${item.core.map(v => `<span class="fit-chip high">${v}</span>`).join("")}</div></div>
        <div class="capability-block"><span>Otras soluciones</span><div class="fit-chips">${item.adjacent.map(v => `<span class="fit-chip">${v}</span>`).join("")}</div></div>
        <div class="capability-block"><span>Equivalentes en otros fabricantes</span><p>${item.peerOverlap.join(" - ")}</p></div>
        <div class="advantage-box"><strong>Diferenciadores</strong><p>${item.differentiators.join(" - ")}</p></div>
        <div class="disadvantage-box"><strong>Precaución</strong><p>${item.caution}</p></div>
        <div class="vendor-links">${item.sources.map((s, i) => `<a href="${s}" target="_blank" rel="noreferrer">Fuente ${i + 1}</a>`).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderEvidence() {
  document.getElementById("evidenceGrid").innerHTML = (evidenceItems || []).map(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return "";
    return `
      <article class="evidence-item" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${item.vendor}" loading="lazy">
          <strong>${item.vendor}</strong>
        </div>
        <div class="confidence-meter">
          <span>Confianza global</span>
          <strong>${item.confidence.toFixed(1)}/5</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${(item.confidence / 5) * 100}%;background:${vendor.color}"></div></div>
        </div>
        ${item.lastUpdated ? `<p><small>Actualizado: ${item.lastUpdated}</small></p>` : ""}
        ${(item.items || []).map(e => `
          <div class="evidence-row">
            <span class="badge">${e.type || "Fuente"}</span>
            <p><strong>${e.title || e.name || ""}</strong></p>
            ${e.confidence ? `<p>Confianza: ${e.confidence}/5</p>` : ""}
            ${e.url ? `<a href="${e.url}" target="_blank" rel="noreferrer">Ver fuente</a>` : `<small>Pendiente PoC/RFP</small>`}
          </div>
        `).join("")}
        ${!item.items && item.sources ? `
          <div class="evidence-row">
            <span class="badge">Fuentes</span>
            <p>${(Array.isArray(item.sources) ? item.sources : [item.sources]).map(s => typeof s === "string" ? s : (s.title || s.name || "")).join(" · ")}</p>
          </div>
        ` : ""}
      </article>
    `;
  }).join("");
}

function advancedScore(vi) {
  // advancedMetrics is market data, not scored metrics - return vendor strength as proxy
  return vendors[vi]?.strength || 0;
}

function selectedFrameworkIndexes() {
  return vendors.map((v, i) => ({ vendor: v, index: i })).filter(i => state.frameworkVendors[i.vendor.name]);
}

function renderFramework() {
  if (!Object.keys(state.frameworkVendors).length) {
    vendors.forEach((v, i) => state.frameworkVendors[v.name] = i === 0);
  }

  const advancedRanking = vendors.map((v, i) => ({ vendor: v, score: advancedScore(i) })).sort((a, b) => b.score - a.score);

  let marketHtml = "";
  if (advancedMetrics && advancedMetrics.marketShare2025) {
    marketHtml = `<article class="framework-item"><strong>Cuota de mercado estimada 2025</strong><div class="fit-chips">${advancedMetrics.marketShare2025.map(m => `<span class="fit-chip high">${m.vendor}: ${m.share}%</span>`).join("")}</div></article>`;
  }

  document.getElementById("frameworkGrid").innerHTML = `
    <article class="framework-item">
      <strong>Ranking por fortaleza técnica</strong>
      <div class="fit-chips">${advancedRanking.map(i => `<span class="fit-chip high">${i.vendor.name}: ${i.score.toFixed(1)}</span>`).join("")}</div>
    </article>
    ${marketHtml}
  `;

  document.getElementById("frameworkVendorControls").innerHTML = `
    <article class="framework-selector">
      <strong>Análisis por fabricante</strong>
      <p>Marca fabricantes para ver detalle.</p>
      <div class="vendor-checks">
        ${vendors.map(v => `
          <label class="vendor-check" style="--vendor-accent:${v.color}">
            <input type="checkbox" data-framework-vendor="${v.name}" ${state.frameworkVendors[v.name] ? "checked" : ""}>
            <span>${v.name}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;

  document.querySelectorAll("[data-framework-vendor]").forEach(input => {
    input.addEventListener("change", e => {
      state.frameworkVendors[e.target.dataset.frameworkVendor] = e.target.checked;
      persistState();
      renderFrameworkVendorDetails();
      updateCommandPanel();
    });
  });

  renderFrameworkVendorDetails();

  if (threatHeatmap && threatHeatmap.length) {
    const heatVendors = [...new Set(threatHeatmap.flatMap(t => t.vendorCoverage.map(v => v.vendor)))].slice(0, 8);
    document.getElementById("heatmapPanel").innerHTML = `
      <table>
        <thead><tr><th>Amenaza OT</th>${heatVendors.map(v => `<th>${v}</th>`).join("")}</tr></thead>
        <tbody>${threatHeatmap.map(row => `<tr><td><strong>${row.threat}</strong><br><small>${row.description.slice(0, 80)}...</small></td>${heatVendors.map(vn => {
          const vc = row.vendorCoverage.find(c => c.vendor === vn);
          if (!vc) return `<td>-</td>`;
          return `<td><span class="fit-chip ${vc.coverage >= 4 ? "high" : "low"}">${vc.coverage}/5</span></td>`;
        }).join("")}</tr>`).join("")}</tbody>
      </table>
    `;
  }
}

function renderFrameworkVendorDetails() {
  const selected = selectedFrameworkIndexes();
  if (!selected.length) {
    document.getElementById("frameworkVendorDetail").innerHTML = `<article class="vendor-framework-panel"><strong>Selecciona al menos un fabricante</strong></article>`;
    return;
  }
  document.getElementById("frameworkVendorDetail").innerHTML = selected.map(({ vendor, index }) => {
    const score = advancedScore(index);
    return `
      <article class="vendor-framework-panel" style="--vendor-accent:${vendor.color}">
        <div class="vendor-card-head">
          <img src="${vendor.logo}" alt="${vendor.name}" loading="lazy">
          <div><strong>${vendor.name}</strong><p>Fortaleza técnica: ${score.toFixed(1)}/5</p></div>
        </div>
        <div class="vendor-framework-grid">
          <div class="framework-item">
            <strong>Radar de capacidades</strong>
            ${radarSvgForVendor(index, vendor.color, vendor.name)}
          </div>
          <div class="framework-item">
            <strong>Scores por criterio</strong>
            <div class="fit-chips">
              ${criteria.slice(0, 9).map(c => `<span class="fit-chip ${c.scores[index] >= 4 ? "high" : "low"}">${c.label.split(" ")[0]}: ${c.scores[index]}/5</span>`).join("")}
            </div>
          </div>
        </div>
        ${threatHeatmap && threatHeatmap.length ? `
          <div class="heatmap-panel vendor-heatmap">
            <table>
              <thead><tr><th>Amenaza</th><th>${vendor.name}</th><th>Detalle</th></tr></thead>
              <tbody>${threatHeatmap.map(row => {
                const vc = row.vendorCoverage.find(c => c.vendor === vendor.name);
                if (!vc) return `<tr><td><strong>${row.threat}</strong></td><td>-</td><td>Sin cobertura documentada</td></tr>`;
                return `<tr><td><strong>${row.threat}</strong></td><td><span class="fit-chip ${vc.coverage >= 4 ? "high" : "low"}">${vc.coverage}/5</span></td><td>${vc.detail}</td></tr>`;
              }).join("")}</tbody>
            </table>
          </div>
        ` : ""}
      </article>
    `;
  }).join("");
}

// ─── RADAR SVG ───────────────────────────────────────────────────────

function radarSvgForVendor(vendorIndex, color, title) {
  const radarCriteria = criteria.slice(0, 9);
  const n = radarCriteria.length;
  const cx = 160, cy = 130, maxR = 100;
  const points = radarCriteria.map((c, i) => {
    const angle = (-90 + i * (360 / n)) * Math.PI / 180;
    const r = 20 + (c.scores[vendorIndex] / 5) * (maxR - 20);
    return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
  }).join(" ");

  return `
    <svg viewBox="0 0 320 260" role="img" aria-label="Radar de ${title}" style="width:100%;min-height:240px">
      <rect x="0" y="0" width="320" height="260" rx="8" fill="#fbfcfe"/>
      ${[100, 66, 33].map(r => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e2e8f0"/>`).join("")}
      <polygon points="${points}" fill="${color}22" stroke="${color}" stroke-width="2.5"/>
      ${radarCriteria.map((c, i) => {
        const angle = (-90 + i * (360 / n)) * Math.PI / 180;
        const lx = cx + Math.cos(angle) * (maxR + 18);
        const ly = cy + Math.sin(angle) * (maxR + 18);
        const label = c.label.length > 14 ? c.label.slice(0, 12) + "..." : c.label;
        return `<text x="${lx}" y="${ly + 4}" text-anchor="middle" fill="#647084" font-size="9" font-weight="700">${label}</text>`;
      }).join("")}
    </svg>
  `;
}

// ─── PROTOCOL MAP ────────────────────────────────────────────────────

function renderProtocolMap() {
  const target = document.getElementById("protocolMap");
  if (!target || !integrationProtocolItems.length) { if (target) target.innerHTML = ""; return; }

  const protocols = integrationProtocolItems;
  const allVendors = [...new Set(protocols.flatMap(p => (p.support || []).map(s => s.vendor)))];

  target.innerHTML = `
    <div class="protocol-matrix">
      <h3>Matriz de cobertura de protocolos industriales</h3>
      <p style="margin:0 0 12px;color:var(--muted)">Nivel de soporte: Full DPI (inspección profunda), IPS (firmas), Basic (detección), - (sin soporte documentado)</p>
      <div class="protocol-table-wrap">
        <table class="protocol-table">
          <thead>
            <tr>
              <th>Protocolo</th>
              ${allVendors.map(v => `<th>${v.split(" ")[0]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${protocols.map(p => `
              <tr>
                <td>
                  <strong>${p.protocol}</strong>
                  <br><small style="color:var(--muted)">${(p.description || "").slice(0, 60)}${(p.description || "").length > 60 ? "..." : ""}</small>
                </td>
                ${allVendors.map(vn => {
                  const s = (p.support || []).find(s => s.vendor === vn);
                  if (!s) return `<td class="proto-none">-</td>`;
                  const cls = s.level.includes("DPI") ? "proto-full" : s.level === "IPS signatures" ? "proto-ips" : s.level.includes("Passive") ? "proto-basic" : s.level === "Native" ? "proto-full" : "proto-basic";
                  const label = s.level.includes("Full DPI") ? "DPI" : s.level.includes("Passive") ? "Pasivo" : s.level === "IPS signatures" ? "IPS" : s.level === "Native" ? "Nativo" : s.level === "Full" ? "Full" : "Basic";
                  return `<td class="${cls}" title="${s.detail || ""}">${label}</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─── WIRE SECTION EXPORTS ────────────────────────────────────────────

function wireSectionExports() {
  document.querySelectorAll(".view > .visual-panel > .panel-title").forEach(title => {
    const view = title.closest(".view");
    if (!view || title.querySelector("[data-export-section]")) return;
    const button = document.createElement("button");
    button.className = "section-export";
    button.type = "button";
    button.dataset.exportSection = view.id;
    button.title = "Descargar esta sección en PDF";
    button.setAttribute("aria-label", "Descargar esta sección en PDF");
    button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg><span>PDF</span>`;
    button.addEventListener("click", () => {
      exportSectionPdf(view.id);
      toast(`PDF de ${sectionMeta[view.id]?.title || "sección"} generado.`);
    });
    title.appendChild(button);
  });
}

// ─── SPANISH MATRIX ──────────────────────────────────────────────────

const spanishCapabilities = {
  "S2 Grupo":              { tipo: "Mixto",     soc: true,  ens: "Alto",     iec: "Auditoría",  nis2: true,  ccn: "Directo",   geo: "Global (35 países)", verticales: "Defensa, Energía, Transporte, Agua", tamaño: "700+ empleados, 56.7M€", grupo: "Independiente (interés SEPI)" },
  "CounterCraft":          { tipo: "Producto",  soc: false, ens: "Alineado", iec: "No",         nis2: false, ccn: "Alineado",  geo: "Global (UK, US)",    verticales: "Defensa, Gobierno, Finanzas",       tamaño: "~50 empleados",          grupo: "VC funded ($5M)" },
  "Alias Robotics":        { tipo: "Producto",  soc: false, ens: "No",       iec: "Contexto",   nis2: false, ccn: "No",        geo: "Europa",             verticales: "Manufactura, Automotive, Defensa",  tamaño: "~20 empleados",          grupo: "EIC + NATO DIANA" },
  "Barbara IoT":           { tipo: "Producto",  soc: false, ens: "No",       iec: "Alineado",   nis2: false, ccn: "No",        geo: "Europa, ME, US",     verticales: "Manufactura, Energía, Agua",        tamaño: "~30 empleados",          grupo: "VC funded ($5.1M)" },
  "Enigmedia/Opscura":     { tipo: "Producto",  soc: false, ens: "No",       iec: "Diseño",     nis2: false, ccn: "Alineado",  geo: "Europa",             verticales: "Manufactura, Energía, Oil&Gas",     tamaño: "~15 empleados",          grupo: "Santander + Alma Mundi" },
  "InprOTech":             { tipo: "Mixto",     soc: false, ens: "Alineado", iec: "Sí",         nis2: true,  ccn: "Alineado",  geo: "España + Europa",    verticales: "Manufactura, Energía, Agua, Gob.",  tamaño: "54 empleados, 3.6M€",   grupo: "Inprosec (inversor estratégico)" },
  "Telefónica Tech":       { tipo: "Servicios", soc: true,  ens: "Alto",     iec: "Auditoría",  nis2: true,  ccn: "Certificado", geo: "Global",           verticales: "Energía, Salud, Transporte",        tamaño: "Miles (div. Telefónica)", grupo: "Telefónica" },
  "Deloitte Spain":        { tipo: "Servicios", soc: true,  ens: "Alto",     iec: "Auditoría",  nis2: true,  ccn: "Colaborador", geo: "EMEA (desde Madrid)", verticales: "Energía, Manufactura, Automotive", tamaño: "ECC Madrid (EMEA hub)",  grupo: "Deloitte Global" },
  "Tarlogic":              { tipo: "Servicios", soc: false, ens: "Alineado", iec: "Testing",    nis2: false, ccn: "Alineado",  geo: "Europa",             verticales: "Manufactura, Energía, Finanzas",    tamaño: "~80 empleados",          grupo: "Independiente (FT Growth 2026)" },
  "Cipher (Prosegur)":     { tipo: "Servicios", soc: true,  ens: "Alineado", iec: "No",         nis2: true,  ccn: "Alineado",  geo: "Global (5 países)",  verticales: "Energía, Infra crítica, Finanzas",  tamaño: "Div. Prosegur (cotizada)", grupo: "Prosegur" },
  "Titanium Industrial Security": { tipo: "Mixto", soc: true, ens: "Alineado", iec: "Auditoría", nis2: true, ccn: "Alineado", geo: "España (4 sedes)",   verticales: "Energía, Transporte, Manufactura",  tamaño: "30 empleados",           grupo: "INZU Group" },
  "Steryon":               { tipo: "Producto",  soc: false, ens: "No",       iec: "Alineado",   nis2: true,  ccn: "No",        geo: "España",             verticales: "Infra crítica, Manufactura",        tamaño: "8 empleados, $1.2M",     grupo: "VC funded (2024)" }
};

function renderSpanishMatrix() {
  const target = document.getElementById("spanishMatrix");
  if (!target || !spanishVendors.length) return;

  const dims = [
    { key: "tipo",       label: "Tipo de oferta",    format: v => { const cls = v === "Producto" ? "proto-full" : v === "Mixto" ? "proto-ips" : "proto-basic"; return `<td class="${cls}">${v}</td>`; }},
    { key: "soc",        label: "SOC OT dedicado",   format: v => v ? `<td class="proto-full">Sí</td>` : `<td class="proto-none">No</td>` },
    { key: "ens",        label: "Certificación ENS",  format: v => { const cls = v === "Alto" ? "proto-full" : v === "Alineado" ? "proto-ips" : "proto-none"; return `<td class="${cls}">${v}</td>`; }},
    { key: "iec",        label: "IEC 62443",          format: v => { const cls = v === "Sí" || v === "Auditoría" ? "proto-full" : v === "Alineado" || v === "Diseño" || v === "Testing" || v === "Contexto" ? "proto-ips" : "proto-none"; return `<td class="${cls}">${v}</td>`; }},
    { key: "nis2",       label: "NIS2 ready",         format: v => v ? `<td class="proto-full">Sí</td>` : `<td class="proto-none">No</td>` },
    { key: "ccn",        label: "CCN-CERT",           format: v => { const cls = v === "Directo" || v === "Certificado" ? "proto-full" : v === "Colaborador" || v === "Alineado" ? "proto-ips" : "proto-none"; return `<td class="${cls}">${v}</td>`; }},
    { key: "geo",        label: "Cobertura geográfica", format: v => `<td>${v}</td>` },
    { key: "verticales", label: "Verticales",         format: v => `<td style="font-size:11px">${v}</td>` },
    { key: "tamaño",     label: "Tamaño",             format: v => `<td style="font-size:11px">${v}</td>` },
    { key: "grupo",      label: "Grupo / Funding",    format: v => `<td style="font-size:11px">${v}</td>` }
  ];

  const orderedVendors = [...spanishVendors].sort((a, b) => b.strength - a.strength);

  target.innerHTML = `
    <div class="protocol-matrix">
      <h3>Matriz de capacidades del ecosistema español OT</h3>
      <p style="margin:0 0 12px;color:var(--muted)">Comparativa de certificaciones, tipo de oferta, cobertura y posicionamiento de los ${spanishVendors.length} fabricantes españoles de ciberseguridad industrial.</p>
      <div class="protocol-table-wrap">
        <table class="protocol-table spanish-cap-table">
          <thead>
            <tr>
              <th>Capacidad</th>
              ${orderedVendors.map(v => `<th style="min-width:90px"><span style="writing-mode:vertical-lr;transform:rotate(180deg);white-space:nowrap;font-size:10px">${v.name.split(" ")[0]}</span></th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${dims.map(d => `
              <tr>
                <td><strong>${d.label}</strong></td>
                ${orderedVendors.map(v => {
                  const cap = spanishCapabilities[v.name];
                  return cap ? d.format(cap[d.key]) : `<td class="proto-none">-</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSpanish() {
  if (!spanishVendors.length) {
    document.getElementById("spanishGrid").innerHTML = `<article class="spanish-card"><strong>Sin datos de fabricantes españoles</strong></article>`;
    return;
  }

  const sorted = [...spanishVendors].sort((a, b) => b.strength - a.strength);
  const max = Math.max(...sorted.map(v => v.strength));

  document.getElementById("spanishRanking").innerHTML = sorted.map((v, i) => `
    <div class="ranking-row">
      <div class="rank-pill">#${i + 1}</div>
      <div class="vendor-name with-logo"><img src="${v.logo}" alt="${v.name}" loading="lazy">${v.name}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(v.strength / max) * 100}%;background:${v.color}"></div></div>
      <div class="score">${v.strength.toFixed(1)}</div>
    </div>
  `).join("");

  document.getElementById("spanishGrid").innerHTML = spanishVendors.map(v => {
    const ensClass = v.ensStatus?.includes("Alto") || v.ensStatus?.includes("Certificado") ? "certified" : v.ensStatus?.includes("Alineado") ? "aligned" : "unknown";
    return `
      <article class="spanish-card" style="--vendor-accent:${v.color}">
        <div class="vendor-card-head">
          <img src="${v.logo}" alt="${v.name}" loading="lazy">
          <div>
            <strong>${v.name}</strong>
            <p>${v.hq || ""}</p>
          </div>
        </div>
        <div class="badge-row">
          <span class="flag-badge">España</span>
          <span class="ens-status ${ensClass}">${v.ensStatus || "No documentado"}</span>
          <span class="badge">${v.gartner || ""}</span>
        </div>
        <div class="score-pair">
          <div class="badge"><span>Fortaleza</span><strong>${v.strength}/5</strong></div>
          <div class="badge"><span>Ajuste</span><strong>${v.fit}/5</strong></div>
        </div>
        <div class="advantage-box"><strong>Ventajas</strong>${v.bestFor}</div>
        <div class="disadvantage-box"><strong>Cautelas</strong>${v.caution}</div>
        <div class="spanish-meta">
          <div><span>CCN-CERT</span><p>${v.ccnCert || "No documentado"}</p></div>
          <div><span>INCIBE</span><p>${v.incibeRelation || "No documentado"}</p></div>
          <div><span>Contratos publicos</span><p>${v.governmentContracts || "No documentado"}</p></div>
          <div><span>Cumplimiento</span><p>${v.compliance || "No documentado"}</p></div>
        </div>
        <div class="vendor-links">
          <a href="${v.productUrl || v.docsUrl || "#"}" target="_blank" rel="noreferrer">Web</a>
          ${v.complianceUrl ? `<a href="${v.complianceUrl}" target="_blank" rel="noreferrer">Cumplimiento</a>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

// ─── NAVIGATION & SCENARIOS ──────────────────────────────────────────

function applyScenario(name) {
  const selected = scenarios[name] || {};
  state.scenario = name;
  const sel = document.getElementById("scenario");
  const scenarioName = sel.options[sel.selectedIndex]?.text || "Balanceado";
  state.scoringSource = `Escenario: ${scenarioName}`;
  criteria.forEach(c => { state.weights[c.id] = selected[c.id] || c.weight; });
  persistState();
  renderCriteria();
  refresh();
  toast("Escenario aplicado.");
}

function wireNavigation() {
  const showView = (viewId, targetId) => {
    if (!document.getElementById(viewId)) return;
    document.querySelectorAll(".rail-item").forEach(i => i.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const rail = document.querySelector(`.rail-item[data-view="${viewId}"]`);
    if (rail) rail.classList.add("active");
    document.getElementById(viewId).classList.add("active");
    if (window.location.hash !== `#${viewId}`) history.replaceState(null, "", `#${viewId}`);
    state.currentView = viewId;
    persistState();
    updateCommandPanel(viewId);
    if (targetId) window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => showView(btn.dataset.view, btn.dataset.target));
  });

  document.getElementById("scenario").addEventListener("change", e => applyScenario(e.target.value));
  document.getElementById("resetApp").addEventListener("click", () => {
    criteria.forEach(c => state.weights[c.id] = c.weight);
    useCases.forEach(u => state.required[u.label] = false);
    state.profile = { preset: "balanced", sector: "No definido", size: "No definido", soc: "No definido", notes: "" };
    state.scenario = "balanced";
    state.scoringSource = "Pesos base";
    state.frameworkVendors = {};
    state.currentView = "dashboard";
    localStorage.removeItem(STORAGE_KEY);
    document.getElementById("scenario").value = "balanced";
    renderCriteria(); renderProfile(); renderUseCases(); renderFramework(); refresh();
    showView("dashboard");
    toast("Evaluacion restablecida.", "info");
  });

  document.getElementById("exportPdf").addEventListener("click", () => { exportPdf(); toast("PDF generado."); });
  document.getElementById("exportCurrentSection").addEventListener("click", () => {
    const id = activeSectionId();
    exportSectionPdf(id);
    toast(`PDF de ${sectionMeta[id]?.title || "sección"} generado.`);
  });
  document.getElementById("previousSection").addEventListener("click", () => {
    const order = getNavOrder();
    const i = order.indexOf(activeSectionId());
    showView(order[(i - 1 + order.length) % order.length]);
  });
  document.getElementById("nextSection").addEventListener("click", () => {
    const order = getNavOrder();
    const i = order.indexOf(activeSectionId());
    showView(order[(i + 1) % order.length]);
  });
  document.getElementById("copySectionLink").addEventListener("click", async () => {
    const url = `${window.location.origin}${window.location.pathname}#${activeSectionId()}`;
    try { await navigator.clipboard.writeText(url); toast("Enlace copiado."); }
    catch { toast("Enlace copiado."); }
  });

  const initial = window.location.hash.slice(1);
  if (initial && document.getElementById(initial)) showView(initial);
  else if (state.currentView && document.getElementById(state.currentView)) showView(state.currentView);
  else updateCommandPanel("dashboard");
  window.addEventListener("hashchange", () => { const v = window.location.hash.slice(1); if (v) showView(v); });
}

// ─── PDF EXPORT ──────────────────────────────────────────────────────

function exportBlob(blob, filename) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportPdf() { syncProfileForm(); exportBlob(createPdf(), "ics-security-studio-evaluación.pdf"); }
function exportSectionPdf(id) { syncProfileForm(); exportBlob(createPdf(id), `ics-security-studio-${id}.pdf`); }

function createPdf(sectionId) {
  const doc = createPdfWriter();
  const ranked = scoreVendors();
  const winner = ranked.find(i => i.unmetRequirements.length === 0) || ranked[0];
  const sel = document.getElementById("scenario");
  const scenarioName = sel?.options[sel.selectedIndex]?.text || "Balanceado";

  doc.cover("ICS Security Studio", sectionId ? (sectionMeta[sectionId]?.title || "Sección") : "Evaluación completa de ciberseguridad industrial OT/ICS/SCADA", [
    `Fecha: ${new Date().toLocaleDateString("es-ES")}`,
    `Perfil: ${profilePresets[state.profile.preset]?.label || "Balanceado"}`,
    `Escenario: ${scenarioName}`,
    `Scoring: ${state.scoringSource}`,
    `${vendors.length} fabricantes globales + ${spanishVendors.length} españoles`
  ]);

  if (!sectionId || sectionId === "dashboard") {
    doc.section("1. Resumen ejecutivo");
    doc.kv("Recomendación", winner.name);
    doc.kv("Perfil", `${state.profile.sector} | ${state.profile.size} | ${state.profile.soc}`);
    if (state.profile.notes) doc.kv("Notas", state.profile.notes);
    doc.paragraph(winner.bestFor);
    doc.kv("Requisitos pendientes de validación", String(ranked.reduce((s, i) => s + i.unmetRequirements.length, 0)));
    doc.kv("Nivel de riesgo medio", (vendors.reduce((s, v) => s + v.risk, 0) / vendors.length).toFixed(1));
    doc.section("2. Ranking ponderado");
    doc.barChart("Ranking", ranked.map(i => ({ label: i.name, value: i.score, color: i.color })), 5);
    ranked.forEach((item, idx) => {
      doc.kv(`#${idx + 1} ${item.name}`, `${item.score.toFixed(2)}/5`);
      if (item.unmetRequirements.length) doc.paragraph(`Requiere validación en: ${item.unmetRequirements.join(", ")}`);
    });
    doc.section("3. Lectura ejecutiva");
    vendors.forEach(v => { doc.subsection(v.name); doc.kv("Ventajas", v.bestFor); doc.kv("Cautelas", v.caution); doc.kv("Cumplimiento", v.compliance); });
  }

  if (!sectionId || sectionId === "profile") {
    doc.section("Perfil del cliente");
    Object.entries(profilePresets).forEach(([, p]) => {
      doc.subsection(p.label);
      doc.kv("Pesos", Object.entries(p.weights || {}).map(([k, v]) => `${criteria.find(c => c.id === k)?.label || k}: ${v}`).join(" | ") || "Base");
    });
  }

  if (!sectionId || sectionId === "assessment") {
    doc.section("Criterios y pesos");
    criteria.forEach(c => {
      const scores = vendors.map((v, i) => `${v.name}: ${c.scores[i]}`).join(" | ");
      doc.kv(c.label, `Peso ${state.weights[c.id]} | ${scores}`);
    });
  }

  if (!sectionId || sectionId === "usecases") {
    doc.section("Casos imprescindibles");
    useCases.forEach(u => {
      const fits = u.fits || u.fit || [];
      doc.kv(u.label, `${state.required[u.label] ? "IMPRESCINDIBLE" : "Deseable"} | ${vendors.map((v, i) => `${v.name}: ${fits[i] || "-"}`).join(" | ")}`);
    });
  }

  if (!sectionId || sectionId === "risks") {
    doc.section("Riesgos y vulnerabilidades");
    (riskItems || []).forEach(i => { doc.subsection(`${i.vendor} - ${i.level || "Media"}`); if (i.detail) doc.paragraph(i.detail); });
    (cveItems || []).forEach(i => {
      if (i.cves.length) doc.kv(`${i.vendor} CVEs`, i.cves.map(c => `${c.id} (CVSS ${c.cvss})`).join("; "));
      if (i.summary) doc.kv(i.vendor, i.summary);
    });
  }

  if (!sectionId || sectionId === "capabilities") {
    doc.section("Funcionalidades");
    productCapabilities.forEach(i => {
      doc.subsection(`${i.vendor} - ${i.primary}`);
      doc.kv("Madurez", `${i.maturity}/5`);
      doc.kv("Core", i.core.join(", "));
      doc.kv("Diferenciadores", i.differentiators.join(" | "));
      doc.kv("Precaución", i.caution);
    });
  }

  if (!sectionId || sectionId === "technical") {
    doc.section("Protocolos y especificaciones técnicas");
    (techItems || []).forEach(i => {
      doc.subsection(i.vendor);
      if (i.architecture) doc.kv("Arquitectura", i.architecture);
      const proto = Array.isArray(i.protocolsSupported) ? i.protocolsSupported.join(", ") : (i.protocolsSupported || "");
      if (proto) doc.kv("Protocolos", proto);
    });
  }

  if (!sectionId || sectionId === "deployment") {
    doc.section("Despliegue");
    (deploymentItems || []).forEach(i => {
      doc.subsection(i.vendor);
      if (i.onPremise) doc.kv("On-premise", i.onPremise);
      if (i.cloud) doc.kv("Cloud", i.cloud);
      if (i.airGapped) doc.kv("Air-gapped", i.airGapped);
    });
  }

  if (!sectionId || sectionId === "innovation") {
    doc.section("Innovación");
    (innovationItems || []).forEach(i => {
      doc.subsection(i.vendor);
      doc.kv("Madurez", `${i.maturity || "-"}/5`);
      if (i.aiCapabilities) doc.kv("IA/ML", i.aiCapabilities);
      if (i.digitalTwin) doc.kv("Digital Twin", i.digitalTwin);
    });
  }

  if (!sectionId || sectionId === "evidence") {
    doc.section("Evidencia y confianza");
    (evidenceItems || []).forEach(i => {
      doc.subsection(`${i.vendor} - ${i.confidence}/5`);
      const src = i.sources || [];
      if (src.length) doc.kv("Fuentes", src.map(s => typeof s === "string" ? s : (s.title || "")).join(" | "));
    });
  }

  if (!sectionId || sectionId === "spanish") {
    doc.section("Fabricantes españoles");
    spanishVendors.forEach(v => {
      doc.subsection(v.name);
      doc.kv("Fortaleza / Ajuste", `${v.strength}/5 | ${v.fit}/5`);
      doc.kv("ENS", v.ensStatus || "No documentado");
      doc.kv("CCN-CERT", v.ccnCert || "No documentado");
      doc.kv("INCIBE", v.incibeRelation || "No documentado");
      doc.kv("Contratos", v.governmentContracts || "No documentado");
      doc.kv("Ventajas", v.bestFor);
      doc.kv("Cautelas", v.caution);
    });
  }

  if (!sectionId) {
    doc.section("Notas de uso");
    doc.paragraph("La puntuación agregada no sustituye la validación de requisitos imprescindibles mediante PoC o RFP formal. Los datos provienen de fuentes públicas y pueden no estar actualizados. Consulte el DISCLAIMER para más información.");
  }

  return doc.toBlob();
}

function createPdfWriter() {
  const pw = 595.28, ph = 841.89, margin = 46, cw = pw - margin * 2;
  const pages = [];
  let cmds = [], y = margin, pn = 0;
  const rgb = h => { const v = h.replace("#", ""); return [parseInt(v.slice(0, 2), 16) / 255, parseInt(v.slice(2, 4), 16) / 255, parseInt(v.slice(4, 6), 16) / 255].map(n => n.toFixed(3)).join(" "); };
  // WinAnsiEncoding supports Latin-1: á é í ó ú ñ ü ¿ ¡ and more
  const clean = v => String(v ?? "")
    .replace(/[""]/g, '"').replace(/['']/g, "'").replace(/[–—]/g, "-").replace(/[·•]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "");
  const literal = v => {
    const s = clean(v);
    // Encode as hex string to handle chars > 0x7F properly
    const hex = Array.from(s).map(c => {
      const code = c.charCodeAt(0);
      return code.toString(16).padStart(2, "0");
    }).join("");
    return `<${hex}>`;
  };
  const pdfY = v => ph - v;
  const textWidth = (v, s) => clean(v).length * s * 0.48;
  const wrap = (v, s, w) => {
    const words = clean(v).split(/\s+/).filter(Boolean), lines = [];
    let line = "";
    words.forEach(word => {
      const c = line ? `${line} ${word}` : word;
      if (textWidth(c, s) <= w || !line) line = c;
      else { lines.push(line); line = word; }
    });
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  };
  const color = h => cmds.push(`${rgb(h)} rg`);
  const rect = (x, t, w, h, f = "#ffffff") => { color(f); cmds.push(`${x.toFixed(2)} ${(ph - t - h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f`); };
  const line = (x1, y1, x2, y2, s = "#d8dee8", w = 1) => { cmds.push(`${rgb(s)} RG ${w} w ${x1.toFixed(2)} ${pdfY(y1).toFixed(2)} m ${x2.toFixed(2)} ${pdfY(y2).toFixed(2)} l S`); };
  const text = (v, x, t, s = 10, b = false, f = "#17212f") => { color(f); cmds.push(`BT /${b ? "F2" : "F1"} ${s} Tf ${x.toFixed(2)} ${pdfY(t).toFixed(2)} Td ${literal(v)} Tj ET`); };
  const footer = () => { line(margin, ph - 36, pw - margin, ph - 36, "#d8dee8", 0.6); text("ICS Security Studio", margin, ph - 24, 8, true, "#647084"); text(`Página ${pn}`, pw - margin - 42, ph - 24, 8, false, "#647084"); };
  const header = () => { rect(margin, 30, 24, 24, "#b45309"); text("ICS", margin + 34, 47, 11, true, "#17212f"); line(margin, 66, pw - margin, 66, "#d8dee8", 0.8); y = 86; };
  const newPage = (wh = true) => { if (cmds.length) { footer(); pages.push(cmds.join("\n")); } cmds = []; pn++; rect(0, 0, pw, ph, "#ffffff"); if (wh) header(); else y = margin; };
  const ensure = h => { if (y + h > ph - 58) newPage(true); };
  const addWrapped = (v, x, w, s = 10, b = false, f = "#17212f", l = s + 4) => {
    const lines = wrap(v, s, w);
    ensure(lines.length * l + 3);
    lines.forEach(row => { text(row, x, y, s, b, f); y += l; });
  };
  newPage(false);
  return {
    cover(title, sub, lines) {
      rect(0, 0, pw, 150, "#111827");
      rect(margin, 48, 42, 42, "#b45309");
      text("ICS", margin + 56, 75, 13, true, "#fbbf24");
      text(title, margin, 206, 28, true, "#17212f");
      text(sub, margin, 232, 11, false, "#647084");
      y = 276;
      lines.forEach(l => this.kv("", l));
      y += 16;
    },
    section(t) { ensure(54); y += 6; rect(margin, y, cw, 28, "#eef4f8"); text(t, margin + 12, y + 18, 14, true, "#17212f"); y += 42; },
    subsection(t) { ensure(30); y += 4; text(t, margin, y, 12, true, "#b45309"); y += 18; },
    paragraph(v) { addWrapped(v, margin, cw, 10, false, "#17212f", 14); y += 4; },
    bullet(v) { ensure(18); text("-", margin + 8, y, 10, true, "#b45309"); addWrapped(v, margin + 22, cw - 22, 10, false, "#17212f", 14); },
    kv(label, value) { ensure(28); addWrapped(label, margin, 135, 9, true, "#647084", 12); const le = y; y -= 12; addWrapped(value, margin + 148, cw - 148, 10, false, "#17212f", 14); y = Math.max(y, le) + 4; },
    barChart(title, rows, maxV) {
      const rh = 24, ch = 46 + rows.length * rh;
      ensure(ch + 10);
      rect(margin, y, cw, ch, "#fbfcfe");
      text(title, margin + 12, y + 18, 11, true, "#17212f");
      y += 34;
      rows.forEach(row => {
        const lw = 128, bw = Math.max(4, ((row.value / maxV) * (cw - lw - 58)));
        text(row.label, margin + 12, y + 12, 9, true, "#17212f");
        rect(margin + lw, y + 2, cw - lw - 48, 12, "#eef2f7");
        rect(margin + lw, y + 2, bw, 12, row.color || "#b45309");
        text(String(Number(row.value).toFixed(2)), pw - margin - 36, y + 12, 9, true, "#647084");
        y += rh;
      });
      y += 12;
    },
    toBlob() {
      footer(); pages.push(cmds.join("\n"));
      const objects = [];
      const pageRefs = pages.map((_, i) => `${6 + i * 2} 0 R`).join(" ");
      objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
      objects[2] = `<< /Type /Pages /Kids [${pageRefs}] /Count ${pages.length} >>`;
      objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
      objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";
      pages.forEach((stream, i) => {
        objects[5 + i * 2] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
        objects[6 + i * 2] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw.toFixed(2)} ${ph.toFixed(2)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${5 + i * 2} 0 R >>`;
      });
      let out = "%PDF-1.4\n";
      const offsets = [0];
      for (let id = 1; id < objects.length; id++) { offsets[id] = out.length; out += `${id} 0 obj\n${objects[id]}\nendobj\n`; }
      const xo = out.length;
      out += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
      for (let id = 1; id < objects.length; id++) out += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
      out += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xo}\n%%EOF`;
      return new Blob([out], { type: "application/pdf" });
    }
  };
}

// ─── VERTICAL FILTERS ───────────────────────────────────────────────

const verticalMap = {
  "Energía": ["Claroty","Nozomi Networks","Dragos","Fortinet OT","Cisco Industrial","Honeywell","Siemens","Schneider Electric","Waterfall Security","Radiflow","Forescout"],
  "Oil & Gas": ["Claroty","Nozomi Networks","Dragos","Fortinet OT","Honeywell","Xage Security","Waterfall Security"],
  "Manufactura": ["Claroty","Nozomi Networks","Fortinet OT","Cisco Industrial","TXOne Networks","Siemens","Schneider Electric","Armis","Forescout"],
  "Agua": ["Claroty","Nozomi Networks","Dragos","Radiflow","Schneider Electric","Waterfall Security"],
  "Transporte": ["Claroty","Nozomi Networks","Dragos","Cisco Industrial","Fortinet OT","Forescout"],
  "Farmacéutica": ["Claroty","Nozomi Networks","TXOne Networks","Honeywell","Schneider Electric"],
  "Defensa": ["Dragos","Waterfall Security","OPSWAT","Xage Security"]
};

function renderVerticalFilters() {
  const target = document.getElementById("verticalFilters");
  if (!target) return;
  const verticals = [t("allVerticals"), ...Object.keys(verticalMap)];
  target.innerHTML = verticals.map(v => {
    const isAll = v === t("allVerticals");
    const active = isAll ? !state.verticalFilter : state.verticalFilter === v;
    return `<button class="vertical-chip ${active ? "active" : ""}" data-vertical="${isAll ? "" : v}" type="button">${v}</button>`;
  }).join("");
  target.querySelectorAll(".vertical-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.verticalFilter = btn.dataset.vertical || null;
      renderVerticalFilters();
      refresh();
    });
  });
}

// ─── COMPARE ────────────────────────────────────────────────────────

function renderCompare() {
  const selectorsEl = document.getElementById("compareSelectors");
  const resultEl = document.getElementById("compareResult");
  if (!selectorsEl || !resultEl) return;

  selectorsEl.innerHTML = [0, 1, 2].map(i => `
    <select class="compare-select" data-compare-idx="${i}">
      <option value="">-- Fabricante ${i + 1} --</option>
      <optgroup label="Globales">${vendors.map(v => `<option value="${v.name}" ${state.compareVendors[i] === v.name ? "selected" : ""}>${v.name}</option>`).join("")}</optgroup>
      <optgroup label="España">${spanishVendors.map(v => `<option value="${v.name}" ${state.compareVendors[i] === v.name ? "selected" : ""}>${v.name}</option>`).join("")}</optgroup>
    </select>
  `).join("");

  selectorsEl.querySelectorAll(".compare-select").forEach(sel => {
    sel.addEventListener("change", e => {
      state.compareVendors[Number(e.target.dataset.compareIdx)] = e.target.value;
      renderCompareResult();
    });
  });

  renderCompareResult();
}

function renderCompareResult() {
  const resultEl = document.getElementById("compareResult");
  if (!resultEl) return;
  const selected = state.compareVendors.filter(Boolean);
  if (selected.length < 2) {
    resultEl.innerHTML = `<p style="color:var(--muted);padding:12px">Selecciona al menos 2 fabricantes para comparar.</p>`;
    return;
  }

  const allVendorPool = [...vendors, ...spanishVendors];
  const vendorObjs = selected.map(name => {
    const vendor = allVendorPool.find(v => v.name === name);
    const globalIdx = vendors.findIndex(v => v.name === name);
    return { vendor, index: globalIdx, isSpanish: globalIdx === -1 };
  }).filter(v => v.vendor);

  // For Spanish vendors without criteria scores, use strength as uniform proxy
  function getScore(vo, criterionIdx) {
    if (!vo.isSpanish) return criteria[criterionIdx].scores[vo.index];
    return Math.round(vo.vendor.strength);
  }

  // Build comparison table
  let tableRows = criteria.map((c, ci) => {
    const scores = vendorObjs.map(v => getScore(v, ci));
    const maxS = Math.max(...scores);
    const minS = Math.min(...scores);
    const hasDiff = (maxS - minS) >= 2;
    return `<tr class="${hasDiff ? "highlight-diff" : ""}">
      <td><strong>${c.label}</strong></td>
      ${vendorObjs.map(v => {
        const s = getScore(v, ci);
        return `<td><span class="compare-bar" style="width:${(s / 5) * 60}px;background:${v.vendor.color}"></span>${s}/5${v.isSpanish ? "*" : ""}</td>`;
      }).join("")}
    </tr>`;
  }).join("");

  // Build radar overlay SVG
  const radarCriteria = criteria.slice(0, 9);
  const n = radarCriteria.length;
  const cx = 200, cy = 160, maxR = 120;

  const polygons = vendorObjs.map(v => {
    const points = radarCriteria.map((c, i) => {
      const ci = criteria.indexOf(c);
      const angle = (-90 + i * (360 / n)) * Math.PI / 180;
      const r = 20 + (getScore(v, ci) / 5) * (maxR - 20);
      return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
    }).join(" ");
    return `<polygon points="${points}" fill="${v.vendor.color}22" stroke="${v.vendor.color}" stroke-width="2.5"/>`;
  }).join("");

  const radarLabels = radarCriteria.map((c, i) => {
    const angle = (-90 + i * (360 / n)) * Math.PI / 180;
    const lx = cx + Math.cos(angle) * (maxR + 22);
    const ly = cy + Math.sin(angle) * (maxR + 22);
    const label = c.label.length > 14 ? c.label.slice(0, 12) + "..." : c.label;
    return `<text x="${lx}" y="${ly + 4}" text-anchor="middle" fill="var(--muted)" font-size="10" font-weight="700">${label}</text>`;
  }).join("");

  const legend = vendorObjs.map((v, i) => `
    <rect x="${16}" y="${310 + i * 20}" width="14" height="14" rx="3" fill="${v.vendor.color}"/>
    <text x="36" y="${322 + i * 20}" fill="var(--ink)" font-size="12" font-weight="800">${v.vendor.name}</text>
  `).join("");

  resultEl.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th>Criterio</th>${vendorObjs.map(v => `<th style="border-left:3px solid ${v.vendor.color}">${v.vendor.name}</th>`).join("")}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
    ${vendorObjs.some(v => v.isSpanish) ? `<p style="color:var(--muted);font-size:12px;margin:4px 0 0">* Fabricante español: scores estimados a partir de su fortaleza técnica global (no dispone de scoring detallado por criterio).</p>` : ""}
    <div class="compare-radar-wrap">
      <h3 style="margin:0 0 12px">Radar comparativo</h3>
      <svg viewBox="0 0 400 ${310 + vendorObjs.length * 20 + 10}" style="width:100%;min-height:340px">
        ${[maxR, maxR * 0.66, maxR * 0.33].map(r => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)"/>`).join("")}
        ${polygons}
        ${radarLabels}
        ${legend}
      </svg>
    </div>
  `;
}

// ─── PURDUE MODEL ───────────────────────────────────────────────────

const purdueMap = {
  5: ["Forescout","Microsoft Defender IoT","Armis"],
  4: ["Claroty","Nozomi Networks","Forescout","Microsoft Defender IoT","Armis","Tenable OT"],
  "3.5": ["Waterfall Security","Fortinet OT","Cisco Industrial","OPSWAT","Cyolo","Xage Security"],
  3: ["Claroty","Nozomi Networks","Dragos","Honeywell","Siemens","Schneider Electric","Radiflow"],
  2: ["Claroty","Nozomi Networks","Dragos","TXOne Networks","Siemens","Honeywell","Radiflow"],
  1: ["TXOne Networks","Siemens","Schneider Electric","OPSWAT"],
  0: ["Nozomi Networks","Dragos","Siemens"]
};

const purdueLabels = {
  5: "Enterprise Network (ERP, email)",
  4: "Site Business (MES, historian)",
  "3.5": "DMZ (firewalls, data diodes, jump servers)",
  3: "Site Operations (HMI, eng. workstations)",
  2: "Area Control (PLCs, RTUs, DCS controllers)",
  1: "Basic Control (sensors, actuators, drives)",
  0: "Process (physical process)"
};

function renderPurdueModel() {
  const target = document.getElementById("purdueModel");
  if (!target) return;

  const levels = ["5", "4", "3.5", "3", "2", "1", "0"];
  const bandH = 52, padTop = 50, padLeft = 10, svgW = 800;
  const svgH = padTop + levels.length * bandH + 20;
  const colors = ["#3b82f6", "#6366f1", "#ec4899", "#f59e0b", "#10b981", "#06b6d4", "#8b5cf6"];

  let bands = levels.map((lvl, i) => {
    const y = padTop + i * bandH;
    const vendorList = purdueMap[lvl] || [];
    const dots = vendorList.map((vn, di) => {
      const vendor = findVendor(vn);
      const c = vendor ? vendor.color : "#94a3b8";
      const dx = 320 + di * 56;
      const shortName = vn.split(" ")[0];
      return `<circle cx="${dx}" cy="${y + bandH / 2}" r="8" fill="${c}" opacity="0.9"/>
              <text x="${dx}" y="${y + bandH / 2 + 20}" text-anchor="middle" fill="var(--muted)" font-size="8" font-weight="700">${shortName}</text>`;
    }).join("");

    return `
      <rect x="${padLeft}" y="${y}" width="${svgW - padLeft * 2}" height="${bandH - 4}" rx="6" fill="${colors[i]}18" stroke="${colors[i]}44" stroke-width="1"/>
      <text x="${padLeft + 8}" y="${y + 20}" fill="var(--ink)" font-size="13" font-weight="900">Level ${lvl}</text>
      <text x="${padLeft + 8}" y="${y + 36}" fill="var(--muted)" font-size="10">${purdueLabels[lvl]}</text>
      ${dots}
    `;
  }).join("");

  target.innerHTML = `
    <h3 style="margin:0 0 12px;font-size:18px">Modelo Purdue: cobertura por fabricante</h3>
    <svg viewBox="0 0 ${svgW} ${svgH}" style="width:100%;min-height:${svgH}px">
      <text x="${svgW / 2}" y="30" text-anchor="middle" fill="var(--ink)" font-size="15" font-weight="900">Modelo de referencia Purdue para redes ICS/OT</text>
      ${bands}
    </svg>
  `;
}

// ─── CVE TIMELINE ───────────────────────────────────────────────────

function renderCveTimeline() {
  const target = document.getElementById("cveTimeline");
  if (!target || !cveItems || !cveItems.length) { if (target) target.innerHTML = ""; return; }

  // Collect all CVEs with dates
  const allCves = [];
  cveItems.forEach(item => {
    const vendor = findVendor(item.vendor);
    if (!vendor) return;
    (item.cves || []).forEach(c => {
      if (c.date) {
        allCves.push({ vendor: item.vendor, color: vendor.color, date: new Date(c.date), cvss: c.cvss || 5, id: c.id });
      }
    });
  });

  if (!allCves.length) { target.innerHTML = ""; return; }

  allCves.sort((a, b) => a.date - b.date);
  const minDate = allCves[0].date.getTime();
  const maxDate = Math.max(Date.now(), allCves[allCves.length - 1].date.getTime());
  const vendorNames = [...new Set(allCves.map(c => c.vendor))];
  const padL = 140, padR = 30, padT = 50, rowH = 36;
  const svgW = 900, svgH = padT + vendorNames.length * rowH + 40;

  const timeX = (d) => padL + ((d.getTime() - minDate) / (maxDate - minDate)) * (svgW - padL - padR);

  const rows = vendorNames.map((vn, i) => {
    const y = padT + i * rowH + rowH / 2;
    return `<text x="${padL - 8}" y="${y + 4}" text-anchor="end" fill="var(--ink)" font-size="11" font-weight="800">${vn}</text>
            <line x1="${padL}" y1="${y}" x2="${svgW - padR}" y2="${y}" stroke="var(--line)" stroke-width="1"/>`;
  }).join("");

  const dots = allCves.map(c => {
    const vi = vendorNames.indexOf(c.vendor);
    const y = padT + vi * rowH + rowH / 2;
    const x = timeX(c.date);
    const r = 4 + (c.cvss / 10) * 8;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${c.color}" opacity="0.8"><title>${c.id} (CVSS ${c.cvss}) - ${c.date.toLocaleDateString("es-ES")}</title></circle>`;
  }).join("");

  // Time labels
  const years = new Set(allCves.map(c => c.date.getFullYear()));
  const yearLabels = [...years].map(yr => {
    const d = new Date(yr, 6, 1);
    const x = timeX(d);
    if (x < padL || x > svgW - padR) return "";
    return `<text x="${x}" y="${svgH - 8}" text-anchor="middle" fill="var(--muted)" font-size="10" font-weight="700">${yr}</text>`;
  }).join("");

  target.innerHTML = `
    <svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Timeline de CVEs">
      <rect x="0" y="0" width="${svgW}" height="${svgH}" fill="#fbfcfe" rx="0"/>
      <text x="${svgW / 2}" y="30" text-anchor="middle" fill="var(--ink)" font-size="15" font-weight="900">Timeline de vulnerabilidades por fabricante</text>
      ${rows}
      ${dots}
      ${yearLabels}
    </svg>
  `;
}

// ─── SEARCH (Ctrl+K) ───────────────────────────────────────────────

function wireSearch() {
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!overlay || !input || !results) return;

  const openSearch = () => { overlay.classList.add("open"); input.value = ""; results.innerHTML = ""; input.focus(); };
  const closeSearch = () => { overlay.classList.remove("open"); };

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); overlay.classList.contains("open") ? closeSearch() : openSearch(); }
    if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
  });

  overlay.addEventListener("click", e => { if (e.target === overlay) closeSearch(); });

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ""; return; }

    const items = [];

    // Vendors
    vendors.forEach(v => {
      if (v.name.toLowerCase().includes(q) || v.bestFor.toLowerCase().includes(q)) {
        items.push({ label: v.name, type: "Fabricante", view: "dashboard", target: "vendorStrip" });
      }
    });

    // Spanish vendors
    spanishVendors.forEach(v => {
      if (v.name.toLowerCase().includes(q)) {
        items.push({ label: v.name, type: "España", view: "spanish" });
      }
    });

    // Criteria
    criteria.forEach(c => {
      if (c.label.toLowerCase().includes(q)) {
        items.push({ label: c.label, type: "Criterio", view: "assessment" });
      }
    });

    // Use cases
    useCases.forEach(u => {
      if (u.label.toLowerCase().includes(q)) {
        items.push({ label: u.label, type: "Caso", view: "usecases" });
      }
    });

    // Sections
    Object.entries(sectionMeta).forEach(([id, meta]) => {
      if (meta.title.toLowerCase().includes(q)) {
        items.push({ label: meta.title, type: "Sección", view: id });
      }
    });

    // Protocols
    integrationProtocolItems.forEach(p => {
      if (p.protocol.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q)) {
        items.push({ label: p.protocol, type: "Protocolo", view: "technical", target: "protocolMap" });
      }
    });

    results.innerHTML = items.slice(0, 12).map(it => `
      <div class="search-result-item" data-view="${it.view}" data-target="${it.target || ""}">
        <span>${it.label}</span>
        <span class="search-type">${it.type}</span>
      </div>
    `).join("") || `<div class="search-kbd">Sin resultados</div>`;

    results.querySelectorAll(".search-result-item").forEach(el => {
      el.addEventListener("click", () => {
        closeSearch();
        const viewId = el.dataset.view;
        const targetId = el.dataset.target;
        document.querySelectorAll(".rail-item").forEach(i => i.classList.remove("active"));
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        const rail = document.querySelector(`.rail-item[data-view="${viewId}"]`);
        if (rail) rail.classList.add("active");
        const viewEl = document.getElementById(viewId);
        if (viewEl) viewEl.classList.add("active");
        history.replaceState(null, "", `#${viewId}`);
        state.currentView = viewId;
        persistState();
        updateCommandPanel(viewId);
        if (targetId) setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      });
    });
  });
}

// ─── DARK MODE ──────────────────────────────────────────────────────

function wireDarkMode() {
  const btn = document.getElementById("toggleDark");
  if (!btn) return;
  const saved = localStorage.getItem("ics-dark-mode");
  if (saved === "true") document.documentElement.setAttribute("data-theme", "dark");

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("ics-dark-mode", "false");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("ics-dark-mode", "true");
    }
  });
}

// ─── LANGUAGE TOGGLE ────────────────────────────────────────────────

function wireLangToggle() {
  const btn = document.getElementById("toggleLang");
  const label = document.getElementById("langLabel");
  if (!btn || !label) return;
  label.textContent = currentLang === "es" ? "EN" : "ES";

  btn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("ics-lang", currentLang);
    label.textContent = currentLang === "es" ? "EN" : "ES";
    sectionMeta = getSectionMeta();
    updateCommandPanel();
    // Update nav rail labels
    const navLabels = {
      dashboard: currentLang === "es" ? "Panel" : "Panel",
      profile: currentLang === "es" ? "Cliente" : "Client",
      assessment: currentLang === "es" ? "Scoring" : "Scoring",
      usecases: currentLang === "es" ? "Casos" : "Cases",
      framework: currentLang === "es" ? "Detección" : "Detection",
      evidence: currentLang === "es" ? "Evidencia" : "Evidence",
      capabilities: currentLang === "es" ? "Funciones" : "Functions",
      risks: currentLang === "es" ? "Riesgo" : "Risk",
      technical: currentLang === "es" ? "Técnico" : "Technical",
      deployment: currentLang === "es" ? "Despliegue" : "Deploy",
      innovation: currentLang === "es" ? "Innovación" : "Innovation",
      compare: currentLang === "es" ? "Comparar" : "Compare",
      spanish: currentLang === "es" ? "España" : "Spain"
    };
    document.querySelectorAll(".rail-item[data-view]").forEach(btn => {
      const span = btn.querySelector("span");
      if (span && navLabels[btn.dataset.view]) span.textContent = navLabels[btn.dataset.view];
    });
    // Update command panel buttons
    const prevBtn = document.getElementById("previousSection");
    const nextBtn = document.getElementById("nextSection");
    const linkBtn = document.getElementById("copySectionLink");
    const pdfBtn = document.getElementById("exportCurrentSection");
    if (prevBtn) { const s = prevBtn.querySelector("span"); if (s) s.textContent = t("previous"); }
    if (nextBtn) { const s = nextBtn.querySelector("span"); if (s) s.textContent = t("next"); }
    if (linkBtn) { const s = linkBtn.querySelector("span"); if (s) s.textContent = t("link"); }
    if (pdfBtn) { const s = pdfBtn.querySelector("span"); if (s) s.textContent = t("pdfSection"); }
    // Update kicker and completion labels
    const kicker = document.querySelector(".command-copy .kicker");
    if (kicker) kicker.textContent = t("workRoute");
    const confSpan = document.querySelector(".completion-card > div:first-child > span");
    if (confSpan) confSpan.textContent = t("configuration");
    // Update search placeholder
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.placeholder = t("searchPlaceholder");
    // Re-render vertical filters
    renderVerticalFilters();
    toast(currentLang === "es" ? "Idioma: Español" : "Language: English", "info");
  });
}

// ─── INIT ────────────────────────────────────────────────────────────

function refresh() { renderRanking(); renderQuadrant(); }

function init() {
  restoreState();
  document.getElementById("scenario").value = state.scenario || "balanced";
  wireDarkMode();
  wireLangToggle();
  renderScoringMethodology();
  renderCriteria();
  renderProfile();
  renderUseCases();
  renderRisks();
  renderCveTimeline();
  renderTechnical();
  renderPurdueModel();
  renderDeployment();
  renderInnovation();
  renderCapabilities();
  renderFramework();
  renderEvidence();
  renderVendors();
  renderSpanish();
  renderSpanishMatrix();
  renderProtocolMap();
  renderCompare();
  renderVerticalFilters();
  wireNavigation();
  wireSectionExports();
  wireSearch();
  refresh();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

init();
