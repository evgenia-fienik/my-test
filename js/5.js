const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", handleChange);
function handleChange(event) {
  event.currentTarget;
  //функція генераціі випадкового кольору
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const randomColor = getRandomHexColor(); //отримуємо випадковий колір
  document.body.style.backgroundColor = randomColor; //змінюємо колір фону сторінки

  console.log("Color change to:", randomColor);
}
