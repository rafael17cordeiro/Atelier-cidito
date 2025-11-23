AOS.init();
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  transitionEffect: "fade", // fade, zoom-in-out, slide, circular
  transitionDuration: 500, // em milissegundos
  Toolbar: {
    display: [{ id: "counter", position: "center" }, "zoom", "close"],
  },
});
