const refs = {
  formEl: document.querySelector(".js-form"),
  infoEl: document.querySelector(".js-info"),
};
//============== запит на сервер ================================
async function getPrice(query) {
  const BASE_URL = "https://binance43.p.rapidapi.com";
  const END_POINT = "/ticker/price";
  const params = new URLSearchParams({
    symbol: query.trim(),
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      "x-rapidapi-key": "66f1a4fbb2msh0b15a4a3d518d49p1310abjsn0b5298d8108e",
      "x-rapidapi-host": "binance43.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error! Ststus: ${response.status}");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // return fetch(url, options).then((res) => res.json()); //посилає кур'єра і повертає
}
//============== прослуховувач подій ================================
refs.formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = refs.formEl.elements.query.value.trim();
  if (!query) {
    refs.infoEl.innerHTML = "<p>Будь ласка, введіть символ.</p>";
    return;
  }
  try {
    const data = await getPrice(query);
    if (data && data.symbol && data.price) {
      renderTicker(data);
    } else {
      refs.infoEl.innerHTML =
        "<p>Не вдалося отримати дані. Перевірте символ.</p>";
    }
  } catch (error) {
    console.error("Ошибка обработки запроса:", error);
    refs.infoEl.innerHTML = "<p>Сталася помилка. Спробуйте ще раз.</p>";
  }
});

//============= рендер ==================================

function renderTicker(obj) {
  const markup = symbolTemplate(obj);
  refs.infoEl.innerHTML = markup;
} //рендер

function symbolTemplate(data) {
  return `
    <div class="info-item">
      <p><span class="info-label">Символ:</span> <span class="info-value">${data.symbol}</span></p>
      <p><span class="info-label">Ціна:</span> <span class="info-value">${data.price}</span></p>
    </div>
  `;
}

const styles = `
  .info-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 20px 0;
  }
  .flag {
    max-width: 80px;
    border-radius: 50%;
  }
  .info-label {
    font-weight: bold;
    color: #555;
  }
  .info-value {
    font-size: 14px;
    color: #333;
  }
`;

// Додати стилі до <head>
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// const refs = {
//   formEl: document.querySelector(".js-form"),
//   infoEl: document.querySelector(".js-info"),
// };
// //============== запит на сервер ================================
// function getPrice(query) {
//   const BASE_URL = "https://binance43.p.rapidapi.com";
//   const END_POINT = "/ticker/price";
//   const params = new URLSearchParams({
//     symbol: query.trim(),
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const options = {
//     headers: {
//       "x-rapidapi-key": "66f1a4fbb2msh0b15a4a3d518d49p1310abjsn0b5298d8108e",
//       "x-rapidapi-host": "binance43.p.rapidapi.com",
//     },
//   };
//   return fetch(url, options).then((res) => res.json()); //посилає кур'єра і повертає
// }
// //============== прослуховувач подій ================================
// refs.formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const query = refs.formEl.elements.query.value.trim();

//   getPrice(query)
//     .then((data) => {
//       const markup = symbolTemplate(data);
//       refs.infoEl.innerHTML = markup;
//     })
//     .catch((error) => {
//       console.error(error);
//       refs.infoEl.innerHTML = "";
//     });
// });

// //============= рендер ==================================

// function renderTicker(obj) {
//   const markup = symbolTemplate(obj);
//   refs.infoEl.innerHTML = markup;
// } //рендер

// function symbolTemplate(data) {
//   return `
//     <div class="info-item">
//       <p><span class="info-label">Символ:</span> <span class="info-value">${data.symbol}</span></p>
//       <p><span class="info-label">Ціна:</span> <span class="info-value">${data.price}</span></p>
//     </div>
//   `;
// }

// const styles = `
//   .info-item {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//     padding: 15px;
//     background-color: #f9f9f9;
//     border: 1px solid #ddd;
//     border-radius: 10px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     width: 300px;
//     margin: 20px 0;
//   }
//   .flag {
//     max-width: 80px;
//     border-radius: 50%;
//   }
//   .info-label {
//     font-weight: bold;
//     color: #555;
//   }
//   .info-value {
//     font-size: 14px;
//     color: #333;
//   }
// `;

// // Додати стилі до <head>
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);
