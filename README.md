# DMD's Web Development Guidelines

*Note to the reader: This document is a work in progress.*

## Development

### Local environment

This assumes the following global installs:

- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [bower](http://bower.io/)
- [sass](http://sass-lang.com/)
- [gulp](http://gulpjs.com/)

To install dependencies, fork our starter repo (or clone the existing project repo) and run the following in your project directory:

    $ npm install

Then run the following command:

    $ gulp

...which should:
  - Watch files for changes as you dev
  - Compile your SCSS to CSS
  - Concatenate and minify your JS and CSS
  - Update your live browser view via browsersync


### Versioning

Work with a "stable master" philosophy, meaning that the `master` branch is the production deploy. All work should be completed on the `develop` branch and pushed to master before deploying to production. More information can be found [here](http://nvie.com/posts/a-successful-git-branching-model/).


## CSS

DMD hopes to impart a "mobile-first" philosophy, utilizing only `min-width` media queries. This means that the majority of application styling will be in `base/_global.scss`.  Variable names should be camel cased. All the files to be included (along with a reset) in `src/scss/app.scss`. The scss structure looks like:

    # Generic set up
    app.scss
    /base
      _variables.scss
      _mixins.scss
      _normalize.scss
      _global.scss
      _utilities.scss

    # Additional scss files
    /screens
      tablet.scss
      tabletLarge.scss
      desktop.scss


CSS Guidelines are adapted from [BEM](http://getbem.com/naming/) using the "Block Element Modifier" semantic CSS naming convention  Avoid overqualified selectors. The format is as follows:

    .<block>[--modifierName|__elementName]
    
### Block
*Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.*

Syntax: `.nav`

    <nav class="nav"></nav>


### Block__element

Syntax: `.nav__item`

Parts of a block and have no standalone meaning. Any element is semantically tied to its block.
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a class="nav__link" href="#">Link</a></li>
    </ul>
  </nav>

### componentName--modifierName

Syntax: `.nav__item--last`

    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="#">Link</a></li>
        <li class="nav__item nav__item-last"><a class="nav__link" href="#">Link</a></li>
      </ul>
    </nav>


We use SCSS as our preprocessor, mostly for variables and mixins. Do not nest selectors as this can quickly become difficult to read.

### Utility classes

Syntax: `.u-<utilityName>`

It is recommended to create utility selectors as necessary, these should be prefixed with `u-` and should be universal. These selectors should not be modified from their initial definition. If you need to use more than one utility selector in a given element, create a new `componentName` selector.

    .u-textCenter
    .u-bgColorRed


### Format

Define the css selectors with an opening curly on the first line. All declarations must be indented 2 spaces on the following lines, one declaration per line, in alphabetical order. Single declaration selectors can remain on one line. All indentation should be 2 character spaces. Use 'single quotes' over "double quotes" where applicable.

    /* Multi declaration selector */
    .row {
      float:left;
      position: relative;
      width: 100%;
    }

    /* Single declaration selector */
    .row--even { background: $altWhite; }
    .row--active { background: $blue; }

    .u-alignLeft { float:left; }

`js-` selectors should never be styled and only be used for event interactions.


## HTML

Use semantic HTML5 Markup. Never use an ID unless necessary. See [CSS](#css) section for information about class naming.

## Javascript

Use jQuery. All files should be located in `src/js`. Try to keep all Javascript lines to a maximum of 80 characters. This can be unavoidable in some cases, so if you must break 80 characters, do not exceed 120.  All events should be called using `js-` prefixed selector.

### Commenting

Use `/*! COMMENT */` as a comment block. Use multiline comments over single line comments.

### Format

Each JS file should use jQuery and be wrapped with an IIFE. Each method should be documented with a few words or sentence about what the interaction is doing. Indentation should be 2 character spaces. Use single quotes over double quotes. 

    ;(function(window, $) {

      /*! 
       * Document ready 
       */
      $(function() {

        /*!
         * Toggle mobile nav
         */
        $('.js-toggleNav').on('click', function(e) {
          e.preventDefault();
          $('body').toggleClass('is-showingMobileNav');
        });

        // ...
      });
    })(window, jQuery);

### Custom classes

When creating custom classes, use a separate file with the class created using prototypical inheritance. Private variables should be appended with `_` as opposed to prefixing. Comments should be able to be read by jsdoc use multiline, `/** COMMENT */`. Comments that begin with `/*!` are ignored by jsdoc.

    ;(function(window, $){

      /**
       * A Custom Class
       *
       * @param {String=} options - description.
       * @constructor
       */
      function CustomClass(title) {
        this.title_ = title || 'Title';
      };

      /**
       * Gets the title
       *
       * @memberof CustomClass
       * @returns {String}
       */
      CustomClass.prototype.getTitle = function() {
	      var self = this;
        return self.title_;
      };

      /**
       * Bind to window
       */
      window.CustomClass = CustomClass;

    })(window, jQuery);

Usage in main application file.

    ;(function(window, $, CustomClass) {

      var item = new CustomClass();
      console.log(item.getTitle()); // Title

    })(window, $, CustomClass);

## Questions

If there are any questions please chat / email / hangout / call [joel@uconn.edu](mailto:joel@uconn.edu)
