/**
 * @file Library constants.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const NAMESPACE = 'cpp';

const ATTRIBUTE = `data-${NAMESPACE}`;

const CUSTOM_PROPERTIES = {
  DISTANCE: `--${NAMESPACE}-distance`,
  PARALLAX: `--${NAMESPACE}-parallax`,
  SPEED: `--${NAMESPACE}-speed`,
};

const DEFAULT_VALUES = {
  DISTANCE: '.0625rem',
  SPEED: 0.5,
};

export { ATTRIBUTE, CUSTOM_PROPERTIES, DEFAULT_VALUES };
