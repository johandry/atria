const STORAGE_KEYS = {
  consent: "atria-consent",
  lang: "atria-lang",
  state: "atria-state",
  requests: "atria-requests",
};

const translations = {
  es: {
    languageLabel: "EN",
    heroEyebrow: "Women Care",
    heroTitle: "ATRIA",
    heroCopy:
      "Seguimiento menstrual bilingue, calculo instantaneo y contacto con laboratorios ATRIA desde una sola experiencia privada.",
    sideTitle: "MVP alineado al diseno",
    sideCopy:
      "Las 10 pantallas del boceto viven en una sola SPA: consentimiento, menu, registro de ciclo, resultados, recordatorios, laboratorios, contacto y ayuda.",
    previewCards: [
      {
        title: "Privacidad primero",
        copy: "Consentimiento local, politica visible y experiencia privada por defecto.",
      },
      {
        title: "Valor inmediato",
        copy: "El resultado calcula proximo periodo, ventana fertil y ovulacion al terminar el flujo.",
      },
      {
        title: "Sin friccion",
        copy: "Todo funciona con localStorage y un toggle de idioma dinamico.",
      },
    ],
    metricsTitle: "Lo que ya resuelve este MVP",
    metrics: [
      "Registro del ultimo periodo y duracion del ciclo",
      "Pantalla de resultados con estatus diario del ciclo",
      "Preferencia de recordatorios guardada en el navegador",
      "Listado de laboratorios y contacto rapido",
    ],
    privacy: {
      badge: "Pantalla 01",
      title: "Tu privacidad\nes importante",
      copy:
        "Cuidamos tu informacion y la utilizamos unicamente para brindarte una mejor atencion.",
      primary: "Acepto y continuar",
      secondary: "Ver aviso de privacidad",
      policyTitle: "Aviso breve",
      policyCopy:
        "ATRIA guarda consentimiento, idioma y datos de ciclo solo en este navegador. Las predicciones son estimaciones y no sustituyen valoracion medica.",
    },
    menu: {
      badge: "Pantalla 02",
      greet: "Hola",
      title: "Tu espacio Atria",
      question: "Que deseas hacer hoy?",
      items: [
        "Registrar periodo",
        "Ver calendario",
        "Laboratorios",
        "Asesora",
        "Dudas",
      ],
      helperTitle: "Rapido y privado",
      helperCopy:
        "Tus datos quedan en este dispositivo. Si vuelves, retomamos tu ultimo calculo automaticamente.",
    },
    steps: {
      badge: "Paso",
      step1Title: "Cuando inicio\ntu ultimo periodo?",
      step1Label: "Fecha del ultimo periodo",
      step1Placeholder: "DD / MM / AAAA",
      step2Title: "Cual es la duracion\nde tu ciclo?",
      step3Title: "Cuantos dias dura\ntu periodo?",
      cycleOptions: ["Menos de 24 dias", "24 a 35 dias", "Mas de 35 dias"],
      durationOptions: ["3 a 4 dias", "5 a 6 dias", "7 dias o mas"],
      next: "Continuar",
      back: "Volver",
      finish: "Ver mi calendario",
      requiredDate: "Selecciona la fecha de tu ultimo periodo.",
      requiredCycle: "Selecciona el rango de duracion de tu ciclo.",
      requiredDuration: "Selecciona cuantos dias dura tu periodo.",
    },
    results: {
      badge: "Pantalla 06",
      title: "Tu calendario Atria",
      noDataTitle: "Aun no hay calculo",
      noDataCopy: "Registra tu ultimo periodo para ver fechas clave y estatus del ciclo.",
      nextPeriod: "Proximo periodo",
      fertileWindow: "Dias fertiles",
      ovulation: "Ovulacion aproximada",
      cycleDay: "Hoy estas en el dia",
      reminderCta: "Activar recordatorios",
      menuCta: "Volver al menu",
      disclaimer: "Las fechas son aproximadas y pueden variar segun tu cuerpo.",
      statusLabel: "Estado de hoy",
      fertileTitle: "Alta probabilidad de fertilidad",
      fertileCopy: "Estas dentro de tu ventana fertil estimada.",
      ovulationTitle: "Ovulacion estimada hoy",
      ovulationCopy: "Hoy coincide con tu ovulacion aproximada.",
      periodTitle: "Tu periodo podria estar activo",
      periodCopy: "Estas en los dias iniciales estimados del ciclo.",
      upcomingTitle: "Tu periodo se acerca",
      upcomingCopy: "Tu proximo periodo esta estimado en pocos dias.",
      regularTitle: "Ciclo en seguimiento",
      regularCopy: "Tu calendario esta actualizado con la informacion guardada.",
      promptTitle: "Siguiente accion sugerida",
      fertilePrompt: "Si buscas embarazo, este es un buen momento para monitorear tu fertilidad.",
      periodPrompt: "Prepara recordatorios o productos de cuidado para tu siguiente periodo.",
      labPrompt: "Si necesitas confirmar resultados o dudas, conecta con laboratorios ATRIA.",
    },
    reminders: {
      badge: "Pantalla 07",
      title: "Deseas activar\nrecordatorios?",
      yes: "Si, activar",
      no: "No, gracias",
      copy:
        "Guardaremos tu preferencia y, si tu navegador lo permite, podremos mostrar una notificacion de prueba ahora mismo.",
      enabled: "Recordatorios activados en este navegador.",
      disabled: "Recordatorios desactivados.",
      unsupported: "Tu navegador no permite notificaciones, pero la preferencia quedo guardada.",
      preview: "Tu periodo llegara en 3 dias",
    },
    labs: {
      badge: "Pantalla 08",
      title: "Laboratorios Atria",
      copy: "Servicios rapidos para las consultas mas frecuentes.",
      items: [
        "Prueba de embarazo",
        "Hemoglobina",
        "Tipo de sangre (RH)",
        "Agendar estudio",
      ],
      cta: "Solicitar informacion",
    },
    contact: {
      badge: "Pantalla 09",
      title: "Estamos para ayudarte",
      copy: "Dejanos tus datos y te contactaremos con el contexto de tu solicitud.",
      name: "Nombre",
      age: "Edad",
      city: "Ciudad",
      reason: "Motivo de tu consulta",
      submit: "Enviar solicitud",
      successTitle: "Solicitud guardada",
      successCopy:
        "Tu informacion se guardo localmente para este MVP. Conecta este formulario a Supabase o email para envio real.",
      privacy: "MVP: este formulario se guarda solo en tu navegador.",
    },
    help: {
      badge: "Pantalla 10",
      title: "En que podemos ayudarte?",
      copy: "Selecciona una opcion para precargar tu solicitud o hablar con asesoria.",
      items: [
        "Retraso menstrual",
        "Dolor o irregularidad",
        "Anticonceptivos",
        "Hablar con asesora",
      ],
      cta: "Abrir formulario",
    },
    general: {
      backToMenu: "Menu",
      openResults: "Ver resultados",
      appFootnote:
        "Predicciones orientativas. No sustituyen evaluacion medica ni diagnostico.",
      lastSaved: "Guardado automaticamente en este navegador.",
    },
  },
  en: {
    languageLabel: "ES",
    heroEyebrow: "Women Care",
    heroTitle: "ATRIA",
    heroCopy:
      "Bilingual menstrual tracking, instant cycle insight, and ATRIA lab connections in one privacy-first experience.",
    sideTitle: "MVP aligned to the design",
    sideCopy:
      "The 10 reference screens live in one SPA: consent, menu, cycle logging, results, reminders, labs, contact, and help.",
    previewCards: [
      {
        title: "Privacy first",
        copy: "Local consent, visible policy, and a private-by-default experience.",
      },
      {
        title: "Instant value",
        copy: "Results calculate next period, fertile window, and ovulation as soon as the flow ends.",
      },
      {
        title: "Zero friction",
        copy: "Everything runs with localStorage and one dynamic language toggle.",
      },
    ],
    metricsTitle: "What this MVP already covers",
    metrics: [
      "Last period tracking and cycle length capture",
      "Results screen with daily cycle status",
      "Reminder preference stored in the browser",
      "Lab list and quick contact flow",
    ],
    privacy: {
      badge: "Screen 01",
      title: "Your privacy\nmatters",
      copy:
        "We care for your information and only use it to give you better support.",
      primary: "Accept and continue",
      secondary: "View privacy notice",
      policyTitle: "Short notice",
      policyCopy:
        "ATRIA stores consent, language, and cycle data only in this browser. Predictions are estimates and do not replace medical advice.",
    },
    menu: {
      badge: "Screen 02",
      greet: "Hello",
      title: "Your Atria space",
      question: "What would you like to do today?",
      items: [
        "Log period",
        "View calendar",
        "Labs",
        "Advisor",
        "Help",
      ],
      helperTitle: "Fast and private",
      helperCopy:
        "Your data stays on this device. When you return, we restore your latest calculation automatically.",
    },
    steps: {
      badge: "Step",
      step1Title: "When did\nyour last period start?",
      step1Label: "Last period date",
      step1Placeholder: "MM / DD / YYYY",
      step2Title: "What is your\ncycle length?",
      step3Title: "How many days does\nyour period last?",
      cycleOptions: ["Under 24 days", "24 to 35 days", "Over 35 days"],
      durationOptions: ["3 to 4 days", "5 to 6 days", "7 days or more"],
      next: "Continue",
      back: "Back",
      finish: "See my calendar",
      requiredDate: "Choose the date of your last period.",
      requiredCycle: "Choose your cycle length range.",
      requiredDuration: "Choose how many days your period lasts.",
    },
    results: {
      badge: "Screen 06",
      title: "Your Atria calendar",
      noDataTitle: "No calculation yet",
      noDataCopy: "Log your last period to see key dates and your cycle status.",
      nextPeriod: "Next period",
      fertileWindow: "Fertile window",
      ovulation: "Approximate ovulation",
      cycleDay: "Today you are on day",
      reminderCta: "Enable reminders",
      menuCta: "Back to menu",
      disclaimer: "Dates are estimates and may vary based on your body.",
      statusLabel: "Today",
      fertileTitle: "High fertility probability",
      fertileCopy: "You are inside your estimated fertile window.",
      ovulationTitle: "Estimated ovulation today",
      ovulationCopy: "Today matches your approximate ovulation date.",
      periodTitle: "Your period may be active",
      periodCopy: "You are within the estimated starting days of this cycle.",
      upcomingTitle: "Your period is approaching",
      upcomingCopy: "Your next period is expected in the next few days.",
      regularTitle: "Cycle on track",
      regularCopy: "Your calendar is up to date with the information you saved.",
      promptTitle: "Suggested next step",
      fertilePrompt: "If you are trying to conceive, this is a strong moment to monitor fertility.",
      periodPrompt: "Prepare reminders or care products for your upcoming period.",
      labPrompt: "If you need confirmation or support, connect with ATRIA labs.",
    },
    reminders: {
      badge: "Screen 07",
      title: "Would you like\nreminders?",
      yes: "Yes, enable",
      no: "No, thanks",
      copy:
        "We will store your preference and, if your browser allows it, we can show a test notification right away.",
      enabled: "Reminders enabled in this browser.",
      disabled: "Reminders disabled.",
      unsupported: "Your browser does not support notifications, but the preference was saved.",
      preview: "Your period is expected in 3 days",
    },
    labs: {
      badge: "Screen 08",
      title: "Atria labs",
      copy: "Fast services for the most common needs.",
      items: [
        "Pregnancy test",
        "Hemoglobin",
        "Blood type (RH)",
        "Schedule study",
      ],
      cta: "Request information",
    },
    contact: {
      badge: "Screen 09",
      title: "We are here to help",
      copy: "Leave your details and we will follow up with the context of your request.",
      name: "Name",
      age: "Age",
      city: "City",
      reason: "Reason for your request",
      submit: "Send request",
      successTitle: "Request saved",
      successCopy:
        "Your information was stored locally for this MVP. Connect this form to Supabase or email for real delivery.",
      privacy: "MVP: this form is stored only in your browser.",
    },
    help: {
      badge: "Screen 10",
      title: "How can we help you?",
      copy: "Choose an option to prefill your request or talk to an advisor.",
      items: [
        "Late period",
        "Pain or irregularity",
        "Contraceptives",
        "Talk to advisor",
      ],
      cta: "Open form",
    },
    general: {
      backToMenu: "Menu",
      openResults: "Open results",
      appFootnote:
        "Predictions are directional. They do not replace medical evaluation or diagnosis.",
      lastSaved: "Automatically saved in this browser.",
    },
  },
};

