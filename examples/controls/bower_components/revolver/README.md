# Revolver [![Build Status](https://travis-ci.org/johnnyfreeman/revolver.png?branch=master)](https://travis-ci.org/johnnyfreeman/revolver) [![Code Climate](https://codeclimate.com/github/johnnyfreeman/revolver.png)](https://codeclimate.com/github/johnnyfreeman/revolver)

Revolver is a javascript library to help you build your own content slider. It has a sensible [API](api/README.md) (seriously, go check it out) that helps you get from mockup to reality with less friction than most of the other "cookie-cutter" sliders out there.

One important difference is, Revolver is a much lower component than most others. It's more of a framework than it is a complete solution. So, naturally, hand-writing a little javascript comes with the territory. Let's get started!

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```shell
bower install revolver
```

It will resolve all of Revolver's dependencies for you, no need to go and download those separately. If you are unfamiliar with it, I highly recommend you take a look!

Of course, you can still take the ol' fashioned approach and [download](https://github.com/johnnyfreeman/revolver/archive/master.zip)/unzip anywhere in your project. Just make sure you also do the same for Revolver's hard dependencies: [Lodash](http://lodash.com/) and [Bean](https://github.com/fat/bean).

## Usage

There are only two things that are required to instantiate Revolver:

1. **Container**: via [container](api/options/container.md) or [containerSelector](api/options/containerselector.md) options.
2. **Slides**: via [slides](api/options/slides.md) or [slidesSelector](api/options/slidesselector.md) options.

#### Using DOM Nodes

```javascript
var mySlideContainer = document.getElementById('slidesContainer');
var mySlides = mySlideContainer.getElementsByClassName('slide');

var mySlider = new Revolver({container: mySlideContainer, slides: mySlides});
```

#### Using Selectors

```javascript
var mySlider = new Revolver({containerSelector: '#slidesContainer', slideSelector: '.slide'});
```

You may also implement any combination of the two methods.

## Examples

Because of Revolver's unopinionated philosophy, it does very little out of the box and usually requires some small amount of customization to hit the sweet spot.  Here are a few ideas to get you started:

* [**barebones-example**](https://github.com/johnnyfreeman/revolver-barebones-example): An out-of-the-box example.
* [**fade-example**](https://github.com/johnnyfreeman/revolver-fade-example): Slides fade in and out from each other using jQuery.
* [**reveal-example**](https://github.com/johnnyfreeman/revolver-reveal-example): A curtain-like transition using Qwery, Bonzo, and CSS3 animations.
* [**inception-example**](https://github.com/johnnyfreeman/revolver-inception-example): A slider within a slider using Mootools.

## Extensions

* [**jquery-plugin**](https://github.com/johnnyfreeman/revolver-jquery-plugin): A jQuery plugin.
* [**mootools-plugin**](https://github.com/johnnyfreeman/revolver-mootools-plugin): A MooTools plugin.
* [**bonzo-plugin**](https://github.com/johnnyfreeman/revolver-bonzo-plugin): A Bonzo plugin.
* [**jquery-fade-transition**](https://github.com/johnnyfreeman/revolver-jquery-fade-transition): A fading transition handler using jQuery.
* [**jquery-slide-transition**](https://github.com/johnnyfreeman/revolver-jquery-slide-transition): A slide-like transition handler using jQuery.

## Contributing

Please review the [guidelines for contributing](CONTRIBUTING.md) before opening a pull request. Includes docs for [building](CONTRIBUTING.md#building), [testing](CONTRIBUTING.md#testing), and handling [dependencies](CONTRIBUTING.md#installing-dev-dependencies).
