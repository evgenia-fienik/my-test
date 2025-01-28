const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", hendleSubmit);
function hendleSubmit(event) {
  event.preventDefault(); // запобігає перезавантаженню сторінки
  const elements = event.currentTarget.elements; //отримуємо доступ до елементів форми

  const email = elements.email.value.trim(); //trim() видаляє зайві пробіли
  const password = elements.password.value.trim();

  // перевірка на заповненність полів
  if (!email || !password) {
    alert("All form fields must be filled in");
    return; // при порожніх полях форма не відправляється
  }

  //створюємо обєктшз введеними даними
  const userInfo = {
    email,
    password,
  };
  console.log(userInfo);
  formEl.reset(); //очіщує поля
}
