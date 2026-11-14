// JavaScript do site
// Mantém a rolagem suave e adiciona segurança aos links externos.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
});
