# custom-properties-parallax

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Build Status](https://travis-ci.org/SimonFinney/custom-properties-parallax.svg?branch=master)](https://travis-ci.org/SimonFinney/custom-properties-parallax)

Parallax effect using custom properties - Inspired by [Cheapass Parallax - daverupert.com](https://daverupert.com/2018/02/cheapass-parallax/)

## Installation

```bash
npm install custom-properties-parallax --save

# Or, with Yarn
yarn add custom-properties-parallax
```

### esnext

```js
import 'custom-properties-parallax';
```

### ES5

```html
<script src="node_modules/custom-properties-parallax/dist/custom-properties-parallax.js"></script>
```

## Usage

* Add `data-cpp` attributes to each of the elements that require a parallax effect
* Declare any of the following custom properties in the `:root` pseudo-class to override library defaults:

| Name             | Type   | Default  |
| ---------------- | ------ | -------- |
| `--cpp-modifier` | Unit   | 0.625rem |
| `--cpp-speed`    | Number | 0.5      |

* For further control, leverage the cascade by declaring any of the above custom properties within the CSS selectors of the target elements
