Source files for my personal website that I host using GitHub Pages.

Check it out here: <https://joshwel.co>

- [Development](#development)
  - [Shorthands](#shorthands)
  - [Developing](#developing)
  - [Building/Publishing](#buildingpublishing)

- [Licence](#licence)

## Development

I use the following workflow:

1. Run [watching commands](#watching-commands)  
   _Skip if only making small changes._

2. Work on the website

3. Run `npm run all+publish` [shorthand command](#shorthands-commands)

**Note:** Run all commands in the root of the repository!

### Shorthands Commands

```shell
npm run all          # runs all build and post scripts
npm run all+publish  # same as 'all' but publish
```

### Watching Commands

These commands watch for HTML and CSS changes from `src/**/*` respectively.

```shell
npm run dev:watch-html
npm run dev:watch-css
```

Preview the website from `public/index.html`.

### Building/Publishing Commands

```shell
npm run build    # build css using tailwind
npm run post     # clean css and html
npm run publish  # publish using gh-pages
```

## Licence

This website is free and unencumbered software and text released into the public domain. For more information, please refer to the [UNLICENCE](UNLICENCE) file or visit <http://unlicense.org>.

### Third Party Open-Source Licences

However, certain assets (`public/assets/thirdparty/**/*`) fall under copyright. Their appropriate licences are included in the repository, following the naming convention of their copyrighted counterparts.

- **Space Grotesk**  
  [Website](https://floriankarsten.github.io/space-grotesk/) • [Source Code](https://github.com/floriankarsten/space-grotesk) • [Licence](public/assets/thirdparty/font-SpaceGrotesk-LICENCE.txt)

- **iA Writer Quattro**  
  [Website](https://github.com/iaolo/iA-Fonts) • [Licence](public/assets/thirdparty/font-iAWriterQuattroS-LICENCE.md)
