Source files for my personal website that I host using GitHub Pages.

Check it out here: <https://joshwel.co>

- [Prerequisites and Setup](#prerequisites-and-setup)
- [Development](#development)
- [Writing](#writiing)
- [Licence](#licence)

## Prerequisites and Setup

There are two independent sets of instructions that can be followed.

- [For Developing](#for-developing): For developing of the websites' HTML/CSS.

- [For Writing](#for-writing): For writing content for the website.

### For Developing

1. Install [Node](https://nodejs.org/en/), latest preferred.

2. Install the projects' dependencies

   ```shell
   npm install
   ```

3. You're all set! See [Development](#development) for more information on workflow and commands.

### For Writing

> **Note**
>
> The minimum Python version required is the oldest supported release of Python. At time of writing, this is Python 3.7.

1. Install [Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer)

2. Install the projects' dependencies

   ```shell
   poetry install
   ```

3. You're all set! See [Writing](#writing) for more information on workflow and commands.

## Development

I use the following workflow:

1. Run appropriate [watching commands](#watching-commands)  
   _Skip if only making small changes._

2. Work on the website

3. Run `npm run all` [shorthand command](#shorthands-commands)

**Note:** Run all commands in the root of the repository!

### Shorthands Commands

```shell
npm run all    # runs all build and post scripts
npm run clean  # wipe public/ of all html and css files
```

### Watching Commands

These commands watch for HTML and CSS changes from `src/**/*` respectively.

```shell
npm run dev:watch-html
npm run dev:watch-css
```

Preview the website from `public/index.html`.

### Building Commands

```shell
npm run build  # build css using tailwind
npm run post   # clean css and html
```

## Writing

> **Note**
> These instructions are not concrete yet.

I use the following workflow:

1. Write content in Markdown

2. Place the Markdown file in `src/txt/`

3. Generate the page

   ```shell
   poetry run jcogen 
   ```

## Licence

The website's _source code_ (`src/**/*`) is free and unencumbered software, text and assets released into the public domain.

- HTML and CSS source files (`src/web/**`) are under the Unlicence.
- Text and Assets (`src/[!web]**/*`) are under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication.

For more information on the Unlicence, please refer to the [UNLICENCE](UNLICENCE) file or visit <http://unlicense.org>.

For more information on the CC0, please refer to [CC0](CCO) or visit <https://creativecommons.org/publicdomain/zero/1.0/>.

### Third Party Open-Source Licences

However, certain assets (`public/assets/thirdparty/**`) fall under copyright. Their appropriate licences are included in the repository, following the naming convention of their copyrighted counterparts.

- **Space Grotesk**  
  [Website](https://floriankarsten.github.io/space-grotesk/) ??? [Source Code](https://github.com/floriankarsten/space-grotesk) ??? [Licence](public/assets/thirdparty/font-SpaceGrotesk-LICENCE.txt)

- **iA Writer Quattro**  
  [Website](https://github.com/iaolo/iA-Fonts) ??? [Licence](public/assets/thirdparty/font-iAWriterQuattroS-LICENCE.md)
