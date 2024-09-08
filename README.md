## Bounties

This project was developed for the following bounties:

- **EthWarsaw Open**
- **Golem Application Build**
- **World Coin: Best Use of World ID**
- **DBForest**

## Overview

After exploring the **Golem** infrastructure, we identified a significant opportunity to leverage it for social actions, specifically supporting universities. We believe Golem's decentralized computing resources can be a great fit for academic environments.

We utilized **DB Forest**, a database promoted at the hackathon, which turned out to be a great alternative to AWS, our original choice.

For authentication, we integrated **WorldCoinID**, which provided a seamless identity verification system for our application.

## Features

- Integration of Golem's computing resources for social applications.
- DB Forest as the primary database solution.
- WorldCoinID for secure authentication.

## Screenshots

Task List View
![Zrzut ekranu 2024-09-8 o 09.54.47.png](..%2F..%2FDesktop%2FZrzut%20ekranu%202024-09-8%20o%2009.54.47.png)

Add Task View
![Zrzut ekranu 2024-09-8 o 09.55.06.png](..%2F..%2FDesktop%2FZrzut%20ekranu%202024-09-8%20o%2009.55.06.png)
![Zrzut ekranu 2024-09-8 o 09.55.15.png](..%2F..%2FDesktop%2FZrzut%20ekranu%202024-09-8%20o%2009.55.15.png)

Task details View
![Zrzut ekranu 2024-09-8 o 09.56.25.png](..%2F..%2FDesktop%2FZrzut%20ekranu%202024-09-8%20o%2009.56.25.png)
![Zrzut ekranu 2024-09-8 o 09.57.34.png](..%2F..%2FDesktop%2FZrzut%20ekranu%202024-09-8%20o%2009.57.34.png)

## Known Issues

One notable bug occurred while trying to upload a file using **Golem’s computing power**. The Golem API returned the following error:

After investigating, we found that other users had reported the same issue on Discord. A staff member was able to guide us in the right direction on Sunday morning, but we ran out of time to fully implement the solution.

GolemWorkError: Script initialization failed for command: {“transfer”:{“to”:“container:/golem/input/test.sh”}}. {“jsonrpc”:“2.0”,“id”:“55543ef2-dad5-4d7c-ba04-408f8861c07e”,“error”:{“code”:-32000,“message”:“Called service /local/identity/Get is unavailable”}}

## Conclusion

Although we faced challenges with the Golem API, the project demonstrates the potential of combining decentralized computing, alternative databases, and secure authentication in innovative applications. With more time, the integration could be completed successfully.


# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
