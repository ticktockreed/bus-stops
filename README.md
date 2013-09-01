# Zone Boilerplate #

## Folder Structure

    |--boilerplate
        |-- scripts
        |-- styles
        |-- favicon.ico
        |-- humans.txt
        |-- index.html
        |-- package.json
        |-- references.md


`|-- scripts` contains ALL javascript files.

`|-- styles` contains all assets used in styling the site; CSS, SASS, SVG, images etc.

`|-- favicon.ico` is the basic favicon for the site - don't forget it.

`|-- humans.txt` tells us who has worked on the project, who helped, and what technologies were used.

`|-- index.html` is the basic page markup (distilled from the HTML5 Boilerplate).

`|-- references.md` is a list of links researched to inform this template

** Please view README.md files within each folder for more info **


**If you are the first to work on this project**

1. Change the Project details in `|-- package.json`
2. Add your name to `|-- humans.txt`

**If this has already been set up**

1. Add your name to the project in `|-- package.json`
2. Add your name to `|-- humans.txt`
<<<<<<< HEAD
=======
3. Run `npm install`

_____


**Version 0.1.0 Release Notes**

- add Release notes and to do
- Sass & Compass
- Semantic grid
- Reset method 
- Gruntfile with the watch task installed
- Grunt webfonts
- Modernizr
- Scripts folder with /lib, /plugins, main.js
- Empty index file (Maybe some dummy placeholder content?)
- Then maybe some extra options for the more advanced version:
- Twitter bootstrap
- Grid selection (Fixed, fluid)
- Code follows first draft of coding standards (not yet written)

**To Do**

- Font awesome
- Test all elements in template
- Test for Accessibility
- Print SCSS
- Check all code against coding standards (not yet written)
>>>>>>> 3da93b19ba776b61e57171f63e254eaee55fa8e1

## Setting up the project

|-- package.json is set to install the latest module versions compatible with grunt~0.4.1.

*Run (in this directory)*

    npm install --save-dev 

This will install all the node modules you require. The flag `--save-dev` will save the version number to package.json so that everyone has the same versions.

*Run* 

    bower install

This will install all the required lib dependencies.

*To begin working on the project run*

    grunt watch 


