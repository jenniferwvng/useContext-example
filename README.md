# Description
React Context example for future reference 

# Context intro
We can use Context to store global values and functions and update the global state

# Cons
Why don't we always use it?
- Context providers are not easy to test, you have to create another test component to get the values out of the Context
- Side-effects: When you use Context you have to use the useEffect hook to fetch data, and it will become even harder to test

So if you have side-effect logic bond to global state, use some state management solution like Redux, MobX instead.

Also makes component re-use more difficult (https://reactjs.org/docs/context.html#before-you-use-context)

# Pros
You can store unserializable data, e.g. references to the elements (useRef)

# Conclusion
If state is complex, need to test it, or have side-effects related to your global state - use Redux, MobX etc.
If state is small, need to store non-serializable values like useRef, can use Context.
Can also combine Context and Redux in one application, e.g. Context for storage of non-serializable data, and Redux to store all relevant data.

# Source list
Source: Followed code tutorial of Maksim Ivanov and his pros/cons list, with small additions from other sources and modifications of the code.
1. https://www.youtube.com/watch?v=xAhta1yZzwo

Source: Redux best practices is to not store non-serializable data in it
1. https://blog.bam.tech/developer-news/the-redux-best-practice-do-not-put-non-serializable-values-in-state-or-actions-explained
2. https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
3. https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
