# AGIMUS Wormhole

The AGIMUS wormhole is built with svelte and sveltekit, without much beyond the base install beside
a few dependencies and Yarn. It is intended to build to a static payload for deploy in GitHub pages
or something similar.

## Developing

This repo is configured to use [Volta](https://volta.sh) for managing the JS toolchain, but it is
not required so long as your local environment is compatible with the `engines` spec in
`package.json`.

Check out the repo installed dependencies with `yarn install` (or just `yarn`), start a development
server:

```bash
yarn dev
# ...or...
npm run dev
```

## Payload Encoding

In order to support receiving data from URL params and user-entered strings, it expects Base64
encoded [MessagePack](https://msgpack.org/) formatted data decoded by
[msgpack-lite](https://github.com/kawanet/msgpack-lite). Note that MessagePack
[does not distinguish between `null` and `undefined`](https://github.com/kawanet/msgpack-lite#messagepack-mapping-table),
and at this time this app does not support any Custom Extension Types.

## Building

To create a production version of your app:

```bash
yarn build
# ...or...
npm run build
```

You can preview the production build with `yarn preview` or `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for
> your target environment.
