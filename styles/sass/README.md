#SASS folder

##Folder Structure

	|-- SASS
	|   |-- _base.scss
	|   |-- _grid.scss
	|   |-- global.scss


`|   |-- _base.scss` contains variables for colour, fonts and spacing used in the site.


`|   |-- _grid.scss` contains the semantic grid used for Responsive web builds.
**needs fixing** to have push and pull classes work with right and left positioning rather than margins.

`|   |-- global.scss` references all the files it needs to compile the screen css.
**This file is only used to import other files**

`|  |-- styles.scss` contains all styles used in the Design Kit should be written here as mixins `@mixin` or extendable `@extend` classes. Use `@mixin` for styles with variable attributes and `@extend` for full class extensions. Examples of how to markup a mixin and extend class are contained in the file.


_______
## Notes

NB: All files but global.scss are prefixed with an underscore (eg: `_base.scss`) - this is so that they are not compiled with the `watch` command.

NB: when creating new variables in SASS make sure they are namespaced such that names are hierarchical. For instance `$color-grey-dark` **not** `$color-dark-grey`