#Scripts folder

##Folder Structure
    
    |-- scripts
    |  |-- plugins
    |  |  |-- jquery.validate.js
    |  |  |-- jquery.zone.plugin.0.1.js
    |  |-- base.js
    |  |-- config.js
    |  |-- globals.js
    |  |-- snippets.html
    |  |-- testmodule.js

**All of *our* javascript files go in here.**

Note: Libraries and framework JS files should be imported with Bower

`|-- plugins` contains all plugins used in the project either built by us or from a third party.

Plugins made by us should contain the .zone name.
eg: `jquery.zone.plugin.0.1.js`

`base.js` contains all code functions specific to this project that are not better included as a separate plugin file.

`config.js` is the main JS file used to require the site's main modules. And any files that are not included in the module pattern

`globals.js` is a list of site wide variables.

`snippets.html` contains html to be injected into the page.

`testmodule.js` is an example file - create any new modules with this as a template
