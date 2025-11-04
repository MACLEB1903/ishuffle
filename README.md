# iShuffle

Shuffle strings, arrays and objects - with optional nested support.

## Installation

```bash
  npm i ishuffle
```

## Imports

```bash
import ishuffle from "ishuffle";
```

```bash
 const ishuffle = require("ishuffle");
```

## Usage

### ishuffle(argument)

Shuffle the provided value.

```javascript
import ishuffle from "ishuffle";

ishuffle("Hello World!");

// Example output:
// [dolole !HWrl]
```

### ishuffle(argument1, argument2)

Shuffle multiple values.

```javascript
import ishuffle from "ishuffle";

ishuffle("Hello World!", [1, 2, 3, 4, 5]);

// Example output:
// [ 'rdllHoWeo l!', [ 2, 4, 1, 5, 3 ] ]
```

### ishuffle({options})

Shuffle multiple provided values using (shuffle and useNested) options.

```javascript
import ishuffle from "ishuffle";

console.log(
  ishuffle({
    shuffle: [1, 2, 3, 4, 5, ["six", "seven", "eight"]],
    useNested: true,
  })
);

// Example output:
// [ [ 4, 1, [ 'neevs', 'sxi', 'egiht' ], 3, 5, 2 ] ]
```

## Available options

Any of these can be passed into the options object for each function.

| Name          |   Type   | Description                                                   | Default Value |
| ------------- | :------: | ------------------------------------------------------------- | :-----------: |
| **shuffle**   |  `any`   | The value to be shuffled.                                     |      `-`      |
| **useNested** | `number` | Enables shuffling of all nested arrays, strings, and objects. |    `false`    |
