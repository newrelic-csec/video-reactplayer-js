[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# New Relic ReactPlayer Tracker

New Relic video tracking for ReactPlayer.

## Requirements

This video monitor solutions works on top of New Relic's **Browser Agent**.

## Build

Install dependencies:

```
$ npm install
```

And build:

```
$ npm run build:dev
```

Or if you need a production build:

```
$ npm run build
```

## Usage
Load **scripts** inside `dist` folder into your page.

```html
<script src="../dist/newrelic-video-reactplayer.min.js"></script>
```

### Important note about events

Unfortunately, ReactPlayer does not provide listenable events, instead, it provides unique callback props such as `onPlay`, `onStart`, etc. This implementation does not allow new relic's instrumentation to register to events by themselves, so we have to delegate that responsibility to your App code.

For your convenience, we have included a React component in [samples/NewRelicReactPlayer.js](./samples/NewRelicReactPlayer.js) that you can use as a boilerplate to build your app upon.

## Limitations

ReactPlayer is a broad solution that leverages different player API into a common one. Because of that, we can only provide a shallow implementation for the basic functionalities. In order to allow full instrumentation, consider instrumenting every video provider by itself.

### Seeks

ReactPlayer API does not fully translate onSeek events for all video providers, those untracked seeks will be reported `as buffers`.

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Contributing

We encourage your contributions to improve New Relic ReactPlayer Tracker! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License

New Relic ReactPlayer Tracker is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
