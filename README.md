# custom-properties-parallax

[![Build Status](https://travis-ci.org/SimonFinney/custom-properties-parallax.svg?branch=master)](https://travis-ci.org/SimonFinney/custom-properties-parallax)

Parallax effect using custom properties - Inspired by [Cheapass Parallax - daverupert.com](https://daverupert.com/2018/02/cheapass-parallax/)

## Installation

```bash
# npm
npm install custom-properties-parallax --save

# Yarn
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

* Add `data-cpp` attributes to each of the elements that require a parallax effect on initialisation
* Declare any of the following custom properties in the `:root` pseudo-class to override library defaults:

  | Name             | Type   | Default  |
  | ---------------- | ------ | -------- |
  | `--cpp-distance` | Unit   | 0.625rem |
  | `--cpp-speed`    | Number | 0.5      |

* For individual control, leverage the cascade by declaring any of the above custom properties within the CSS selectors of the target elements. For example:

  ```css
  h1 {
    --cpp-speed: 1;
  }
  ```

* Use the `create` method to apply the parallax effect to an element after initialisation. For example:

  ```js
  const h1 = document.querySelector('h1');
  CustomPropertiesParallax.create(h1);
  ```
