This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Hooks (useState/useEffect)

![Hook-Image](https://images.unsplash.com/photo-1541690090176-17d35a190b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80)

## What are React Hooks? 🤔

- React hooks are functions that let us "hook" into React state and lifecycle features from function components.
- Hooks allow us to to manipulate the state of functional components without needing to convert into class components
- Hooks don't work inside classes(because they let you use React without classes)
- By using them, lifecycle methods (componentDidMount, componentDidUpdate) can be replaced.

## Why React Hooks? 🤨
- Cleaner and less code with functional components opposed to class components 
- Classes can be confusing with the concept of `this`. (Can be resolved through `bind` or arrow functions)
- Functional components can potentially have a better performance than Class 

## Goals
- [ ] Understand the syntax of useState() and how it is the equivalent of `state` and `setState`
- [ ] Understand the syntax of useEffect() and how it is the equivalent of lifecycle methods(componentDidMount/componentDidUpdate)
- [ ] Convert a Class component into a Function Component with Hooks

## Rules of Hooks
Hooks are Javascript functions, but they have two important rules:
- Don't call them inside of loops, conditions, or nested functions. Only call them at the TOP LEVEL.
- Don't call hooks from regular Javascript functions, only call them from React function components.

## Importing and Implementing useState 
Import useState from React by:
`import React, {useState} from 'react'`

UseState is a function, when invoked with an initial state, **returns an array** of a stateful value and a function to update it.
Destructuring the array is a necessity when working with useState.
```
    const [state, setState] = useState(initialState)
```

Note: useState does not have to be passed an object. The initial state can be set to an integer, boolean, string, etc.

## Importing and Implementing useEffect 
Import useEffect from React by:
`import React, {useEffect} from 'react'`

The hook that allows us to manage side effects, such as API calls, is the useEffect hook. It takes two parameters, a function and an array, and it returns nothing. The function it takes will be executed **after every** render cycle. This can be an issue as it can lead to an infinite loop unless handled correctly.

There is an effective solution for that. The useEffect hook takes a second argument, which controls if the function should be executed. It is an array of values, and the useEffect function will only be executed if one of the values in the array changes.

```
    useEffect(
        () => {}, //function
        [] //array
    )
```

## Pure Functional Component w/ Hooks
- [Restaurant-App-React](https://github.com/reireynoso/restaurant_app_react)

## External Resources (Blogs and Documentation)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [Why React Hooks? A Developer's Perspective](https://hackernoon.com/why-react-hooks-a-developers-perspective-2aedb8511f38)
- [React Hooks: useState(using the state hook)](https://hackernoon.com/react-hooks-usestate-using-the-state-hook-89ec55b84f8c)
- [React Hooks: useState and useEffect](https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f)
