// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => console.log(response));

/*
Steps
1. create cardCreator function
2. look up how to iterate through objects
3. append each article to the '.cards-container' tag
    3.1 loop through each card (headline, authorphoto, authorname)
    3.2 map each card to cardCreator function
    3.3 append cardCreator function
*/

function cardCreator(api) {
  //create elements
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    img = document.createElement('img'),
    name = document.createElement('span');
  // add classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  // api injections
  headline.textContent = api.headline;
  img.src = api.authorPhoto;
  name.textContent = 'By ' + api.authorName;
  console.log(api.authorName);
  // appendings
  imgContainer.append(img);
  author.append(imgContainer, name);
  card.append(headline, author);
  // return parent element
  return card;
}
cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
  // prework
  const cardValues = Object.values(response.data.articles);
  //algorythm
  cardValues.forEach(collection => {
    collection.map(article => cardContainer.append(cardCreator(article)));
  });
  //console.log
  // cardValues.forEach(element => {
  //     element.map(article => console.log(article.authorName))})
});
