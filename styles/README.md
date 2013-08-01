#Styles folder

##Folder Structure

	|-- styles
	|   |-- CSS
	|   |   |-- min
    |   |   |   |-- global.min.css
	|   |-- SASS
    |   |   |-- global.scss

All javascript files go in here.

`|-- libs` is for all libraries included in the project. 

`|-- plugins` contains all plugins used in the project that are not built by us.

`app.js` contains all code functions specific to this project that are not better included as a separate plugin file.

`global.js` is common to all projects and includes comonly used functions such as: 
* The location of html snippets file (pulled in via AJAX)
* Console log definition (to prevent JS from breaking in lt IE8)

`jquery.ourplugin.0.1.js` is an example of a Zone created plugin. 

Plugins we write specific to this project should be stored with the framework prefix (most probably jquery) and the name and if necessary the version.


