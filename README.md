# JavaScript Arrays and Loops

<details>
<summary>Table of Content</summary>

- [Arrays](#arrays)

  - [Create Arrays](#create-arrays)
    - [Array Literal](#array-literal)
    - [Keyword new](#with-the-keyword-new)
  - [Accessing elements](#accessing-elements)
  - [Changing values of elements](#changing-values-of-elements)
  - [Adding Elements](#adding-elements)
  - [Removing Elements](#removing-elements)
  - [Multidimensional Arrays](#multidimensional-arrays)

- [Loops](#loops)

  - [For Loop](#for-loop)
  - [For..of Loop (foreach)](#forof-loop-foreach)
  - [While Loop](#while-loop)
  - [Do..While Loop](#dowhile-loop)
  - [For..in Loop (Objects)](#forin-loop-objects)

- [Array Methods](#array-methods)

</details>

## Arrays

Arrays are data structures used to store and organize multiple values. They are a fundamental part of any programming language and are widely used for various tasks.

An array looks like this in JS

```js
// Array with numbers
[1, 2, 3, 7, 10, 57, 4];

// Array with strings
["Niklas", "Henrik", "Erik", "Sofia"];

// Array with booleans
[true, true, false, true, false];
```

Usually we only have one data type in an array, but JS allows you to mix them as well if you find a use case for that.

```js
// Array with multiple data types
[true, 10, "Niklas", "Erik", [1, 2, 3], {}];
```

You can also get the length of the array like this:

```js
const numbers = [1, 2, 3, 7, 10, 57, 4];

const length = numbers.length;

console.log(length); // 7
```

This is called an attribute on arrays, since it's not a method. It returns the lenght of the array, which means the total numbers of elements.

[Back to top](#javascript-arrays-and-loops)

### Create Arrays

When naming an array, always use plural names. Also we usually use the variable keyword `const` when creating arrays, and that has to do with the fact that arrays are passed by reference and not value.

#### Array Literal

This is the most common way to create an array. Just declare a variable and give it a value as an array.

```js
const ages = [18, 34, 67, 7, 2];
const names = ["Henrik", "Niklas", "Erik", "Sofia"];
```

#### With the Keyword new

We can also create an array with the keyword `new`. It rarely happens though.

```js
const names = new Array("Henrik", "Niklas", "Erik", "Sofia");
```

[Back to top](#javascript-arrays-and-loops)

### Accessing elements

In order to acces an element inside an array you do that by requesting the index postition of the given element. What is an index? Every element in an array are always given an index position, and this position specifies where in the array you can find the element. The index position starts and **position 0**, and counts upwards from there. Forst element has index position 0, second element index position 1, and so on till the end of the array.

To acces an element you use square brackets in combination with the index position.

```js
const ages = [18, 34, 67, 7, 2];
// index  =  [0 , 1 , 2 , 3, 4]

console.log(ages[2]); // 67
console.log(ages[4]); // 2
```

There is also another way to acces elements in an array, by using the _at()_ method. This is an array method, which means all arrays has access to it. Read more here: [Array Methos](#array-methods)

```js
console.log(ages.at(2)); // 67
console.log(ages.at(0)); // 18
```

The differences between these ways of accesing elements is that _at()_ method accepts negative values as well. And if you give a negative value it will count backwords from the end instead.

```js
const ages = [18, 34, 67, 7, 2];

ages.at(-1); // 2
ages.at(-3); // 67
```

[Back to top](#javascript-arrays-and-loops)

### Changing values of elements

We can use square brackets here as well, and we use it in combination with an assignment operator `=`.

```js
const names = ["Henrik", "Niklas", "Erik", "Sofia"];

consol.log(names[1]); // Niklas
names[1] = "Peter";
console.log(names[1]); // Peter
console.log(names); // ["Henrik", "Peter", "Erik", "Sofia"]
```

You could also use an array method called _with()_. This method takes two arguments, the first is the index of the element we want to change, and the other is the value which we want to replace with. It also returns a new array with the changes made.

This is the syntax:
`array.with(index, value) => array`

```js
let names = ["Henrik", "Niklas", "Erik", "Sofia"];

const updatedNames = names.with(0, "Anette");
names = names.with(0, "Anette"); // Works as well, since we here update the reference of the array, but we need let keyword in that case.

console.log(updatedNames[0]); // Anette
console.log(updatedNames); // ["Anette", "Niklas", "Erik", "Sofia"]
```

With the _with()_ method, you can alse use negative indexes, it will then just count backwards for the end of the array.

[Back to top](#javascript-arrays-and-loops)

### Adding Elements

To add elements to your array, you usually use one of two methods. These methods are called `push()` and `unshift()`. These are array methos which means every array has access to them.

`push()` works by adding an element to the end of the array. It takes in one or several arguments, and these are all added to end in the way they are ordered. It also returns the new length of the array.

`array.push(element1, element2... ) => number`

```js
const cars = ["Volvo", "Volkswagen", "Ferrari", "Audi"];

cars.push("Aston Martin");

// If we want to know the new length, we could save that as well.
const newLength = cars.push("BWV");
console.log(newLength): // 6

console.log(cars); // ["Volvo", "Volkswagen", "Ferrari", "Audi", "Aston Martin", "BWV"]
```

`unshift()` works in the same way as `push()` but it adds the element to the beginning of the array instead.

`array.unshift(element1, element2... ) => number`

```js
const numbers = [5, 2, 7, 9, 10];
numbers.unshift(12, 20);

console.log(numbers); //[12, 20, 5, 2, 7, 9, 10]
```

[Back to top](#javascript-arrays-and-loops)

### Removing Elements

Removing elements for arrays can be done in multiple way but there exists two specific methods for elements removal. They are `pop()` and `shift()`.

The syntax is as follows:

`array.pop() => the removed element`

`array.shift() => the removed element`

They don't accept any arguments, they just removes elements. `pop` works by removing the last element from the array, and `unshift` removes the first element from the array.

```js
const cities = ["Stockholm", "Göteborg", "Örebro"];

cities.pop(); // We can ignore the return value
console.log(): // ["Stockholm", "Göteborg"]

const city = cities.shift();
console.log(); //["Göteborg"]
console.log(city); // "Stockholm"
```

[Back to top](#javascript-arrays-and-loops)

### Multidimensional Arrays

Arrays can exist in arrays, they are then called multidimensional arrays. Take connect4 for example, it's a 2-dimensional board, 7x6.

```js
const connect4 = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
```

Let's place some tokens, we need to access specific places in the multidimensional array. We do that by using square brackets, but we use two sets of them.

```js
connect4[5][3] = "red";
connect4[5][4] = "yellow";
connect4[4][3] = "red";
connect4[3][3] = "yellow";

[
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, "Yellow", null, null, null],
  [null, null, null, "red", null, null, null],
  [null, null, null, "red", "yellow", null, null],
];
```

[Back to top](#javascript-arrays-and-loops)

## Loops

Loops are most used together with arrays in order to loop through them and do some sort of work on them. It could be to see if something exists, change something, add elements together, draw some statistics and many other things. They are very versatile and fundamental to every program language.

### For Loop

Use case: When you know the number of iterations beforehand, especially when you are working with indexes. Often used with array where the number of elements are fixed.

Syntax:

```js
for (initialization; condition; update) {
  // code to be executed in each iteration.
}
```

- `initialization` is the point where you start your loop from.
- `condition` is the condition that must be true in order for the loop to continue, otherwise it will terminate. This condition is checked after every iteration.
- `update` is the update that happens after each iteration that changes the basis of the condition.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
/*
0
1
2
3
4
*/
```

Let's take an example with an array.

```js
const numbers = [5, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  // console.log(numbers.at(i));
}

// Output
/*
5
10
15
20
*/
```

[Back to top](#javascript-arrays-and-loops)

### For..of Loop (foreach)

Use case: When iterating over iterable _(mostly arrays)_ objects, most used in arrays and strings when you don't really need to know the index.

Syntax:

```js
// iterable = arrays, string and other data types that can be looped through.
for (variable of iterable) {
  // Code to be executed in each iteration
}

const names = ["Niklas", "Henrik", "Erik", "Sofia"];

for (let name of names) {
  console.log(name);
}

// Output
/*
Niklas
Henrik
Erik
Sofia
*/
```

In every iteration a local variable will be created that will be assign the value of the current element we are iterating over.

[Back to top](#javascript-arrays-and-loops)

### While Loop

Use case: When the number of iterations is not known beforehand, a while loop might be the one you want to use. This loop will continue as long as the specified condition is true. This requires you to be careful when setting the condition because you might create a endless lopp if you don't and your computer won't like that.

Syntax:

```js
while (condition) {
  // Code to be executed in each iteration
}

let x = 1;

while (x < 100) {
  console.log(x);
  x *= 2;
}
```

[Back to top](#javascript-arrays-and-loops)

### Do..While Loop

Use case: Very similar to `while-loop`, but it guarantees that the code inside the loop will run at least once because the condition is checked **AFTER** each iteration.

Syntax:

```js
do {
  // Code to be executed in eact iteration
} while (condition);

let x = 1;

do {
  console.log(x);
  x *= 2;
} while (x < 100);
```

[Back to top](#javascript-arrays-and-loops)

### For..in Loop (Objects)

Use case: When you want to iterate over the properties of an object. Don't use this with arrays or other iterables.

Syntax:

```js
for (variable in object) {
  // code to be executec in each iteration
}
```

More on these when we are talking about objects in later lectures.

[Back to top](#javascript-arrays-and-loops)

## Array Methods

[Array Methods in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### concat

### filter

### find

### findIndex

### forEach

### includes

### indexOf

### join

### map

### reduce

### slice

### splice
