'use strict';

// eslint-disable-next-line no-unused-vars
const bookTitles = [
  // Replace with your own book titles
  'my_experiment_with_truth',
  'harry_potter',
  'two_men_in_the_boat',
  'da_vinci_code',
  'wise_or_otherwise',
  'the_train_stops_at_shamli',
  'the_tale_of_two_cities',
];

// 1.1 & 1.2 Replace with your own code
// console.log(bookTitles);

// 1.3 make a function to create ul and li */

// Create ul  element  and assign id

const ul = document.createElement('ul');
ul.setAttribute('id', 'booktitle');

// eslint-disable-next-line no-unused-vars
function createBookList(bookId) {
  for (const i of bookId) {
    // eslint-disable-next-line no-unused-expressions
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
  }
}

// createBookList(bookTitles);

document.body.appendChild(ul);

// 1.5

// eslint-disable-next-line vars-on-top
const books = {
  my_experiment_with_truth: {
    title: 'My experiment with truth',
    language: 'English',
    author: 'MKG',
  },

  harry_potter: {
    title: 'Harry Potter',
    language: 'English',
    author: 'J K Rowling',
  },

  three_men_in_the_boat: {
    title: 'Three men in the boat',
    language: 'English',
    author: 'Jerome K. Jerome',
  },

  da_vinci_code: {
    title: 'Da vinci code',
    language: 'English',
    author: 'Dan Brown',
  },

  wise_and_otherwise: {
    title: 'Wise and Otherwise',
    language: 'English',
    author: 'Sudha Moorthy',
  },

  the_train_stops_at_shamli: {
    title: 'The train stops at Shamli',
    language: 'English',
    author: 'Ruskin Bond',
  },

  the_tale_of_two_cities: {
    title: 'The Tale of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
  },
};

// const ul = document.createElement('ul');

function createBookListUsingObject(bookObj) {
  // eslint-disable-next-line guard-for-in
  const objectKeys = Object.keys(bookObj);
  let j = 0;

  // eslint-disable-next-line guard-for-in
  for (const i in bookObj) {
    const li = document.createElement('li');
    // console.log(objectKeys[j]);
    li.setAttribute('id', objectKeys[j]);

    const head = document.createElement('h1');
    const headContent = document.createTextNode(bookObj[i].title);

    const headLanguage = document.createElement('h2');
    const headLanguageContent = document.createTextNode(bookObj[i].language);

    const headAuthor = document.createElement('h2');
    const headAuthorContent = document.createTextNode(bookObj[i].author);

    headLanguage.appendChild(headLanguageContent);
    headAuthor.appendChild(headAuthorContent);
    head.appendChild(headContent);

    li.appendChild(head);
    li.appendChild(headLanguageContent);
    li.appendChild(headAuthor);
    li.style.cssFloat = 'left';

    ul.appendChild(li);

    j = j + 1;
    //  }
  }
}

createBookListUsingObject(books);

// Create a object with Bookid and image

const bookimage = {
  my_experiment_with_truth: 'gandhi.jpg',
  harry_potter: 'harry.jpg',
  three_men_in_the_boat: 'threemenintheboat.jpg',
  da_vinci_code: 'davinccicode.jpg',
  wise_and_otherwise: 'wiseandotherwise.jpg',
  the_train_stops_at_shamli: 'thetrainstopatshamli.jpg',
  the_tale_of_two_cities: 'thetaleoftwocities.jpg',
};

function imageDisplay(imageObject) {
  // eslint-disable-next-line guard-for-in
  let j = 0;
  // eslint-disable-next-line guard-for-in
  for (const i in imageObject) {
    // console.log(Object.keys(imageObject)[j]);
    const container = document.getElementById(Object.keys(imageObject)[j]);
    const imageElement = document.createElement('img');
    imageElement.src = imageObject[i];
    container.appendChild(imageElement);
    j++;
  }
}

imageDisplay(bookimage);

// eslint-disable-next-line no-undef
ul.style.display = 'grid';
ul.style.gridTemplateColumns = 'auto auto';
ul.style.gridAutoColumns = 'minmax(auto,auto)';
ul.style.gridAutoRows = 'minmax(auto,auto)';

// eslint-disable-next-line no-unused-vars
function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let col = 0; col < x; col++) {
      // eslint-disable-next-line no-undef
    //  $('#booktitle').append("<div> class='grid'></div>");
      const grid = document.getElementById("booktitle");
      grid.appendChild(li)
    }
  }

  // eslint-disable-next-line no-undef
  $('.grid').height(960 / x);
  // eslint-disable-next-line no-undef
  $('.grid').width(960 / x);
}

// eslint-disable-next-line no-undef
createGrid(2);
*/
