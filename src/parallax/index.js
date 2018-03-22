/**
 * @file Parallax effect using custom properties.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

import constants from './constants';

/**
 * Checks for and otherwise sets default custom properties to the root element.
 * @param {string} property The property to check and set.
 */
function setDefaultProperty(property) {
  const { documentElement } = document;
  const customProperty = constants.CUSTOM_PROPERTIES[property];

  if (
    window
      .getComputedStyle(documentElement)
      .getPropertyValue(customProperty) === ''
  ) {
    documentElement.style.setProperty(
      customProperty,
      constants.DEFAULT_VALUES[property]
    );
  }
}

/**
 * Finds all of the elements declared as parallax elements and attaches the parallax handler to them.
 */
export default function parallax() {
  const w = window;
  const d = document;

  Object.keys(constants.DEFAULT_VALUES).forEach(defaultProperty =>
    setDefaultProperty(defaultProperty)
  );

  d.querySelectorAll(`[data-${constants.NAMESPACE}]`).forEach(element => {
    const parallaxElement = element;

    parallaxElement.style.setProperty(
      'transform',
      `translate3d(0, calc(var(${constants.CUSTOM_PROPERTIES.PARALLAX}) * var(${
        constants.CUSTOM_PROPERTIES.MODIFIER
      })), 0)`
    );

    parallaxElement.style.setProperty('will-change', 'transform');

    w.addEventListener('scroll', () => {
      parallaxElement.style.setProperty(
        constants.CUSTOM_PROPERTIES.PARALLAX,
        d.documentElement.scrollTop *
          w
            .getComputedStyle(parallaxElement)
            .getPropertyValue(constants.CUSTOM_PROPERTIES.SPEED)
      );
    });
  });
}
