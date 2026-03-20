function mostrarIdioma() {
  const idioma = document.getElementById("idioma").value;

  const mensagens = {
    pt: "Olá!",
    en: "Hello!",
    es: "Hola!",
    fr: "Bonjour!",
  };

  const resultado = mensagens[idioma] || "Idioma não reconhecido.";

  document.getElementById("resultado").textContent = resultado;
}
