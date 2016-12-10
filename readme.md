# Angular 2 Essential Training

## About

This is a list app which allows users to list media they 

The starting point is the Yeoman FountainJS Generator for Angular2 instead of the Tutorial code.

[generator-fountain-webapp](https://github.com/FountainJS/generator-fountain-webapp)

Install FountainJS with default options but make sure to choose, choose Typescript, and @angular/router since the tutorial code uses both.

## Install

git clone the repo

Run ```npm install```

## Usage

```npm run build``` to build an optimized version of your application in /dist
```npm run serve``` to launch a browser sync server on your source files
```npm run serve:dist``` to launch a server on your optimized application
```npm run test``` to launch your unit tests with Karma
```npm run test:auto``` to launch your unit tests with Karma in watch mode

## TODO

### Fix Nav:

FountainJS build and the Tutorial build are set up differently with component nesting and routing...
So in the tutorial the navigation is ever present, while inn the Fountain app the nav is only on the front page.

### ```npm run build``` is broken

Build doesn't copy over the html files to dist.

Check Out: [Support on Slack](https://fountain-slack.herokuapp.com)

