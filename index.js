const animals = ["tiger", "lion", "rubberduck", "bear"];

console.log(animals);

const removedElements = animals.splice(2, 1);

console.log(animals);
console.log(removedElements);

animals.splice(1, 0, "shark", "moose");
console.log(animals);

animals.splice(1);
console.log(animals);
