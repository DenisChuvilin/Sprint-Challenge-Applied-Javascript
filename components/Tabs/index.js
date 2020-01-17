// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(function(response) {
  //   console.log(response);

  document.querySelector('.topics').append(topicsCreator(response.data.topics));
});

function topicsCreator(item) {
  //create element
  const topic = document.createElement('div');
  //create class
  topic.classList.add('tab');
  //add text content
  topic.textContent = item;

  return topic;
}
