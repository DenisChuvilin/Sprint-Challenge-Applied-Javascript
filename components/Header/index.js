// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//create headerCreator function 
function Header() {
    //create elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span')

    // add classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // add textContent
    date.textContent = 'SMARCH 28, 2019';
    temp.textContent = '98°';
    title.textContent = 'Lambda Times'
    // append elements
    header.append(date, title, temp);

    //return header
    return header;
};

// append header to the DOM
const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());
