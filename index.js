
var defaults = require('defaults');
var snippet = require('snippet');


/**
 * Expose `generate`.
 */

module.exports = generate;


/**
 * Generate a snippet handlebars helper.
 *
 * @param {String} writeKey
 * @param {Object} options
 *   @param {String} min
 *   @param {String} host
 * @return {String}
 */
function generate (writeKey, options) {
  options = defaults(options, { min: true });
  var opts = defaults(options, {
    apiKey: writeKey,
    host: 'cdn.segment.io'
  });
  var fn = options.min ? render.min : render.max;
  var rendered = fn(opts);
  return function () {
    return rendered;
  };
}