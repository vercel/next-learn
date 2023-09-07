# Create a Next.js App - Installation Error

> Linked from https://nextjs.org/learn/basics/create-nextjs-app/setup

If you see an installation error for the following installation command:

```bash
npx create-next-app nextjs-blog --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
```

Try removing everything after `nextjs-blog`:

```bash
npx create-next-app nextjs-blog
```

A `Could not locate the repository` error message could be the result of your workplace or school network or proxy configuration. A temporary solution may be changing your network environment by disconnecting from your workplace or school VPN, using a VPN browser extension, or trying a different wifi connection.

If none of the steps above resolve your issue, please let us know in a [GitHub Issue](https://github.com/vercel/next-learn/issues) with the error text, your OS, and Node.js version (make sure your Node.js version 18 or higher).
