(function () {
  const ofertasTitle = [...document.querySelectorAll('.ofertas_title')];
  ofertasTitle.forEach((oferta) => {
    oferta.addEventListener('click', () => {
      let height = 0;
      let opacity = 0;
      let description = oferta.nextElementSibling;

      const rotar = oferta.children[0];
      rotar.classList.toggle('questions_arrow--rotate');

      if (description.clientHeight === 0) {
        height = description.scrollHeight;
        opacity = 1;
      }

      description.style.height = `${height}px`;
      description.style.opacity = `${opacity}`;
    });
  });
})();
