# hbs-analyticsjs-snippet

  Handlebars helper for the [analytics.js](segmentio/analytics.js) snippet.

## Installation
  
    $ npm install hbs-analyticsjs-snippet

## Example

```js
var snippet = require('hbs-analyticsjs-snippet');
var hbs = require('hbs');

hbs.registerHelper('analyticsjs', snippet('WRITE_KEY'));
```

```html
 <script>
    {{ analyticsjs }}
  </script>
```

## API

### snippet(writeKey, options)
  
  Creates a handlebars helper for the [analytics.js](segmentio/analytics.js) snippet, with a `writeKey` and custom `options`:

```js
{
  min: true, // minified snippet by default
  host: 'cdn.segment.com' // where your analytics.js is hosted
}
```


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
