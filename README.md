Simple Adium Message Style
==========================

Simple is an clean and simple message style for [Adium](http://adium.im), an OS X instant messaging client.

I created this for myself and decided to share it. I included all the development files in case you wanted to customize it.

## Install

Copy `Simple.AdiumMessageStyle` to Adium's `Message Styles` folder: `~/user/Library/Application Support/Adium 2.0/Message Styles`

You can also open `Simple.AdiumMessageStyle` by double-clicking it, and Adium should install the theme for you.

## Customize

You can find all of the Sass files in the `sass/` directory.

### Requirements:

- [Node.js and NPM](http://nodejs.org/)
- [Grunt](http://gruntjs.com)
- [Bower](http://bower.io)

### Getting started

At the root of the project:

1. Run `npm install` to install all Grunt dependencies.
2. Run `bower install` to install all Bower dependencies.

To build the theme, run `grunt build` or just `grunt` if you want to watch and build when you make changes.

## Changelog

### 1.0
* Initial commit.