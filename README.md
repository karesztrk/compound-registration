# Compound registration

This is a _homework project_ demonstrating the capabilities of React.

## Development server

Please note that this command start the application without database. The application start under port _3000_.

```bash
npm run dev
# or
yarn dev
```

## Development & database

The application starts under port _3000_ while the database API is accessible under port _5000_. Next.js proxies the request to the mock database through its API routes.

```bash
npm run dev:db
# or
yarn dev:db
```

## How to test?

You can either execute unit or end-to-end tests.

### Unit test

Unit tests are executed by [Jest](https://jestjs.io/).

```bash
npm run test
# or
yarn test
```

### Integration test

Integration tests are executed by [Jest](https://www.cypress.io/). The following command will start the Cypress console where the test can be started.

_Please note that you should also start the application in parallel. If you are uncertain then see the chapter about how to start the development server._

```bash
npm run e2e
# or
yarn e2e
```
