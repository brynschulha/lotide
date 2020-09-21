# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brynschulha/lotide`

**Require it:**

`const _ = require('@brynschulha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(someArray)`: returns the first element of an array
* `tail(someArray)`: returns everything after the first element in an array
* `middle(array)`: returns the middle element of an array
* `assertArraysEqual(actual, expected)`: prints an assertion that two arrays are equal or not
* `assertEqual(actual, expected)`: determines equality
* `assertObjectsEqual(actual, expected)`: prints an assertion that two objects are equal or not
* `countLetters(stringInput)`: counts the number of letters in a string
* `countOnly(allItems, itemsToCount)`: counts the number of a specified element
* `eqArrays(array1, array2)`: determines if two arrays are equal
* `eqObjects(object1, object2)`: determines if two objects are equal
* `findKey(object, callback)`: returns a key that has a value that matches the output of a callback
* `findKeyByValue(object, value)`: returns a key given a value
* `letterPositions(sentence)`: prints all the letters of a sentence and which index number(s) they appear at
* `map(array, callback)`: loops through elements in an array and performs a callback function on them, then stores them in a new array
* `takeUntil(arr, callback)`: will return elements in an array until a certain element is reached which is determined by a callback function
* `without(source, itemsToRemove)`: takes an array and removes certain specified elements then returns what is left