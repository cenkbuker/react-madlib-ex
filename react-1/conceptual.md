### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

- What is Babel?
    Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?
    JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML. JSX gives us the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements without the need for other methods

- How is a Component created in React?
    React functional components can be any JavaScript function that returns the HTML

- What are some difference between state and props?
     Props: data is passed from one component to another. State: The Data is passed within the component only.
            Immutable                                           Mutable
            Read-only                                           state is bot read and write

- What does "downward data flow" refer to in React?
  Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a. function down from the parent that the child can then call with some information.
- What is a controlled component?
    As the name says, in the controlled component the form input element’s values and mutations are totally driven by event handlers and the value of the input element is always inferred from the state.

- What is an uncontrolled component?
    uncontrolled components doesn't use any states on input elements or any event handler. This type of component doesn’t care about an input element’s real-time value changes.

- What is the purpose of the `key` prop when rendering a list of components?
    Since react components are multiple usage on same component, to create a uniqueness react uses `key` prop to determine that.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Because `key` prop should be unique and shouldn't be change via operations. array indexes can be change via methods like push pull and pop.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is used for reaching a element after rendering the component. Mostly used in API calls and data fetching.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a way to reach an HTML element and use this element in operations and it allows you to prevent rerender the DOM.

- When would you use a ref? When wouldn't you use one?
    Some use areas of ref;
    Managing focus, text selection, or media playback.
    Triggering imperative animations.
    Integrating with third-party DOM libraries.

- What is a custom hook in React? When would you want to write one?
    Custom hooks are a combined with hooks and functional code pieces to prevent repetitive code. If we have same pieces of a code in multiple components, it is best to seperate it in a different file and use it where its been needed. 