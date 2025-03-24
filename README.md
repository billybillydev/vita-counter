# vita-counter

## ViTA aka Vite + TSX + Alpine.js

In this small project, I show how you can leverage your frontend development with this minimal stack:
- Vite.js ;
- TSX ;
- Alpine.js

Here I implement an advanced usage of Alpine.js where all the logic is in a separate ts file and TSX is only used as rendering template.

The Counter App has only three functionalities:
- Decrement ;
- Increment ;
- Change from input ;

Check the script.ts file in components/counter directory and see how, thanks to typescript, we have a mature and concise code.

## Exercises

I'll give two small exercises to play with this new stack:

### Exercise 1:

Improve the decrement and the increment function by including:
- A minimum value where decrement will stop decreasing counter value ;
- A maximum value where increment will stop increasing counter value ;

**Bonus**: Apply the same logic in change function. Counter does not have to be less than min or greater than max.

### Exercise 2:

In script.ts file, implement a disabled functionality for buttons depending of min and max. You can take example of input object and its usage.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/billybillydev/vita-counter)