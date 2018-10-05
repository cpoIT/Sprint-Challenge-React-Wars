# Answers

1.  What is React JS and what problems does it try and solve?

React is a library (not an entire framework) that allows developers to quickly build components. React combines HTML concepts (e.g., <div>, <h1>, <ul>, <li>, etc.) and JS, including class syntax, (e.g., const, map, arrow functions, regular functions, class names start in caps, keyword "extends" is used, 'this' is used, etc.). 

Building an app in React by creating and merging components is similar to putting together Legos. Instead of using only 1-by-1 pieces, 1-by-1 pieces can be merged together into 2-by-4 pieces or 1-by-8 pieces to quickly build a wall, castle, or the Millennium Falcon.

2.  What does it mean to _think_ in react?

First, make a mock up and separate everything into it own box and when there are almost identical box, group them together into a larger box, e.g., the numbers 1-9 on a calculator are all separate boxes but the can be grouped in the same larger box since they have identical styling and act in a similar manner. 

The smaller boxes ccan be imported into a larger box which is than imported into the main application. The smaller boxes do not have access to the main application. The file and directory system in react is similar to Matryoshka doll.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateless functional components are simple and most common -- they get things done. Stateful class components are carefully architected and rely on state and interdependencis. Classes in React follow the same syntax as the newly created classes in JS, e.g., constructor, super, etc.

4.  Describe state.

Most components are stateless it produces an output. Stateful is need when usings refs or lifecycle hooks, e.g., counters when you need to know the previous state.

5.  Describe props.

Props are properties. They are passed like a object parameter.
