const list = document.getElementById("categories"); // знаходить елумент із ідентифікатором "categories" це ul
const categories = list.querySelectorAll(".item"); // шукає всі елементи з классом "item" в середині lisб тф зберігає  NodeList, що містить усі <li class="item">

console.log(`Numberof categories: ${categories.length}`);
// перебирає категорії за допомогою forEach
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent; //метод querySelector("h2") знаходить перший <h2> всередині category. Властивість textContent отримує текст із цього елемента.
  const elements = category.querySelectorAll("ul li").length; // метод querySelectorAll("ul li") шукає всі <li> всередині вкладеного <ul> категорії. Та підраховую їх кількість

  console.log(`Categori: ${title}`);
  console.log(`Elements: ${elements}`);
});
