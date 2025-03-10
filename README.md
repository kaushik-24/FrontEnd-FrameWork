<h2>FrontEnd-Framework</h2>
<p>To learn the ins/out of framework I daily use and get myself familiar on a deeper levels of the frameworks.</p>


<h3>Code Explanation</h3>
<p>This framework is a simple reactive UI library inspired by modern frameworks like React or Vue.</p> 
Here's how it works:

<h5>1. Core Framework (framework/index.js)</h5>

Uses Snabbdom for virtual DOM operations<br />
Implements a state management system<br />
Creates components with templates, methods, and initial state<br />
Updates the DOM when state changes

<h5>2. Element Creation (framework/element.js)</h5>

Creates virtual DOM elements using template literals<br />
Handles event binding<br />
Uses tagged template literals for a JSX-like syntax

<h5>3. Event Handling (framework/event.js)</h5>

Provides a simple way to bind event handlers

<h5>4. Component Example (src/user.js)</h5>

Creates a User component with state and a method to change the name<br />
Renders a greeting with the user's name and a click handler<br/>

<p>The core concept is that when a user interaction triggers a method, the state updates, which causes the component to re-render with the new state.</p>

To run locally:
```
git clone https://github.com/kaushik-24/FrontEnd-FrameWork
cd FrontEnd-FrameWork
yarn && yarn install
```
//your package installer choice  <br />
Also need to install snabbdom `yarn install snabbdom`
