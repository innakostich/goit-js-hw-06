//TASK 1


const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`
  Category: ${title}
  Elements: ${elements}
    `);
}





