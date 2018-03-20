/**
 * @file Parallax effect using custom properties.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2018
 */

const NAMESPACE = 'cpp';

/**
 * Finds all of the elements declared as parallax elements and attaches the parallax handler to them.
 */
function parallax() {
  [...document.querySelectorAll(`[data-${NAMESPACE}]`)].forEach(element => {
    const speed = window
      .getComputedStyle(element)
      .getPropertyValue(`--${NAMESPACE}-speed`);

    element.style.transform = `translateY(calc(var(--${NAMESPACE}-parallax) * var(--${NAMESPACE}-modifier)))`;

    window.addEventListener('scroll', () => {
      element.style.setProperty(
        `--${NAMESPACE}-parallax`,
        document.documentElement.scrollTop * speed
      );
    });
  });
}

parallax();
