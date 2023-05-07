const listOfCategories = document.querySelectorAll('.item');
const numberOfItems = listOfCategories.length;
console.log(`Number of categories: ${numberOfItems}`);

listOfCategories.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
