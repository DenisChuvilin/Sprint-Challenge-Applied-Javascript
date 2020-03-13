// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.

// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//capture real topics div
const topics = document.querySelector('.topics');

//create topicCreator 
function topicCreator(api){
    //create Element
    const topicDiv = document.createElement('div');

    //add class 
    topicDiv.classList.add('tab');

    //add textContent
    topicDiv.textContent = api;

    //return topicDiv
    return topicDiv
};


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(r => {for (topic of r.data.topics){
    console.log(topic)
topics.append(topicCreator(topic))
}})
