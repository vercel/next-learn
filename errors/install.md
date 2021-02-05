# Create a Next.js App - Installation Error

> Linked from https://nextjs.org/learn/basics/create-nextjs-app/setup

If you see an installation error for the following installation command:

```bash
npm init next-app nextjs-blog --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Try removing everything after `nextjs-blog`:

```bash
npm init next-app nextjs-blog
```

If that doesn’t work either, please let us know on [GitHub Discussions](https://github.com/vercel/next.js/discussions) with the error text, your OS, and Node.js version (make sure your Node.js version is at least 10.13). You can also reach out to [@chibicode on Twitter](https://twitter.com/chibicode).
