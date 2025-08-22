// Task 3: Привітання
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  const value = e.currentTarget.value.trim();
  output.textContent = value === "" ? "Anonymous" : value;
});
