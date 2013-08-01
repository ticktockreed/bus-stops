#Scripts folder

##Folder Structure

	|-- scripts
	|   |-- libs
	|   |   |-- modernizr.js
	|   |   |-- selectivizr.js
	|   |-- plugins
	|   |   |-- jquery.validate.js
	|   |-- app.js
	|   |-- global.js
	|   |-- jquery.ourplugin.0.1.js

All javascript files go in here.

The `libs` folder is for all libraries included in the project. 

The `plugins` folder contains all plugins used in the project that are not built by us.

The `app.js` file contains all code functions specific to this project that are not better included as a separate plugin file.

The `global.js` file is common to all projects and includes comonly used functions such as: 
* The location of html snippets file (pulled in via AJAX)
* Console log definition (to prevent JS from breaking in lt IE8)

Plugins we write specific to this project should be stored with the framework prefix (most probably jquery) and the bame and if necessary the version.


