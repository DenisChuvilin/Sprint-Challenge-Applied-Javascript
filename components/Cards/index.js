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

// create CardCreator
function CardCreator(api){
//create elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const name = document.createElement('span');

// add classes 
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');

// add attributes
img.src = api.authorPhoto

// // add textContent
headline.textContent = api.headline
name.textContent = api.authorName

//append 
card.append(headline, author);
author.append(imgContainer, name);
imgContainer.append(img)

//return card
return card
}

// capture cards-container from DOM
const cardsContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const articles = Object.values(response.data.articles)
    console.log(response.data.articles)
    articles.forEach(topic => {
        topic.forEach(article => cardsContainer.append(CardCreator(article)))
    })
})