const cycleOptionValues = [22, 28, 38];
const durationOptionValues = [4, 5, 7];
const menuDestinations = ["step1", "results", "labs", "contact", "help"];
const screenOrder = ["privacy", "menu", "step1", "step2", "step3", "results", "reminders", "labs", "contact", "help"];

const baseState = {
  lang: load(STORAGE_KEYS.lang, "es"),
  consent: load(STORAGE_KEYS.consent, false),
  currentScreen: "privacy",
  showPolicy: false,
  lastPeriodDate: "",
  cycleLength: 28,
  cycleOptionIndex: 1,
  periodDuration: 5,
  durationOptionIndex: 1,
  remindersEnabled: false,
  reminderMessage: "",
  contact: {
    name: "",
    age: "",
    city: "",
    reason: "",
  },
  lastSubmissionSaved: false,
  errorMessage: "",
};

const persistedState = load(STORAGE_KEYS.state, {});
const state = {
  ...baseState,
  ...persistedState,
  lang: load(STORAGE_KEYS.lang, persistedState.lang || "es"),
  consent: load(STORAGE_KEYS.consent, persistedState.consent || false),
  contact: {
    ...baseState.contact,
    ...(persistedState.contact || {}),
  },
};

if (state.consent && state.currentScreen === "privacy") {
  state.currentScreen = "menu";
}

