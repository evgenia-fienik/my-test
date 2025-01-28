const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

const handleInput = (event) => {
  //   const trimmedValue = event.target.value.trim();
  outputEl.textContent = event.target.value.trim() || "Anonymous";
};
inputEl.addEventListener("input", handleInput);
