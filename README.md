<h2>FrontEnd-Framework</h2>
<p>To learn the ins/out of framework I daily use and get myself familiar on a deeper levels of the frameworks.</p>


<h3>Code Explanation</h3>
<p>Your framework is a simple reactive UI library inspired by modern frameworks like React or Vue.</p> 
Here's how it works:

<h5>1. Core Framework (framework/index.js)</h5>

Uses Snabbdom for virtual DOM operations<br />
Implements a state management system
Creates components with templates, methods, and initial state
Updates the DOM when state changes

2. Element Creation (framework/element.js)

Creates virtual DOM elements using template literals
Handles event binding
Uses tagged template literals for a JSX-like syntax

3. Event Handling (framework/event.js)

Provides a simple way to bind event handlers

4. Component Example (src/user.js)

Creates a User component with state and a method to change the name
Renders a greeting with the user's name and a click handler

The core concept is that when a user interaction triggers a method, the state updates, which causes the component to re-render with the new state.
