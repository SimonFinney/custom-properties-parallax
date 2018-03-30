/**
 * @file Entry point.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

import { create, init } from './parallax';

// Runs the `parallax` method when the DOM content has loaded.
document.addEventListener('DOMContentLoaded', init);

export { create };
