(function () {
  window.addEventListener("load", function () {
    const loadTime = (performance.now() / 1000).toFixed(2);
    const footer = document.querySelector("footer");
    footer.textContent = `Страница загружена за ${loadTime} секунд`;
  });
})();
