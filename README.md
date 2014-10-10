# Revolver [![Build Status](http://img.shields.io/travis/johnnyfreeman/revolver.svg?style=flat-square)](https://travis-ci.org/johnnyfreeman/revolver) [![Code Climate](http://img.shields.io/codeclimate/github/johnnyfreeman/revolver.svg?style=flat-square)](https://codeclimate.com/github/johnnyfreeman/revolver)

Revolver is a javascript library to help you build your own content slider. It has a sensible [API](api/README.md) (seriously, go check it out) that helps you get from mockup to reality with less friction than most of the other "cookie-cutter" sliders out there.

One important difference is, Revolver is a much lower component than most others. It's more of a framework than it is a complete solution. So, naturally, hand-writing a little javascript comes with the territory. Let's get started!

* [**API**](api/README.md)
* [**Installation**](#installation)
* [**Usage**](#usage)
* [**Making a Custom Transition**](#making-a-custom-transition)
* [**Examples**](#examples)
* [**Extensions**](#extensions)
* [**Contributing**](#contributing)

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```shell
bower install revolver
```

It will resolve all of Revolver's dependencies for you, no need to go and download those separately. If you are unfamiliar with it, I highly recommend you [take a look](http://bower.io/)!

*Of course, you can still take the ol' fashioned approach and [download](https://github.com/johnnyfreeman/revolver/archive/master.zip)/unzip anywhere in your project. Just make sure you also do the same for Revolver's hard dependencies: [Lodash](http://lodash.com/) and [Bean](https://github.com/fat/bean).*

## Usage

There are only two things that are required to instantiate Revolver:

1. **Container**: via [container](api/options/container.md) or [containerSelector](api/options/containerselector.md) options.
2. **Slides**: via [slides](api/options/slides.md) or [slidesSelector](api/options/slidesselector.md) options.

###### Using DOM Nodes

```javascript
var mySlideContainer = document.getElementById('slidesContainer');
var mySlides = mySlideContainer.getElementsByClassName('slide');

var mySlider = new Revolver({container: mySlideContainer, slides: mySlides});
```

###### Using Selectors

```javascript
var mySlider = new Revolver({containerSelector: '#slidesContainer', slideSelector: '.slide'});
```

You may also implement any combination of the two methods.

For more usage information, please refer to the [API](api/README.md).

## Examples

Because of Revolver's unopinionated philosophy, it does very little out of the box and usually requires some small amount of customization to hit the sweet spot.  Here are a few ideas to get you started:

* [**barebones-example**](http://johnnyfreeman.github.io/revolver/examples/barebones): An out-of-the-box example.
* [**fade-example**](http://johnnyfreeman.github.io/revolver/examples/fade): Slides fade in and out from each other.
* [**reveal-example**](http://johnnyfreeman.github.io/revolver/examples/reveal): A curtain-like transition.
* [**slide-example**](http://johnnyfreeman.github.io/revolver/examples/slide): A sliding in and out transition.
* [**controls-example**](http://johnnyfreeman.github.io/revolver/examples/controls): How to build slider controls.
* [**events-example**](http://johnnyfreeman.github.io/revolver/examples/events): Listening and handling events.
* [**progress-example**](http://johnnyfreeman.github.io/revolver/examples/progress): Progress bar example.0

Or [make your own custom transition](#making-a-custom-transition).

## Extensions

* [**jquery-plugin**](https://github.com/johnnyfreeman/revolver-jquery-plugin): A jQuery plugin.
* [**mootools-plugin**](https://github.com/johnnyfreeman/revolver-mootools-plugin): A MooTools plugin.
* [**bonzo-plugin**](https://github.com/johnnyfreeman/revolver-bonzo-plugin): A Bonzo plugin.

## Making a Custom Transition

When composing your own custom slide transitions, it is recommended that you use a good [animation library versus using CSS3 animation](http://davidwalsh.name/css-js-animation). But not all animation libraries are created equal. We recommend using one of the following:

* [**Velocity**](http://julian.com/research/velocity/)
* [**GreenSock**](http://www.greensock.com/gsap-js/)
* [**Famous**](http://famo.us/)

Or, if not one of these, choose one that uses [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame).

## Contributing

Please review the [guidelines for contributing](CONTRIBUTING.md) before opening a pull request. It includes docs for [building](CONTRIBUTING.md#building), [testing](CONTRIBUTING.md#testing), and handling [dependencies](CONTRIBUTING.md#installing-dev-dependencies).

<script data-gratipay-username="johnnyfreeman" data-gratipay-widget="button" src="//gttp.co/v1.js"></script>
