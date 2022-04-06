# My Movies React Native Application

## Brief Intro

This is a small React Native based application based on another [existing application](https://github.com/bpalma89/MyMoviesAppReact) that allows you to search movies, visualize details about them and create a list of favorites.

## Instructions

1. Register and get an API key in [IMDb-API](https://imdb-api.com/).

2. Replace the API key used in the file "constants.js" located in the "src/constants" folder.

3. Run `npm install` to install the project dependencies.

4. Run `npm start` or `expo start` to start the project.

5. Open [http://localhost:19002/](http://localhost:19002/) to open the Expo Developer Tools where you can run the app through an emulator, in the browser or on your phone using Expo Client and reading the QR code.

## Used Libraries

### React Navigator

React Navigation is built with JavaScript and lets you create components and navigation patterns that look and feel like truly native ones. React Navigation uses what's called a stack navigator to manage the navigation history and presentation of the appropriate screen based on the route taken by a user inside the app. [More Info](https://reactnavigation.org/)

### React Paper

React Native Paper is a high-quality, standard-compliant Material Design library that has you covered in all major use-cases.[More Info](https://callstack.github.io/react-native-paper/)

### Axios

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). [More Info](https://axios-http.com/docs/intro)

### React Redux

React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple. [More Info](https://react-redux.js.org)

### Redux Thunk

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed. [More Info](https://github.com/reduxjs/redux-thunk)

## IMDb-API

The IMDb-API is a web service for receiving movie, serial and cast information. APIs results is a JSON and includes items such as movie specifications, images, posters, trailers, ratings, Wikipedia page content and more. [More Info](https://imdb-api.com/)

## Technical Decisions

Redux Thunk allows us to avoid directly causing side effects in our actions, action creators, or components. Potentially messy code can be isolated in a thunk, leaving the rest of the code uncluttered. Middleware can later invoke the thunk to actually execute that function. It was used in conjunction with Redux Persist to persist the data in our application, in this case, for our favorite movies.

Redux Stack Navigator allows us to to transition between screens where each new screen is placed on top of a stack.

Axios was used to to make requests to a certain endpoint, in this case, the IMDb API in order to search for movies based on a keyword or fetch more details about them.
