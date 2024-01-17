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
  - [concat](#concats)
  - [filter](#filter)
  - [find](#find)
  - [findIndex](#findindex)
  - [forEach](#foreach)
  - [includes](#includes)
  - [indexOf](#indexof)
  - [join](#join)
  - [map](#map)
  - [slice](#slice)
  - [splice](#splice)
  - [reduce](#reduce)
  - [sort](#sort)
  - [Method Chaining](#chaining-array-methods)

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

concat(value1, value2, value3...) => array

`concat()` concatenates several arrays or values and returns them in a new array.

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const arr = letters.concat(numbers);

console.log(arr); // ["a", "b", "c", 1, 2, 3]
```

[Back to top](#javascript-arrays-and-loops)

### filter

filter(callback) => array

`filter()` is used to filter an array after a specific instruction. This instruction is given in the form av a callback function. `filter()` loops through an array of elements and executes the callback function on each and every element and then returns the remaining elements in a new array. This callback function must return either true or false.

```js
const ages = [5, 10, 19, 25, 12, 34, 2];

// Let's filter this array and keep all ages that are above 18.
const filterAges = ages.filter((age) => {
  if (age < 18) {
    return false;
  }

  return true;
});

console.log(filterAges);
```

Alternative solution with the function key word inside the callback.

```js
const filterdAges = ages.filter(function (age) {
  if (age < 18) {
    return false;
  }

  return true;
});

console.log(filterAges);
```

You can shortend the filter method as well if you remove the brackets and instead return something straight away.

```js
const filterAges = ages.filter((age) => age > 18);
```

[Back to top](#javascript-arrays-and-loops)

### find

find(callback) => element OR undefined

We use this method to find a specific element inside the array, or rather the first element that matches the criteras. A callback function is passed as an argument to see if the element matches the given criteras.

```js
const ages = [5, 10, 19, 25, 12, 34, 2];

const correctAge = ages.find((age) => {
  if (age === 10) {
    return age;
  }
});

// Or shorter
const correctAge = ages.find((age) => age === 10);
```

[Back to top](#javascript-arrays-and-loops)

### findIndex

findIndex(callback) => number _(index position or -1)_

`findIndex()` returns the index of the first element that passes the test from the callback function.

[Back to top](#javascript-arrays-and-loops)

### forEach

forEach(callback) => void

`forEach` is a method that executes a callback function on each element, and that's it.

Commonly used to execute side effects in your code if you are working with some arrays.

```js
const countries = ["Sweden", "Denmark", "Finland"];

countries.forEach((country) => {
  console.log(country);
});
```

[Back to top](#javascript-arrays-and-loops)

### includes

includes(searchElement, fromIndex?) => boolean

_? marks the argument as optional_

`includes` looks for a specific element in the array and returns true or false if it finds it or not.

```js
const ages = [5, 10, 19, 25, 12, 34, 2];

const exists = age.includes(10);
console.log(exists); // true;
```

[Back to top](#javascript-arrays-and-loops)

### indexOf

indexOf(searchElement, fromIndex?) => number _(index or -1)_

`indexOf()` works the same way as `findIndex()` but it does so without the need of a callback function.

[Back to top](#javascript-arrays-and-loops)

### join

join(separator?) => string

The join function converts an array to a string and joins the elements together with the seperator.

```js
const classNames = ["container", "bold", "shadow", "primary"];

const classNamesAsString = classNames.join(" ");
console.log(classNamesAsString);
// "container bold shadow primary"

const classNamesAsString = classNames.join("&");
console.log(classNamesAsString);
// "container&bold&shadow&primary"
```

[Back to top](#javascript-arrays-and-loops)

### map

map( callback(element, index) ) => array

The `map()` method creates a new array populated with a modified version of the iterated object according to a callback function. On each iteration the callback function is invoked on the current element that we iterate over, and returns the modified element.

The arguments that comes with the callback is the element that we are currently iterating over and the index value of the current element we are iterating over.

```js
const numbers = [2, 4, 6, 8, 10];

const numbersDoubled = numbers.map((number) => {
  const newNumber = number * 2;
  return newNumber;
});

console.log(numbersDoubled); // [4, 8, 12, 16, 20];

// Shortened version
const numbersDoubled = numbers.map((number) => number * 2);
```

Let's try a more html-like example;

```js
const links = ["home", "about", "contact", "products"];

const aTags = links.map((link) => {
  const aTag = `<a href="${link}.html">${link}</a>`;
  return aTag;
});

console.log(aTags);
```

This last example takes an array with name of links and transforms it to an array containg html elements instead.

[Back to top](#javascript-arrays-and-loops)

### slice

slice(start?, end?) => array

The `slice()` method is a copying method basically. It returns a shallow copy that contains some of the elements from the original array. The element that exists in the copy is decided by the arguments.

`start` is the index from which to start the copying. The start index is included in the copying.

`end` is the index on which we end the copying. The end index is excluded from the copying.

If `start` is omitted it will begin copying from index position 0. If `end` is omitted it will copy all the to the end.

```js
const letters = ["a", "b", "c", "d"];
const copy = letters.slice(1, 2);
console.log(copy); // ["b"]
```

You could have a negative index on the arguments, it then copies backwards from the end.

[Back to top](#javascript-arrays-and-loops)

### splice

splice(start, deleteCount?, item1?, item2?....) => array containing the deleted elements

If one element is deleted we will get an array with one element as return value. If no elements were deleted we will get an empty array.

```js
const animals = ["tiger", "lion", "rubberduck", "bear"];
const removedElements = animals.splice(2, 1);

console.log(animals); //  ["tiger", "lion", "bear"];
console.log(removedElements); // ["rubberduck"]

animals.splice(1, 0, "shark", "moose");
console.log(animals);
```

When looking at the logs we can see that the array has been modifed in place, and this is due to that `splice()` is a destructive method. It changes the array in place.

[Back to top](#javascript-arrays-and-loops)

### reduce

reduce( callback( accumlator, currentValue, currentIndex), initialValue ) => single value depending on the callback function

The `reduce()` method is just to transform any given array in to a single value by applying the callack function on every element.

This method is a little bit more complicated than the rest of the array methods. Here is a breakdown.

- `callback`: The provided callback function
  - `accumulator`: Accumulates the result of the previous callback invocation or the `initialValue` if provided.
  - `currentValue`: The current element that is being iterated over.
  - `currentIndex`: The index of the current element being iterated over. (This one is seldom used)
- `initalValue`: (optional), the initial value for the `accumulator`. If it's not provided the first element in the array is used as the initial value of the `accumulator`.

The method works by, depending on the `callback`, add to the `accumulator` in each iteration, that in the end results in a single value _(or object)_ that is returned by the reduce method.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15;
```

In this case we have an array of numbers that we want to add together to a sum. The reducer method is invoked on this array and the `callback` is executed on each element. The `initialValue` is set to 0, by us, and is used as the starting value of the `accumulator`. In the first iteration the `accumulator` starts at 0 and the `currentValue` _(1 in this case)_ is added to it. In the next iteration the `accumulator` now is 1. The `callback` is invoked and the `currenValue`, _(now 2)_ is again added to the `accumulator`. Then we repeat this till every element has been iterated over and we should end up with the value 15 in the `accumulator`, and that's the value that is then returned byt the reducer.

So in short, the `accumulator` is a variable that accumulates the result of each callback invocation. It holds the running total and in the end the final result.

[Back to top](#javascript-arrays-and-loops)

### sort

sort( compareFunction? ) => void

`sort()` is a method that let's you sort the elements of an array in a default way or in a custom way if it's provided with `compareFunction`. The default way is that it converts the elements to strings and sorts them alphabetically. Now, this is usually not the behaviour we want because often we have more complex objects inside an array that can not just be converted to strings. These cases requires a `comparFunction` in order to sort numerical or non-string values. Remember that the `sort()` methods sorts the array in-place, nothing is returned. Let's break this method down.

- `compareFunction`: An optional argument that defines the sorting order of the elements. If it's omitted the default sorting is based on string Unicode code points.

```js
const fruits = ["banana", "orange", "apple", "mango"];

fruits.sort();
console.log(fruits); // [apple, banana, mango, orange]
```

Default sorting applied here, it's in an alphabetical order. How do we use a `compareFunction` then?

```js
const numbers = [10, 5, 8, 15, 3];

numbers.sort((a,b) => {
  reuturn a - b
})

console.log(numbers); // [3, 5, 8, 10, 15];
```

In this example the compare function comes as an inline arrow function. It takes two arguments that represents the current value `a`, and the next value `b`. In the code block we compare this numbers and return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b` and zero if the `a` and `b` should remain in place.

This is the essence of the compare function, it must return either a negative, positive or a zero value and that is was make of the sorting.

[Back to top](#javascript-arrays-and-loops)

### Chaining array methods

Chaining is something that is very useful and provides clean and readable code if used in a correct way.

Only methods that returns something can be used in chain of methods. The methods can return different data types but the order of the methods in the chain then needs to be correct. Otherwise it won't work. For instance, if you have an array, you can `filter` it and the `map` it. That works beacause `map` returns an array that we can `filter`, which in turns returns an array that we can save in a variable.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const modified = numbers.filter((number) => number % 2 === 0).map((number) => (number *= 2));

console.log(modified); // [4, 8, 12, 16, 20];
```

In this case we have an array with numbers that we first filter so it only contains even numbers, and then we map it by multiplying every number with 2. The result is a new array with only even numbers that have been doubled.

You could built on this chaining and add more methods but it quickly becomes complicated if you don't know what you are doing. This is an easy examle that shows the concept.

[Back to top](#javascript-arrays-and-loops)
