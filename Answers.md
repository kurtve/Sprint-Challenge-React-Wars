# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a framework for creating dynamic front-ends for web sites.  It works by creating a virtual DOM that mirrors the actual DOM of the web page.  This allows us to use all of Javascript's features (composibility, OOP, etc.) build up complex web pages.  Javascript is able to quickly make changes to the virtual DOM, which then get mapped to actual DOM elements only when changes occur.


2. What does it mean to think in react?

I think it primarily means to think of web pages as being built up out of smaller, reusable components, which are assembled dynamically using Javascript.


3. Describe state.

State refers to any data which is represented on the web page and which is subject to change.  State data values need to be tracked between renderings of the age, so that React will know when an element needs to be re-rendered to reflect a change in state.


4. Describe props.

Props are simply parameters sent to a component by its parent component when it is rendered.


5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any events or processing which takes place outside of the component rendering, which can alter the state of data on that component.  For interactions which are a one-time event like a user mouse-click, the useState hook can be used to update state and force a component to re-render.  For events which happen continuously or for which an infinite-loop could occur, the useEffect hook lets us specificy that a page should re-render only when specific dependencies change.

