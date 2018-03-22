/**
 * @file Library constants.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const NAMESPACE = 'cpp';

export default {
  CUSTOM_PROPERTIES: {
    MODIFIER: `--${NAMESPACE}-modifier`,
    PARALLAX: `--${NAMESPACE}-parallax`,
    SPEED: `--${NAMESPACE}-speed`,
  },
  DEFAULT_VALUES: {
    MODIFIER: '.0625rem',
    SPEED: 0.5,
  },
  NAMESPACE,
};
