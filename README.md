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


