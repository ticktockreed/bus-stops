#SASS folder

##Folder Structure

	|-- SASS
	|   |-- _base.scss
	|   |-- _grid.scss
	|   |-- global.scss


`|   |-- _base.scss` contains variables for colour, fonts and spacing used in the site.

`|   |-- _grid.scss` contains the semantic grid used for Responsive web builds

`|   |-- global.scss` references all the files it needs to compile the screen css.


_______
## Notes

NB: All files but global.scss are prefixed with an underscore (eg: `_base.scss`) - this is so that they are not compiled with the `watch` command.

NB: when creating new variables in SASS make sure they are namespaced such that names are hierarchical. For instance `$color-grey-dark` **not** `$color-dark-grey`