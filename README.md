# newrelic-video-reactplayer [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
#### [New Relic](http://newrelic.com) video tracking for ReactPlayer

## Requirements
This video monitor solutions works on top of New Relic's **Browser Agent**.

## Usage
Load **scripts** inside `dist` folder into your page.
```html
<script src="../dist/newrelic-video-reactplayer.min.js"></script>
```

> If `dist` folder is not included, run `npm i && npm run build` to build it.

### Important note about events
Unfortunatelly, ReactPlayer does not provide listenable events, instead, it provides unique callback props such as `onPlay`, `onStart`, etc. This implementation does not allow new relic's instrumentation to register to events by themself, so we have to delegate that responsability to your App code.

For your convenience, we have included a React component in [samples/NewRelicReactPlayer.js](./samples/NewRelicReactPlayer.js) that you can use as a boilerplate to build your app upon.

## Limitations
ReactPlayer is a broad solution that leverages different player API into a common one. Because of that, we can only provide a shallow implementation for the basic functionalities. In order to allow full instrumentation, consider tackling every video provider by itself.

### Seeks
ReactPlayer API does not fully translate onSeek events for all video providers, those untracked seeks will be reported `as buffers`.