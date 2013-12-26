Start of an extremely simple extension to measure distances on the new Google Maps.

Currently usable just as a bookmarklet; use the following in a bookmark URL:

```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgithub.com/lantius/measure-extension/master/content-script.js';})();
```

To use, simply click and drag the distance, on release you'll be alerted with
the computed distance in the units you've selected in the lower right. Click
there to change from metric to imperial.

Only tested in Chrome.
