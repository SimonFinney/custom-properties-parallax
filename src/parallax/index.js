/**
 * @file Parallax effect using custom properties.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

import { ATTRIBUTE, CUSTOM_PROPERTIES, DEFAULT_VALUES } from './constants';

/**
 * Checks for and otherwise sets default custom properties to the root element.
 * @param {string} property The property to check and set.
 */
function setDefaultProperty(property) {
  const { documentElement } = document;
  const customProperty = CUSTOM_PROPERTIES[property];

  if (
    window
      .getComputedStyle(documentElement)
      .getPropertyValue(customProperty) === ''
  ) {
    documentElement.style.setProperty(customProperty, DEFAULT_VALUES[property]);
  }
}

/**
 * Attaches the parallax handler to a specific element.
 * @param {HTMLElement} parallaxElement The element to attach the parallax handler to.
 */
function create(parallaxElement) {
  const { style } = parallaxElement;

  /**
   * Sets the custom property of the specified element before the next repaint.
   */
  function setParallax() {
    style.setProperty(
      CUSTOM_PROPERTIES.PARALLAX,
      document.documentElement.scrollTop *
        window
          .getComputedStyle(parallaxElement)
          .getPropertyValue(CUSTOM_PROPERTIES.SPEED)
    );

    requestAnimationFrame(setParallax);
  }

  style.setProperty(
    'transform',
    `translate3d(0, calc(var(${CUSTOM_PROPERTIES.PARALLAX}) * var(${
      CUSTOM_PROPERTIES.DISTANCE
    })), 0)`
  );

  style.setProperty('will-change', 'transform');

  requestAnimationFrame(setParallax);
}

/**
 * Finds all of the elements declared as parallax elements and creates a parallax handler for each of them.
 */
function init() {
  Object.keys(DEFAULT_VALUES).forEach(setDefaultProperty);
  document.querySelectorAll(`[${ATTRIBUTE}]`).forEach(create);
}

export { create, init };
