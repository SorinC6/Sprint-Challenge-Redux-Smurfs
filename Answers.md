1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

 -Array.prototype.map  -  maps over a given array and returns a new array after a specified action has been done to each item of the previous array.
 -Array.prototype.filter - filters an array and returns a new array based on a defined "filter"/parameter and will only return items that match that.
 -Object.assign - receives an object, and will copy the values within the obj and create/return a new object with the previous objects values and whatever we add.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are objects build by actions creators  that basically are 'functions' of redux . An action creator dispatching a action  (an object with a type and a payload) to our reducer witch will allow the reducer to set the state based on the define type and payload . When your Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.Actions only describe what happened, but don't describe how the application's state changes

   Reducers difine our state and allow us to create unique things in the app  based on that moment in time .Reducers are pure functions that take in a state and action and return a new state. The state changes in response to actions sent to the store

   Our state holds the all state tree for our application.  In order to change the sore we must use action to dispatch to it. The sore is where the state lives. We connect our components to pull our state from the sore  into our app props. It can be reffered as the center of thruth I think because holds the state for the entirery application in a single spot 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

      Application state is like our store, responsabile for the state of the entire application. The component state is the state set within a single component . Application state is use for managening the entier project state and make sure the data is going to the right component 

1.  What is middleware?


   Middleware allows us to create async actions within our actions. the middleware sits in between the dispatch and reducers, witch means we can alter our dispatch actions before it gets to the reducers to execute some code. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   An example of a redux middleware is redux-thunk which allows you to write action creators that return a function instead of an action.  The thunk can be used to delay the dispatch of an action and  make ajax requests to the server

1.  Which `react-redux` method links up our `components` with our `redux store`?

   Connect is the method that allows us to map our state to props and connect our components to the sore
