---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

[Next.js](https://nextjs.org/) has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation (Recommended)**: The HTML is generated at **build time** and will be reused on each request.
- **Server-side Rendering**: The HTML is generated on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.