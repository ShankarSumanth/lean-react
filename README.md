# lean-react
A lean react starter for absolute beginners. Uses React, Webpack, React Hot reload, Webpack Dev Server, Redux

## Summary

Javascript, with it's vast growing eco-system, tons of packages, hundreds of concepts, can be overwhelming for beginners. One problem with this is to keep up with all the individual technologies which makeup an application, such as react, is very difficult and also each starter can be structured/ written in 100's of ways. The easiest way to mitigate this is to start with one of the boilerplate project. The problem starts when you would like to customise that boilerplate to your needs. One should now master all the individual concepts which make up this boilerplate and for a beginner this takes lot of effort searching why this does not work, or how to make it work etc.

Although there are lot's of tutorials explaining these concepts individually, a cohesive tutorial as to why this repo is taking a particular approach seems to be the missing link. And hence we are back to square 1 trying to figure out why it is built in such a way. And until you know why something is there in the repo, you will not know how to change it or use it. Something similar to "know your ingredients before you cook"

I believe in this cohesive approach  and this starter is my attempt to put all those concepts in one place, This repo does not just explain the technologies which make up this repo, but also describes more on why this approach was taken and how they fit together.

### To do
- [ ] Add react router support
- [ ] Add react router redux support
- [ ] Universal/Isomorphic support
- [ ] Make whole react project configurable

### Pre-requisites
 * Node >= 6.9.2
 * NPM  >= 3
 
### Description

Package                      | Brief Description            | Why is it used
------------                 | -------------                | ------------- 
[Yarn](https://yarnpkg.com/) | Yarn is npm on steroids.     |  "Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any other system" - from yarn.|
[Webpack-2](https://webpack.js.org/)  | Webpack is a build tool |  If simplifies your build process. Additionally if configured correctly, it produces smallest downloadable javascript and other static assets, there by helping your webpage to load superfast.|
[Webpack-Dev-Server]()| development server to serve our application | |
[React](https://facebook.github.io/react/)| the react ui library | --|
[Redux](http://redux.js.org/) | simplifies application state management | Helps in predectible state, once the application starts growing. Initially this is not required, but when your application grows into multiple components, then redux makes it easy to handle state|
[React-Hot-Loader](http://gaearon.github.io/react-hot-loader/)| See component changes without browser refresh| During development, it is very common to make lot of changes to components, and waiting for a whole build to see the changes makes development inefficient. By reloading the changed component instantaneously without waiting for a whole build/browser refresh. Use this with webpack dev server and it makes configuration very simple|
[Babel](https://babeljs.io/)| Transpile new js language features| Allows to use next gen javascript features today. Helps keep up with the js eco-system, without waiting for an official support from browsers etc.|

### Project Structure
 All the component related code should go under the  `src/components` folder and uses domain naming convention. For eg: 
 If we have a user as a domain then the project structure will be 
 
 ```
 src
   - components
     - user
       - user.component.js
       - user.action.js
       - user.reducer.js
       - user.actionTypes.js
 ```
 and so on.
