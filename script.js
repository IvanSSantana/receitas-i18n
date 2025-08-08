const buttons = document.querySelectorAll('.btn-linguas button');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

function loadLanguage(lang) {
  fetch(`i18n/${lang}.json`)
    .then(response => response.json()) 
    .then(translations => {
      elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) element.textContent = translations[key];
      });
      const img = document.getElementById("imagem");
      img.src = translations["imagem"];

      const ingredientes = document.getElementById("ingredientes-lista");

      localStorage.setItem('linguagem', lang);
    });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('linguagem');
    loadLanguage(lang);
  });
});

const savedLang = localStorage.getItem('linguagem') || 'pt-br';
loadLanguage(savedLang);
