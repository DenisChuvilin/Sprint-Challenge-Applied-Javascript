// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(function(response) {
  console.log(response);

  // cards.append(CardMaker(response.data.articles))
  for (let i = 0; i < response.data.articles.length; i++) {
    response.data.articles[i].forEach(element => {
      return cards.append(CardMaker(element));
    });
  }
});

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

function CardMaker(api) {
  //create elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authName = document.createElement('span');

  // create classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // add text Content
  headline.textContent = api.img.src = api.authorPhoto;
  // src

  //
}
