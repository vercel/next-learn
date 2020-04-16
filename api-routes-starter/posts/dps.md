---
title: "DPS: Develop, Preview, Ship"
date: "2020-01-02"
---

[ZEIT Now](https://zeit.co/) supports the **DPS** workflow: **D**evelop, **P**review, and **S**hip:

- **Develop**: Write code in Next.js. Keep the development server running and take advantage of its hot code reloading feature.
- **Preview**: Every time you push changes to a branch on GitHub / GitLab / BitBucket, ZEIT Now automatically creates a new deployment with a unique URL.
- **Ship**: When you’re ready to ship, merge the pull request to your default branch (e.g. `master`). ZEIT Now will automatically create a production deployment.

By using the DPS workflow, in addition to doing code reviews, you can do *deployment previews*. Each deployment creates a unique URL that can be shared or used for integration tests.