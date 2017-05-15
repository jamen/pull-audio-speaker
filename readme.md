
# pull-audio-speaker

> Output to speaker as a pull-stream sink

```js
pull(
  generator(Math.random),
  speaker()
)
```

It uses [`audio-speaker`](https://github.com/audiojs/audio-speaker) internally

## Install

```sh
npm install --save pull-audio-speaker
```

```sh
yarn add pull-audio-speaker
```

## Usage

### `speaker(options?, onEnd?)`

Returns a [pull-stream sink](https://github.com/pull-stream/pull-stream) that plays audio buffers in speaker.

It takes the same options as [`audio-speaker`](https://github.com/audiojs/audio-speaker)

```js
pull(
  oscillator(),
  gain(0.6),
  speaker(err => {
    // done
  })
)
```

## Also see

 - [`audiojs`](https://github.com/audiojs) for other audio components
 - [`pull-stream`](https://github.com/pull-stream/pull-stream) for minimal streams
 - [`audio-speaker`](https://github.com/) for the base functional package

