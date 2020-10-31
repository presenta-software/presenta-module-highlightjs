# Presenta HighlightJs Module

This module converts any `pre code` selector found in [PRESENTA Lib](https://github.com/presenta-software/presenta-lib) blocks using [highlightjs library](https://highlightjs.org/).

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `module-highlightjs`

## Usage

To configure this module use this setting:

```js
modules:{
  highlightjs: true
}
```

Use any valid [Highlight.js style](https://highlightjs.org/static/demo/) instead `true` to override the default style, such as:

```js
modules:{
  highlightjs: 'gradient-light'
}
```

The plugin inject the selected style. If you want to disable this behavior, configure this way:

```js
modules:{
  highlightjs:{
    noCss: true,
    style: 'gradient-light'
  }
}
```





## Development

Run the watcher:

    npm start

and the local webserver

    npm run test



