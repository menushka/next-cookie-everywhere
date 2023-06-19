# next-cookie-everywhere

Small extension to js-cookie to allow it to be used seemlessly in NextJS 13 app directory on either client or server components

## Installation

Make sure `js-cookie` and `next` are installed, the package won't work without it
```bash
npm install js-cookie next
// or
yarn add js-cookie next
// or
pnpm add js-cookie next
```

Then install `next-cookie-everywhere`
Make sure `js-cookie` and `next` are installed, the package won't work without it
```bash
npm install next-cookie-everywhere
// or
yarn add next-cookie-everywhere
// or
pnpm add next-cookie-everywhere
```

## Usage

This module exports an object that includes all of the methods from `js-cookie`, plus a new `get` method that can be used to get the value of a cookie.

Here's a basic example:

```javascript
import Cookies from 'next-cookie-everywhere';

// Get a cookie
let value = Cookies.get('myCookie');
```

The `get` method takes a string as an argument (the name of the cookie), and returns the value of the cookie. If the code is being executed in a server-side context (such as a Next.js API route or getServerSideProps function), it will use the `next/headers` module to get the cookie value. If the code is being executed in a client-side context, it will use the `js-cookie` library to get the cookie value.

## License

next-cookie-everywhere is released under the [MIT License](LICENSE).
