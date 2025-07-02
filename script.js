// Définitions des traductions
const translations = {
  fr: { /* … comme avant … */ },
  en: { /* … */ },
  es: { /* … */ },
  ar: { /* … */ }
};

// Appliquer la langue choisie
function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][ el.dataset.i18n ];
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const langSel = document.getElementById("language-selector");
  langSel.addEventListener("change", () => applyLang(langSel.value));
  applyLang(langSel.value);

  // Submit
  document.getElementById("decision-form").addEventListener("submit", async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const params = new URLSearchParams();
    for (let [k,v] of data) params.append(k, v);

    try {
      const res = await fetch("VOTRE_APPS_SCRIPT_URL", {
        method: "POST",
        body: params
      });
      const text = await res.text();
      alert(text);
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Erreur d'envoi. Réessaie plus tard.");
    }
  });
});