const app = document.getElementById("app");

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.lang, JSON.stringify(state.lang));
  localStorage.setItem(STORAGE_KEYS.consent, JSON.stringify(state.consent));
  localStorage.setItem(
    STORAGE_KEYS.state,
    JSON.stringify({
      lang: state.lang,
      consent: state.consent,
      currentScreen: state.currentScreen,
      lastPeriodDate: state.lastPeriodDate,
      cycleLength: state.cycleLength,
      cycleOptionIndex: state.cycleOptionIndex,
      periodDuration: state.periodDuration,
      durationOptionIndex: state.durationOptionIndex,
      remindersEnabled: state.remindersEnabled,
      reminderMessage: state.reminderMessage,
      contact: state.contact,
      lastSubmissionSaved: state.lastSubmissionSaved,
    })
  );
}

function parseLocalDate(value) {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function diffDays(later, earlier) {
  return Math.floor((startOfDay(later) - startOfDay(earlier)) / 86400000);
}

function getCycleInsights() {
  const lastPeriod = parseLocalDate(state.lastPeriodDate);

  if (!lastPeriod || !state.cycleLength || !state.periodDuration) {
    return null;
  }

  const today = startOfDay(new Date());
  const daysSinceLastPeriod = diffDays(today, lastPeriod);
  const normalizedDays = Math.max(daysSinceLastPeriod, 0);
  const cycleDay = (normalizedDays % state.cycleLength) + 1;

  let nextPeriod = addDays(lastPeriod, state.cycleLength);
  while (startOfDay(nextPeriod) <= today) {
    nextPeriod = addDays(nextPeriod, state.cycleLength);
  }

  const ovulation = addDays(nextPeriod, -14);
  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = addDays(ovulation, 1);
  const daysUntilNextPeriod = diffDays(nextPeriod, today);

  const status = getStatus(today, cycleDay, daysUntilNextPeriod, ovulation, fertileStart, fertileEnd);

  return {
    cycleDay,
    nextPeriod,
    ovulation,
    fertileStart,
    fertileEnd,
    daysUntilNextPeriod,
    status,
  };
}

function getStatus(today, cycleDay, daysUntilNextPeriod, ovulation, fertileStart, fertileEnd) {
  const t = translations[state.lang].results;
  const dayValue = startOfDay(today).getTime();
  const fertileStartValue = startOfDay(fertileStart).getTime();
  const fertileEndValue = startOfDay(fertileEnd).getTime();
  const ovulationValue = startOfDay(ovulation).getTime();

  if (dayValue === ovulationValue) {
    return {
      kind: "fertile",
      title: t.ovulationTitle,
      copy: t.ovulationCopy,
      prompt: t.fertilePrompt,
    };
  }

  if (dayValue >= fertileStartValue && dayValue <= fertileEndValue) {
    return {
      kind: "fertile",
      title: t.fertileTitle,
      copy: t.fertileCopy,
      prompt: t.fertilePrompt,
    };
  }

  if (cycleDay <= state.periodDuration) {
    return {
      kind: "period",
      title: t.periodTitle,
      copy: t.periodCopy,
      prompt: t.periodPrompt,
    };
  }

  if (daysUntilNextPeriod <= 3) {
    return {
      kind: "warning",
      title: t.upcomingTitle,
      copy: t.upcomingCopy,
      prompt: t.periodPrompt,
    };
  }

  return {
    kind: "regular",
    title: t.regularTitle,
    copy: t.regularCopy,
    prompt: t.labPrompt,
  };
}

function openScreen(screen) {
  state.currentScreen = screen;
  state.errorMessage = "";
  persistState();
  render();
}

function nextFromStep(step) {
  if (step === "step1" && !state.lastPeriodDate) {
    state.errorMessage = translations[state.lang].steps.requiredDate;
    render();
    return;
  }

  if (step === "step2" && Number.isNaN(Number(state.cycleLength))) {
    state.errorMessage = translations[state.lang].steps.requiredCycle;
    render();
    return;
  }

  if (step === "step3" && Number.isNaN(Number(state.periodDuration))) {
    state.errorMessage = translations[state.lang].steps.requiredDuration;
    render();
    return;
  }

  const nextMap = {
    step1: "step2",
    step2: "step3",
    step3: "results",
  };

  openScreen(nextMap[step]);
}

function translate(text) {
  return text.replace(/\n/g, "<br />");
}

function getStepDots(active) {
  return [1, 2, 3]
    .map(
      (index) => `<span class="step-dot ${index === active ? "is-active" : ""}"></span>`
    )
    .join("");
}

function getScreenBadge(label, number) {
  return `
    <div class="screen-badge">
      <span class="screen-badge__number">${number}</span>
      <span>${label}</span>
    </div>
  `;
}

function getStepBadgeLabel(stepNumber) {
  const t = translations[state.lang].steps;
  return `${t.badge} ${stepNumber} ${state.lang === "es" ? "de" : "of"} 3`;
}

function getHeader(showBack = false, backTarget = "menu") {
  const t = translations[state.lang];

  return `
    <div class="screen-topbar">
      <div class="brand-mark">
        <strong>ATRIA</strong>
        <span>${t.heroEyebrow}</span>
      </div>
      <div class="quick-actions">
        ${showBack ? `<button class="icon-button" data-open="${backTarget}" aria-label="${t.steps.back}">&#8592;</button>` : ""}
        <button class="lang-toggle" data-action="toggle-language">${t.languageLabel}</button>
      </div>
    </div>
  `;
}

function renderPrivacy() {
  const t = translations[state.lang].privacy;

  return `
    ${getHeader(false)}
    ${getScreenBadge(t.badge, "01")}
    <div class="hero-icon">&#128274;</div>
    <h2>${translate(t.title)}</h2>
    <p class="screen-copy">${t.copy}</p>
    <div class="privacy-actions">
      <button class="cta-button" data-action="accept-consent">1&nbsp;&nbsp;${t.primary}</button>
      <button class="secondary-button" data-action="toggle-policy">2&nbsp;&nbsp;${t.secondary}</button>
    </div>
    <div class="policy-card ${state.showPolicy ? "" : "hidden"}">
      <strong>${t.policyTitle}</strong>
      <p class="policy-copy">${t.policyCopy}</p>
    </div>
  `;
}

function renderMenu() {
  const t = translations[state.lang].menu;

  return `
    ${getHeader(false)}
    ${getScreenBadge(t.badge, "02")}
    <p class="screen-title">${t.greet}</p>
    <h2>${t.title}</h2>
    <p class="screen-copy">${t.question}</p>
    <div class="menu-list">
      ${t.items
        .map(
          (item, index) => `
            <button class="menu-link" data-open="${menuDestinations[index]}">
              <span class="menu-link__label">
                <span class="menu-link__index">${index + 1}</span>
                <span>${item}</span>
              </span>
              <span class="menu-link__chevron">&#8250;</span>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="helper-card">
      <strong>${t.helperTitle}</strong>
      <p>${t.helperCopy}</p>
    </div>
  `;
}

function renderStep1() {
  const t = translations[state.lang].steps;

  return `
    ${getHeader(true)}
    ${getScreenBadge(getStepBadgeLabel(1), "03")}
    <div class="step-dots">${getStepDots(1)}</div>
    <div class="hero-icon">&#128197;</div>
    <h2>${translate(t.step1Title)}</h2>
    <div class="field">
      <label for="last-period-date">${t.step1Label}</label>
      <input id="last-period-date" name="lastPeriodDate" type="date" value="${state.lastPeriodDate}" />
    </div>
    ${state.errorMessage ? `<p class="field-note">${state.errorMessage}</p>` : ""}
    <div class="step-actions">
      <button class="cta-button" data-action="next-step" data-step="step1">${t.next}</button>
      <button class="secondary-button" data-open="menu">${t.back}</button>
    </div>
  `;
}

function renderStep2() {
  const t = translations[state.lang].steps;

  return `
    ${getHeader(true, "step1")}
    ${getScreenBadge(getStepBadgeLabel(2), "04")}
    <div class="step-dots">${getStepDots(2)}</div>
    <div class="hero-icon">&#8635;</div>
    <h2>${translate(t.step2Title)}</h2>
    <div class="choice-list">
      ${t.cycleOptions
        .map(
          (label, index) => `
            <button class="option-button ${state.cycleOptionIndex === index ? "is-selected" : ""}" data-action="select-cycle" data-index="${index}">
              <span class="option-button__label">
                <span class="option-index">${index + 1}</span>
                <span>${label}</span>
              </span>
              <span class="option-button__meta">${cycleOptionValues[index]}</span>
            </button>
          `
        )
        .join("")}
    </div>
    ${state.errorMessage ? `<p class="field-note">${state.errorMessage}</p>` : ""}
    <div class="step-actions">
      <button class="cta-button" data-action="next-step" data-step="step2">${t.next}</button>
      <button class="secondary-button" data-open="step1">${t.back}</button>
    </div>
  `;
}

function renderStep3() {
  const t = translations[state.lang].steps;

  return `
    ${getHeader(true, "step2")}
    ${getScreenBadge(getStepBadgeLabel(3), "05")}
    <div class="step-dots">${getStepDots(3)}</div>
    <div class="hero-icon">&#128167;</div>
    <h2>${translate(t.step3Title)}</h2>
    <div class="choice-list">
      ${t.durationOptions
        .map(
          (label, index) => `
            <button class="option-button ${state.durationOptionIndex === index ? "is-selected" : ""}" data-action="select-duration" data-index="${index}">
              <span class="option-button__label">
                <span class="option-index">${index + 1}</span>
                <span>${label}</span>
              </span>
              <span class="option-button__meta">${durationOptionValues[index]}</span>
            </button>
          `
        )
        .join("")}
    </div>
    ${state.errorMessage ? `<p class="field-note">${state.errorMessage}</p>` : ""}
    <div class="step-actions">
      <button class="cta-button" data-action="next-step" data-step="step3">${t.finish}</button>
      <button class="secondary-button" data-open="step2">${t.back}</button>
    </div>
  `;
}

function renderResults() {
  const t = translations[state.lang].results;
  const insights = getCycleInsights();

  if (!insights) {
    return `
      ${getHeader(true)}
      ${getScreenBadge(t.badge, "06")}
      <div class="results-panel">
        <div class="result-icon">&#10003;</div>
        <h2 class="results-title">${t.noDataTitle}</h2>
        <p class="screen-copy">${t.noDataCopy}</p>
        <div class="result-actions">
          <button class="cta-button" data-open="step1">${translations[state.lang].menu.items[0]}</button>
          <button class="secondary-button" data-open="menu">${t.menuCta}</button>
        </div>
      </div>
    `;
  }

  const { nextPeriod, ovulation, fertileStart, fertileEnd, cycleDay, status } = insights;
  const statusClass = status.kind === "regular" ? "" : `is-${status.kind}`;

  return `
    ${getHeader(true)}
    ${getScreenBadge(t.badge, "06")}
    <div class="results-panel">
      <div class="result-icon">&#10003;</div>
      <h2 class="results-title">${t.title}</h2>
      <div class="status-banner ${statusClass}">
        <div class="status-label">${t.statusLabel}</div>
        <p class="status-copy"><strong>${status.title}</strong><br />${status.copy}</p>
      </div>
      <div class="metric-grid">
        <div class="metric-card">
          <strong>${t.nextPeriod}</strong>
          <span>${formatDate(nextPeriod, state.lang)}</span>
        </div>
        <div class="metric-card">
          <strong>${t.fertileWindow}</strong>
          <span>${formatDate(fertileStart, state.lang)} - ${formatDate(fertileEnd, state.lang)}</span>
        </div>
        <div class="metric-card">
          <strong>${t.ovulation}</strong>
          <span>${formatDate(ovulation, state.lang)}</span>
        </div>
      </div>
      <div class="summary-card">
        <ul class="summary-list">
          <li class="summary-item">
            <strong>${t.cycleDay}</strong>
            <span>${cycleDay}</span>
          </li>
          <li class="summary-item">
            <strong>${t.promptTitle}</strong>
            <span>${status.prompt}</span>
          </li>
        </ul>
      </div>
      <p class="legal-note">${t.disclaimer}</p>
      <div class="result-actions">
        <button class="cta-button" data-open="reminders">1&nbsp;&nbsp;${t.reminderCta}</button>
        <button class="secondary-button" data-open="menu">2&nbsp;&nbsp;${t.menuCta}</button>
      </div>
    </div>
  `;
}

function renderReminders() {
  const t = translations[state.lang].reminders;
  const message = state.reminderMessage
    ? `<div class="success-card"><strong>${state.reminderMessage}</strong><p>${t.copy}</p></div>`
    : `<div class="tips-card"><strong>${t.preview}</strong><p>${t.copy}</p></div>`;

  return `
    ${getHeader(true, "results")}
    ${getScreenBadge(t.badge, "07")}
    <div class="hero-icon">&#128276;</div>
    <h2>${translate(t.title)}</h2>
    <div class="choice-list">
      <button class="option-button ${state.remindersEnabled ? "is-selected" : ""}" data-action="set-reminders" data-value="true">
        <span class="option-button__label">
          <span class="option-index">1</span>
          <span>${t.yes}</span>
        </span>
      </button>
      <button class="option-button ${!state.remindersEnabled ? "is-selected" : ""}" data-action="set-reminders" data-value="false">
        <span class="option-button__label">
          <span class="option-index">2</span>
          <span>${t.no}</span>
        </span>
      </button>
    </div>
    ${message}
    <div class="screen-bottombar">
      <button class="cta-button" data-open="results">${translations[state.lang].general.openResults}</button>
      <button class="secondary-button" data-open="menu">${translations[state.lang].general.backToMenu}</button>
    </div>
  `;
}

function renderLabs() {
  const t = translations[state.lang].labs;

  return `
    ${getHeader(true)}
    ${getScreenBadge(t.badge, "08")}
    <div class="hero-icon">&#129514;</div>
    <h2>${t.title}</h2>
    <p class="screen-copy">${t.copy}</p>
    <div class="labs-list">
      ${t.items
        .map(
          (item, index) => `
            <button class="list-button" data-action="prefill-reason" data-reason="${item}">
              <span class="list-button__label">
                <span class="list-index">${index + 1}</span>
                <span>${item}</span>
              </span>
              <span class="list-button__meta">&#8250;</span>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="card-actions">
      <button class="cta-button" data-open="contact">${t.cta}</button>
      <button class="secondary-button" data-open="menu">${translations[state.lang].general.backToMenu}</button>
    </div>
  `;
}

function renderContact() {
  const t = translations[state.lang].contact;
  const successCard = state.lastSubmissionSaved
    ? `
      <div class="success-card">
        <strong>${t.successTitle}</strong>
        <p>${t.successCopy}</p>
      </div>
    `
    : "";

  return `
    ${getHeader(true)}
    ${getScreenBadge(t.badge, "09")}
    <div class="hero-icon">&#9993;</div>
    <h2>${t.title}</h2>
    <p class="screen-copy">${t.copy}</p>
    ${successCard}
    <form class="form-layout" id="contact-form">
      <div class="form-field">
        <label for="contact-name">${t.name}</label>
        <input id="contact-name" name="name" type="text" value="${escapeHtml(state.contact.name)}" required />
      </div>
      <div class="form-field">
        <label for="contact-age">${t.age}</label>
        <input id="contact-age" name="age" type="number" min="10" max="99" value="${escapeHtml(state.contact.age)}" required />
      </div>
      <div class="form-field">
        <label for="contact-city">${t.city}</label>
        <input id="contact-city" name="city" type="text" value="${escapeHtml(state.contact.city)}" required />
      </div>
      <div class="form-field">
        <label for="contact-reason">${t.reason}</label>
        <textarea id="contact-reason" name="reason" required>${escapeHtml(state.contact.reason)}</textarea>
      </div>
      <p class="field-note">${t.privacy}</p>
      <button class="submit-button" type="submit">${t.submit}</button>
    </form>
  `;
}

function renderHelp() {
  const t = translations[state.lang].help;

  return `
    ${getHeader(true)}
    ${getScreenBadge(t.badge, "10")}
    <div class="hero-icon">?</div>
    <h2>${t.title}</h2>
    <p class="screen-copy">${t.copy}</p>
    <div class="help-grid">
      ${t.items
        .map(
          (item, index) => `
            <button class="help-link option-button" data-action="prefill-reason" data-reason="${item}">
              <span class="help-link__label">
                <span class="help-index">${index + 1}</span>
                <span>${item}</span>
              </span>
              <span class="help-link__meta">&#8250;</span>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="card-actions">
      <button class="cta-button" data-open="contact">${t.cta}</button>
      <button class="secondary-button" data-open="menu">${translations[state.lang].general.backToMenu}</button>
    </div>
  `;
}

function renderPhoneScreen() {
  const screenMap = {
    privacy: renderPrivacy,
    menu: renderMenu,
    step1: renderStep1,
    step2: renderStep2,
    step3: renderStep3,
    results: renderResults,
    reminders: renderReminders,
    labs: renderLabs,
    contact: renderContact,
    help: renderHelp,
  };

  const renderFn = screenMap[state.currentScreen] || renderMenu;
  return renderFn();
}

function render() {
  document.documentElement.lang = state.lang;
  app.innerHTML = `
    <div class="app-shell">
      <section class="layout">
        <div class="phone-frame">
          <div class="phone-screen">
            ${renderPhoneScreen()}
          </div>
        </div>
      </section>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) {
    return;
  }

  const action = target.dataset.action;
  const open = target.dataset.open;

  if (open) {
    if (open === "results" && !state.lastPeriodDate) {
      openScreen("step1");
      return;
    }

    openScreen(open);
    return;
  }

  if (!action) {
    return;
  }

  if (action === "toggle-language") {
    state.lang = state.lang === "es" ? "en" : "es";
    persistState();
    render();
    return;
  }

  if (action === "toggle-policy") {
    state.showPolicy = !state.showPolicy;
    render();
    return;
  }

  if (action === "accept-consent") {
    state.consent = true;
    state.currentScreen = "menu";
    persistState();
    render();
    return;
  }

  if (action === "next-step") {
    nextFromStep(target.dataset.step);
    return;
  }

  if (action === "select-cycle") {
    const index = Number(target.dataset.index);
    state.cycleOptionIndex = index;
    state.cycleLength = cycleOptionValues[index];
    state.errorMessage = "";
    persistState();
    render();
    return;
  }

  if (action === "select-duration") {
    const index = Number(target.dataset.index);
    state.durationOptionIndex = index;
    state.periodDuration = durationOptionValues[index];
    state.errorMessage = "";
    persistState();
    render();
    return;
  }

  if (action === "set-reminders") {
    const value = target.dataset.value === "true";
    state.remindersEnabled = value;

    if (!value) {
      state.reminderMessage = translations[state.lang].reminders.disabled;
      persistState();
      render();
      return;
    }

    if (!("Notification" in window)) {
      state.reminderMessage = translations[state.lang].reminders.unsupported;
      persistState();
      render();
      return;
    }

    if (Notification.permission === "granted") {
      new Notification(translations[state.lang].reminders.preview);
      state.reminderMessage = translations[state.lang].reminders.enabled;
      persistState();
      render();
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification(translations[state.lang].reminders.preview);
      state.reminderMessage = translations[state.lang].reminders.enabled;
    } else {
      state.reminderMessage = translations[state.lang].reminders.unsupported;
    }

    persistState();
    render();
    return;
  }

  if (action === "prefill-reason") {
    state.contact.reason = target.dataset.reason || state.contact.reason;
    state.lastSubmissionSaved = false;
    persistState();
    openScreen("contact");
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;

  if (target.name === "lastPeriodDate") {
    state.lastPeriodDate = target.value;
    state.errorMessage = "";
    persistState();
    return;
  }

  if (["name", "age", "city", "reason"].includes(target.name)) {
    state.contact = {
      ...state.contact,
      [target.name]: target.value,
    };
    state.lastSubmissionSaved = false;
    persistState();
  }
});

app.addEventListener("submit", (event) => {
  if (event.target.id !== "contact-form") {
    return;
  }

  event.preventDefault();
  const formData = new FormData(event.target);
  const request = Object.fromEntries(formData.entries());

  state.contact = {
    name: request.name || "",
    age: request.age || "",
    city: request.city || "",
    reason: request.reason || "",
  };
  state.lastSubmissionSaved = true;

  const requests = load(STORAGE_KEYS.requests, []);
  requests.push({
    ...state.contact,
    submittedAt: new Date().toISOString(),
    lang: state.lang,
  });
  localStorage.setItem(STORAGE_KEYS.requests, JSON.stringify(requests));
  persistState();
  render();
});

render();