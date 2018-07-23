# dom-size

## [See it here](https://alijaya.github.io/dom-size/)

## What is it?

So you want to find position of certain object in DOM space.

You search about how to get the top and left position.

You see basically there's a ton (I exagerate this, but you know) of property in HTMLElement, you see clientTop, offsetTop, etc etc...

Which one that you need to use?

So just see this simple web, it's based on [this Microsoft site](https://msdn.microsoft.com/en-us/library/hh781509%28VS.85%29.aspx?f=255&MSPPError=-2147217396) (surprise, Surprise!)

## What is BCR?

It's abbreviation of BoundingClientRect. You get it by `element.getBoundingClientRect()`

## What is CS?

It's abbreviation of ComputedStyle. You get it by `window.getComputedStyle(element, null)`
