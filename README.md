# JavaScript Arrays and Loops

<details>
<summary>Table of Content</summary>

- [Arrays](#arrays)

  - [Create Arrays](#create-arrays)
    - [Array Literal](#array-literal)
    - [Keyword new](#with-the-keyword-new)
  - [Accessing elements](#accessing-elements)
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

The differences between these ways of accesing elements is that _at()_ method accepts negative values as well. ANd if you give a negative value it will count backwords from the end instead.

```js
const ages = [18, 34, 67, 7, 2];

ages.at(-1); // 2
ages.at(-3); // 67
```

### Adding Elements

### Removing Elements

### Multidimensional Arrays

## Loops

### For Loop

### For..of Loop (foreach)

### While Loop

### Do..While Loop

### For..in Loop (Objects)

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
