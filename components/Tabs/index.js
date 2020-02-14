// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

// Once the data is returned console.log it and review the structure.

// Iterate over the topics creating a new Tab component and add it to the DOM

// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


/*Steps
1. capture .topics element
2. create function topicGenerator
3. run algorythm to append every topic to the .topics element
*/
//1.
  const htmlTopics = document.querySelector('.topics')
//2.
function topicGenerator(apiTopic){
    //creating tab element
  const tab = document.createElement('div')
  // adding classes
  tab.classList.add('tab');
  //adding text
  tab.textContent = apiTopic
  //return parent element
  return tab
}
//3.
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    //prework
//   console.log(response);
  const topics = response.data.topics
 // algorythm
  topics.map(
       topic => htmlTopics.append(
           topicGenerator(topic)))
});
