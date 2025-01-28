const refs = {
  formEl: document.querySelector(".form-js"),
  infoEl: document.querySelector(".info-js"),
};
//============ запит на сервер =================================
function getInfoByIp(userIp) {
  const BASE_URL = "https://ip-geolocation-ipwhois-io.p.rapidapi.com";
  const END_POINT = "/json/";
  const params = new URLSearchParams({ ip: userIp });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  const options = {
    headers: {
      "x-rapidapi-key": "66f1a4fbb2msh0b15a4a3d518d49p1310abjsn0b5298d8108e",
      "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
    },
  };
  return fetch(url, options).then((res) => res.json());
}

//============== прослуховувач подій ================================

refs.formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userIp = event.target.elements.userip.value;
  getInfoByIp(userIp)
    .then((data) => {
      const markup = templateIp(data);
      refs.infoEl.innerHTML = markup;
    })
    .catch((error) => {
      console.error(error);
      refs.infoEl.innerHTML = "";
    });
});
//============= рендер ==================================

function templateIp({
  country,
  ip,
  city,
  country_flag,
  currency,
  timezone,
  completed_requests,
  currency_rates,
}) {
  return `
    <div class="info-item">
    <img class="flag" src="${country_flag}" alt="Flag of ${country}"></img>
    <div class="info-row">
    <span class="info-label">Country:</span>
    <span class="info-value">${country}</span>
    </div>
    <span class="info-label">IP Address:</span>
    <span class="info-value">${ip}</span>
    <span class="info-label">City:</span>
    <span class="info-value">${city}</span>
    <span class="info-label">Timezone:</span>
    <span class="info-value">${timezone}</span>
    <span class="info-label">Currency:</span>
    <span class="info-value">${currency}</span>
    <span class="info-label">Currensy Rate:</span>
    <span class="info-value">${currency_rates}</span>
    <span class="info-label">Complated Recuests:</span>
    <span class="info-value">${completed_requests}</span>
    </div>
  `;
}

const styles = `
  .info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
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
