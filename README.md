# Todo Web Application
My attempt was to structure this application for re-usability and scalability.

View live site at https://todo-app-tkh.netlify.app/


## User Instructions

### Weather component
View Weather details for NYC at the top of the page. 

For responsiveness browsing or mobile, click on the cards to expand more weather details.

### Todos component
In the `Your Todos` section of the app, click on the input field and you should see a cursor.
Write in your todo. Click on the `Add Todo` button to add to your todos list.

To mark a Todo as done, click on the checkbox on the left side of the Todo. It will appear on the bottom in the `Complete Todos` section.

Click on the complete Todo again to mark it as incomplete, and it will move back to the top.


## Technologies
React.js<br>
SASS<br>
Express.js<br>
PostreSQL<br>
pg-promise<br>


## Conventions
BEM


## Component Structure
            WeatherCard
        Weather ->
    Header ->
App ->
    TodoComponent ->
        IncompleteTodos ->
            TodoForm
            Todo -> TodoForm
        CompleteTodos ->
            Todo -> TodoForm


## Application State/Functions
App  -  
TodoComponent  -  completeTodos[], incompleteTodos[], useEffect(callAPI), toggleTodoComplete()
IncompleteTodos  -  newTodo{}, handleChange(), addTodo()
CompleteTodos  -  
Todo  -  deleteTodo()