
var defaults = require('defaults');
var snippet = require('segmentio-snippet');


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
    host: 'd2dq2ahtl5zl1z.cloudfront.net'
  });
  var fn = options.min ? snippet.min : snippet.max;
  var rendered = fn(opts);
  return function () {
    return rendered;
  };
}