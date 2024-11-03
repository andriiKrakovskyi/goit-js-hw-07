const itemsByClass = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemsByClass.length}`);

itemsByClass.forEach((item) => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('ul li').length);
});
