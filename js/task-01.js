const categories = document.querySelector('#categories');
console.log('Number of categories: ', categories.childElementCount);
console.log("");

const categoriElem = categories.querySelectorAll('.item');

let categoriNames = "";
let categoriChildCount = '';
categoriElem.forEach(element => {
    categoriNames = element.querySelector('h2').textContent;
    categoriChildCount = element.querySelector('ul').childElementCount

    console.log('Category: ', categoriNames);
    console.log('Elements', categoriChildCount);
    console.log('')

});

