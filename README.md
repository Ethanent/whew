# whew

> A simple, pretty, and lightweight Node.JS testing framework

[![whew - Downloads Total](https://img.shields.io/npm/dt/whew.svg)](https://www.npmjs.com/package/whew) [![whew - Version](https://img.shields.io/npm/v/whew.svg)](https://www.npmjs.com/package/whew) [![whew - License](https://img.shields.io/npm/l/whew.svg)](https://www.npmjs.com/package/whew) [![whew - Github Stars](https://img.shields.io/github/stars/FuturisticCake/whew.svg?style=social&label=Star)](https://github.com/FuturisticCake/whew)

---

## Installation

```
npm install whew
```

Or, for distribution with your package...

```
npm install whew --save
```

## Simple usage

```javascript
cosnt w = require("whew");

w.add("This works.", (res) => {
    res(true, "See?");
});

w.add("Adding numbers", (res) => {
    // Hopefull this one will pass also...
    var added = 3 + 4;
	res((added === 7), "Resulted in 3 + 4 = " + added);
});

w.add("My bad", (res) => {
    // Let's pretend something went wrong here.
    res(false, "I've failed you!");
});

w.test();
```

## API: Really quick explanation

I'll explain how this works as quickly as possible so you can get right to testing.

First, of course, we require the library.
```javascript
const w = require("whew");
```

Then we create a test.
```javascript
w.add("Test name", (res) => {
    res(true, "Optional description here"); // This one will pass with the description!
});
```

The callback method provided to the test can be called with the following parameters:
* Passed? **Boolean**
* Description **String** _Optional_

Then, of course, we actually execute the tests.
```javascript
w.test();
```

Simple, isn't it?

## Simple demo: Multi-file testing

It's crazy simple to keep your tests organized within multiple files. Here's a demo...

test.js (Main test file)
```javascript
const w = require("whew");

w.add("Adding numbers", require("./addingNumbersTest.js"));

w.test();
```

addingNumbersTest.js
```javascript
module.exports = (res) => {
    res(true, "Hey, it worked!");
};
```

## License (MIT)

This testing library is MIT licensed, of course. See LICENSE for more information (full license) if you'd like.