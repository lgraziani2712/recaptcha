# @dimax-ar/recaptcha

Simple function for requesting tokens to the Google ReCaptcha v3 API. I want to thanks Codeep for writting https://github.com/codeep/react-recaptcha-v3/, without it I would't be able to easily write this lib, thank you!

## Attention!

ReCaptcha v3 is still in beta, hence this lib too. The final API may change in the future.

## Installation

### With yarn

```sh
yarn add @dimax-ar/recaptcha
```

### With npm

```sh
npm install --save @dimax-ar/recaptcha
```

## API

### `loadReCaptcha(string): void`

```js
import { loadReCaptcha } from '@dimax-ar/recaptcha';

/**
 * Please, save your key in an environmental variable
 * instead of pasting it in the code, since can vary between
 * development and production environments.
 *
 * @param {String} key The recaptcha v3 client side key
 * @return {void}
 */
loadReCaptcha(process.env.YOUR_CATPCHA_CLIENT_KEY);
```

### `reCaptcha(string, function): void`

```js
import reCaptcha from '@dimax-ar/recaptcha';

/**
 * @param {String} action
 *  The action the user is going to do in the page/section
 * @param {(token) => void} handleVerify
 *  The callback with the new token.
 */
reCaptcha('action', handleVerify);
```

## Usage

- ReCaptcha docs: https://developers.google.com/recaptcha/docs/v3
- ReCaptcha registration: https://www.google.com/recaptcha/admin#v3signup

### 1. Use `loadReCaptcha()` to initialize ReCaptcha

This function must be called once in the entry file.

```js
// entry file
import { loadReCaptcha } from '@dimax-ar/recaptcha';

loadReCaptcha(process.env.YOUR_CATPCHA_CLIENT_KEY);
```

### 2. Use `reCaptcha` in any page/component to request a new token

#### E.g. in a Vue component

```js
import reCaptcha from '@dimax-ar/recaptcha';

export default {
  created() {
    reCaptcha('example-action', this.handleVerify);
  },
  methods: {
    handleVerify(token) {
      console.log(token);
    },
  },
};
```

#### E.g. in React

```jsx
import React from 'react';
import reCaptcha from '@dimax-ar/recaptcha';

class Example extends React.Component {
  constructor() {
    super();

    reCaptcha('example-action', this.handleVerify);
  }
  handleVerify = (token) => {
    console.log(token);
  }
}
```

### 3. Submit the token on a par with the data

Docs: https://developers.google.com/recaptcha/docs/verify

