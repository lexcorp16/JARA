/*Redux is a predictable state container for javascript applications. this essentially 
means that with Redux, we can write apps that would have easily predictable behaviours on the client, 
server or native enviroments*/

/*Redux works on the priciple that an application state is immutable. It can only be changed by dispatching 'actions'
The application state is actually a javascript object describing the state of the application at anytime*/

//A sample application state for a todo app could be 
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}

/*An action is a javascript object that describes as minimally as possible the change 
that is to be effected and must contain a 'type' property that cannot be undefined*/

//sample actions for a todo app could be

{ 
	type: 'ADD_TODO', 
	text: 'Go to swimming pool' 
}

{ 
	type: 'TOGGLE_TODO', 
	index: 1 
}

{ 
	type: 'SET_VISIBILITY_FILTER', 
	filter: 'SHOW_ALL' 
}

//These actions are created by well, action creators which are basically functions that return actions
function authUser(form){
  return {
    type: LOGIN_FORM_SUBMIT,
    payload: form
  }
}

/*Next is the concept of reducers which are pure functions that take application state 
and actions as arguments in order to produce the next application state. It is important for 
reducers to be pure functions in that they do not modify the state passed into them but instead
use it to create a new application state. Reducer functions for large applications are usually  
broken down into smaller, more manageable functions handling specific areas of the application*/

 //A sample reducer function to toggle visibility could be written as 

 function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}
