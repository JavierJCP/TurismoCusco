(function () {
  const $form = document.querySelector('#form');
  // const openModal = document.querySelector('.email_submit');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal_close');
  const getName = document.getElementById('name');
  const modal_message = document.getElementById('modal_message');
  var loader = document.querySelector('.loader_container');

  $form.addEventListener('submit', handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    modal_message.innerHTML = `Hola 👋🏼 ${getName.value} gracias por tu visita, muy pronto me comunicaré contigo`;
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      this.reset();
      // alert('ok');
      modal.classList.add('modal--show');
    } else {
      loader.style.visibility = 'hidden';
      loader.style.opacity = 0;
    }
  }

  closeModal.addEventListener('click', () => {
    modal.classList.remove('modal--show');
  });
})();
