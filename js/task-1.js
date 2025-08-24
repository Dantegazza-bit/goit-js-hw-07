// Task 1: Категорії
const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  // Підраховуємо тільки <li> всередині внутрішнього <ul>
  const count = item.querySelector("ul").children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
