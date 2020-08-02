# Link stations
Link stations checks the most suitable link station for a given device.

Link stations have coordinates and reach: `[x, y, r]`

Devices have coordinates: `[x, y]`

## Algorithm

Link station's power is being calculated using formula:

```
(reach - device's distance from linkstation) ^ 2
```

If `distance > reach`, then power equals 0.

## Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`>=10.12.0`) 

You can install dependencies with:

```
$ npm install
```

After that you can run the app using:

```
$ npm start
```

## CLI

#### build

Build the app and place the built files in `build/` directory:

```
$ npm run build
```

#### watch

Watch for the TS files changes and build them automatically:

```
$ npm run watch
```

#### start

Builds and executes the app:

```
$ npm start
```

#### test

Runs mocha on test files:

```
$ npm test
```

#### lint

Runs eslint against TS files:

```
$ npm run lint
```

#### lint:fix

Runs eslint with a --fix flag against TS files:

```
$ npm run lint:fix
```

## Technologies
- [mocha](https://github.com/mochajs/mocha) and [assert](https://github.com/browserify/commonjs-assert) for tests
- [eslint](https://github.com/eslint/eslint) for code style standardization
