Source files for my personal website that I host using GitHub Pages. Check it out here: <https://joshwel.co>.

- [Shorthands](#shorthands)
- [Developing](#developing)
- [Building](#building)
- [Publishing](#publishing)
- [Licence](#licence)

## Shorthands

These are shorthand commands for [building](#building) and/or [publishing](#publishing).

```shell
npm run all          # runs all build:* and post:* scripts
npm run all+publish  # same as 'all', but also 'npm run publish'
```

## Developing

Changes to the sites' source code occurs in the `src/` folder, where website previews
come from `public/index.html`.

During development, you can run the following command to get real-time updates from
Tailwind.

```shell
npm run dev:watch-html
npm run dev:watch-css
```

If you get a error regarding the `$SHELL` variable when running `dev:watch-html`, you can
specify a shell by prefixing `SHELL=/bin/bash` (or whatever shell you use) to the
command.

The non-watch variants of these commands are:

```shell
npm run post:html
npm run post:css
```

**Run these commands in the root of the repository.**

## Building

```shell
npm run build  # build css using tailwind
npm run post  # clean css using postcss+cssnano and html using html-minifier-terser
```

**Run these commands in the root of the repository.**

## Publishing

As the target deployment platform is GitHub Pages, the following command will push the
contents of the `public/` directory to a `gh-pages` branch.

```shell
npm run publish  # shorthand for 'npx gh-pages -t -d public'
```

**Run the command in the root of the repository.**

## Licence

This repository and its' contents are free and unencumbered software/content released into the
public domain. See <https://unlicense.org/> or the [UNLICENSE](UNLICENSE) file for more
information.
