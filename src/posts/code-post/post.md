---
title: 'Code Highlighting'
date: '2020-12-01'
---

Blog posts have
[TailWind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
formatting and code formatting support via [PrismJs](https://prismjs.com/).
A Monokai Theme is provided and can can be replaced by the _PrismeJs_ themes or
your own custom theme. To update change the `.css` referanced in
`gatsby-browser.js`.

It supports `code` blocks:

```ts
const test: number = 1;

const config = {
  id: 1,
  name: 'boom',
};

for (let i; i < 10; i++) {
  console.log(i);
}
```

And inline `ts>const test: number = 1` highlights using `>` to split the
language and the code to highlight.
