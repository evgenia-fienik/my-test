//1 завлання

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// // quantity — кількість замовлених дроїдів
// // pricePerDroid — ціна одного дроїда
// // customerCredits — сума коштів на рахунку клієнта

// // Додай перевірку, чи зможе клієнт оплатити замовлення:
// // якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// // в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// 2 завдання

// function formatMessage(message, maxLength) {
//   if (message.Length <= maxLength) {
//     return message;
//   } else {
//     return message.substring(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// 3 завдання

// function checkForSpam(message) {
//   const messageLowerCase = message.toLowerCase();
//   return messageLowerCase.includes("spam") || messageLowerCase.includes("sale");
// }

// function checkForSpam(message) {
//   return (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   );
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// 4 завдання

// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       `Shipping to ${country} will cost 100 credits`;
//     case "Chile":
//       return `Shipping to ${country} will cost 250 credits`;
//     case "Australia":
//       return `Shipping to ${country} will cost 170 credits`;
//     case "Jamaica":
//       return `Shipping to ${country} will cost 102 credits`;
//     default:
//       return `Sorry, there is no delivery to your country`;
//   }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// 5 завдання

// function printInfo(names, phones) {
//   const arrNames = names.split(",");
//   const arrPhones = phones.split(",");
//   for (let i = 0; i < arrNames.length; i += 1)
//     console.log(`${arrNames[i]} - ${arrPhones[i]}`);
// }
// printInfo("1,2,3", "a,b,c");

// 6 завдання

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// 7 завдання

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = [...firstArray, ...secondArray];
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// 8 завдання

// function filterArray(numbers, value) {
//   const numbersArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       numbersArr.push(numbers[i]);
//     }
//   }
//   return numbersArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// 9 завдання

// function sumArray(numbers) {
//   let totalSum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     totalSum += numbers[i];
//   }
//   return totalSum;
// }

// console.log(sumArray([1, 2, 3, 4]));

// 10 завдання

// const account = {
//   balanse: 0,
//   transaction: [],
//   //приймвє суму та тип транзакціЇ
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transaction.length + 1, // зв"язуємо фйді на довжину масиву транзакціЇб тому що воназавжди буде збільшуватись і з масиву ніколи нічого не видалеться
//     };
//   },

//   deposit(amount) {
//     amount = Number(amount);
//     if (isNaN(amount)) {
//       return; //виходимо з ф-іі
//     }

//     if (amount <= 0) {
//       return; //виходимо з ф-іі
//     }

//     this.balanse += amount; //додаємо гроші до балансу

//     const transaction = this.createTransaction(
//       amount,
//       this.transaction.deposit //створює об"єкт транзакціЇ
//     );
//     this.transaction.push(transaction);
//   },

//   withdraw(amount) {
//     amount = Number(amount);
//     if (isNaN(amount)) {
//       return; //виходимо з ф-іі
//     }

//     if (amount <= 0) {
//       return; //виходимо з ф-іі
//     }

//     if (amount > this.balanse) {
//       console.error("недостатньо коштів");
//       return;
//     }

//     this.balanse -= amount; //знімаємо гроші з балансу

//     const transaction = this.createTransaction(
//       amount,
//       this.transaction.withdraw //створює об"єкт транзакціЇ
//     );
//     this.transaction.push(transaction);
//   },

//   getBalance() {
//     return this.balanse;
//   },
//   getTransactionDetailes(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//     //return this.transactions[id -1];
//   },

//   getTrasactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(100);
// account.deposit(500);

// account.withdraw(200);
// account.withdraw(300);

// console.log(account);

// 11 завдання

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   for (let product in products) {
//     total += products[product];
//   }
//   return total <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

// 12 завдання

// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   let countDay = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//     countDay++;

//     // console.log(totalCalories);
//     // console.log(countDay);
//   }
//   // return countDay === 0 ? 0 : totalCalories / countDay;
//   if (countDay === 0) {
//     return 0; // Якщо днів немає, повертаємо 0
//   } else {
//     return totalCalories / countDay; // Інакше повертаємо середнє значення
//   }
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// 13 завдання

// const profile = {
//   username: "Jacob",
//   playTime: 300,

//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// 14 завдання

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// 15 завдання

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) =>
//     useReducer.friends.includes(user.friends === friendName)
//   );

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// 16 завдання

// const sortByDescendingFriendCount = (users) =>
//   users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// //

// 17 завдання

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// const countUniqueValues = (array) => {
//   return array.filter(
//     (element, index, array) => array.indexOf(element) === index
//   ).length;
// // };
// const findObjectByKey = (objects, key, value) => {
//   return objects.find((object) => object[key] === value);
// };

// const data = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// console.log(findObjectByKey(data, "name", "Bob")); // { id: 2, name: "Bob" }
// console.log(findObjectByKey(data, "id", 3)); // { id: 3, name: "Charlie" }

1;

// const groupByProperty = (objects, property) => {
//   return objects.reduce((acc, object) => {
//     const key = object[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(object);
//     return acc;
//   }, {});
// };

// const data = [
//   { id: 1, type: "fruit", name: "Apple" },
//   { id: 2, type: "vegetable", name: "Carrot" },
//   { id: 3, type: "fruit", name: "Banana" },
//   { id: 4, type: "vegetable", name: "Broccoli" },
// ];

// console.log(groupByProperty(data, "type"));
// /*
// {
//   fruit: [
//     { id: 1, type: "fruit", name: "Apple" },
//     { id: 3, type: "fruit", name: "Banana" }
//   ],
//   vegetable: [
//     { id: 2, type: "vegetable", name: "Carrot" },
//     { id: 4, type: "vegetable", name: "Broccoli" }
//   ]
// }
// */

// class Car {
//   #price;
//   static maxPrice = 50000;

//   constructor(params) {
//     if (params.price > Car.maxPrice) {
//       console.log(
//         `Price cannot exceed the maximum allowed value of ${Car.maxPrice}.`
//       );
//       this.#price = Car.maxPrice;
//     } else {
//       this.#price = params.price;
//     }
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.maxPrice) {
//       console.log(price);
//     } else {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// задача на клас 1 .splise()==================================

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const deletIdex = this.#items.indexOf(itemToRemove);
//     if (deletIdex !== -1) {
//       this.#items.splice(deletIdex, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ==================================================================================

// class StringBuilder {
//   #value;
//   constructor(initialValye) {
//     this.#value = initialValye;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str += this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

const book = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title,
  coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"
