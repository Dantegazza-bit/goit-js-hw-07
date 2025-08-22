function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи з HTML
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Додаємо слухач на кнопку
btn.addEventListener("click", () => {
  // Генеруємо новий колір
  const color = getRandomHexColor();

  // Змінюємо фон сторінки
  document.body.style.backgroundColor = color;

  // Виводимо колір у span
  colorSpan.textContent = color;
});
