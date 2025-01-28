const inputEl = document.querySelector("#controls input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxConteiner = document.querySelector("#boxes");

//додаю слухача подій для кнопок
buttonCreate.addEventListener("click", handlerCreate);
buttonDestroy.addEventListener("click", destroyBoxes);

function handlerCreate(event) {
  const amount = Number(inputEl.value); //перетворюю значення input у число(користувач ввів цифру і ми перетворюємо іі на число Number)
  if (amount >= 1 && amount <= 100) {
    boxConteiner.innerHTML = ""; //очищаю контейнер перед створенням нових елементів
    createBoxes(amount); // викликаю функцію для створення елементів
    inputEl.value = ""; // очищує поле вводу
  } else {
    alert("Please enter a number between 1 and 100"); //попередження якщо число не в дозволених межах
  }

  //функція для створення елементів та додавання іх у контейнер
  function createBoxes(amount) {
    const boxes = []; // масив для тимчасового зберігання створених елементів
    let size = 30; //початковий розмір квадрата
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      boxes.push(box); // додає створені елементи у масив
      size += 10; // збільшує розмір наступного квадрата
    }
    boxConteiner.append(...boxes); //додає всі елементи заодну операцію в контейнер
  }
}
function destroyBoxes() {
  boxConteiner.innerHTML = ""; // очіщую контейнер
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
