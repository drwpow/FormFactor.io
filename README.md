# FormFactor.io

An experiment to generate CSS-only form elements that meet the following criteria:

 - Are user-friendly
 - Use only `input` and `label` elements (no `div`s or `span`s)
 - Are HTML5-compliant
 - Use minimal CSS
 - Are accessible

## Demo

[FormFactor.io](http://formfactor.io)

## Middleman

This repo is for the site itself. It uses [Middleman](//middlemanapp.com) as its
static site generator, and [MVCSS](//mvcss.github.io) for CSS architecture.

Most of the code that generates the form elemens is within
[`_form.sass`](https://github.com/dangodev/FormFactor.io/blob/master/source/assets/stylesheets/components/_form.sass).
But again, this repo is for the entire site; the demo itself is meant to be the
easiest place to pull code from.
