(async function () {
  try {
    const request = await fetch('https://reqres.in/api/users');
    if (request.status === 200) {
      const data = await request.json();

      let personal = '';
      data.data.forEach((user) => {
        personal += `
        <div>
          <div class='personal'>
            <img src="${user.avatar}" alt="" class='personal_img'/>
            <p class= 'personal_name'>${user.first_name} ${user.last_name}</p>
          </div>
          
        </div>
          
          `;
      });
      document.querySelector('.trabajadores').innerHTML = personal;
    }
  } catch (error) {
    console.error(error.message);
  }
})();
