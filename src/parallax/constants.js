/**
 * @file Library constants.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const DEFAULT_VALUES = {
  MODIFIER: '.0625rem',
  SPEED: 0.5,
};

const NAMESPACE = 'cpp';

const CUSTOM_PROPERTIES = {
  MODIFIER: `--${NAMESPACE}-modifier`,
  PARALLAX: `--${NAMESPACE}-parallax`,
  SPEED: `--${NAMESPACE}-speed`,
};

export { CUSTOM_PROPERTIES, DEFAULT_VALUES, NAMESPACE };
