# currying
Currying is a functional programming concept in JavaScript (and many other programming languages) that involves transforming a function that takes multiple arguments into a series of functions, each taking a single argument. This can make your code more modular and composable. It's named after the mathematician Haskell Curry.

The basic idea is to create a chain of functions, where each function takes one argument and returns another function that also takes one argument until all the required arguments have been processed, and the final function returns the result. Currying can be particularly useful in scenarios where you want to partially apply a function and reuse it with different arguments.
In this example, we first define a regular add function that takes three arguments. Then, we create a curryAdd function that takes one argument a and returns a function that takes b, which in turn returns another function that takes c. This series of functions allows you to call curryAdd(1)(2)(3) to calculate the sum of 1, 2, and 3.

The thought process behind currying is to break down a function into smaller, more specialized functions, making it easier to reuse and compose. It also allows you to create partially applied functions, where you fix some arguments and leave others to be supplied later. This can be beneficial in functional programming, where function composition and immutability are important principles.
In this example, we create a calculateArea function that first takes the length and returns another function that takes the width. This allows us to partially apply the length and then reuse the partially applied function to calculate areas with different widths.