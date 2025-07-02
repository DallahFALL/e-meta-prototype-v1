// Traductions de l’interface
const translations = {
  fr: {
    title: "Plateforme de micro-crédit mobile",
    name: "Nom complet :",
    phone: "Téléphone :",
    product: "Produit Orange vendu :",
    amount: "Montant souhaité :",
    submit: "Soumettre la demande",
    privacy: "Politique de confidentialité"
  },
  en: {
    title: "Mobile Microcredit Platform",
    name: "Full name:",
    phone: "Phone number:",
    product: "Orange product sold:",
    amount: "Requested amount:",
    submit: "Submit request",
    privacy: "Privacy policy"
  },
  es: {
    title: "Plataforma de microcrédito móvil",
    name: "Nombre completo:",
    phone: "Teléfono:",
    product: "Producto de Orange vendido:",
    amount: "Monto solicitado:",
    submit: "Enviar solicitud",
    privacy: "Política de privacidad"
  },
  ar: {
    title: "منصة التمويل الصغير عبر الهاتف",
    name: "الاسم الكامل:",
    phone: "رقم الهاتف:",
    product: "منتج Orange المُباع:",
    amount: "المبلغ المطلوب:",
    submit: "إرسال الطلب",
    privacy: "سياسة الخصوصية"
  }
};

// Gestion du changement de langue
document.getElementById("language-selector").addEventListener("change", (e) => {
  const lang = e.target.value;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
});

// Gestion du formulaire
document.getElementById("meta-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Récupération des données
  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    product: formData.get("product"),
    amount: formData.get("amount")
  };

  // Log des données (à remplacer par un envoi vers Google Sheets ou API)
  console.log("Formulaire soumis :", data);

  alert("Votre demande a été envoyée avec succès !");
  this.reset();
});
