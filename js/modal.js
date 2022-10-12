(function () {
  const openModal = document.querySelector('.email_submit');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal_close');

  openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('modal--show');
  });
})();
