# omeka-plugin-analytics

Simple plugin to enable google analytics tracking in Omeka sites.

In addition to basic tracking the plugin also sends custom events when audio
and video resources are played and when the page 'hash' changes (allowing
tracking of Neatline navigation).

## Installation

Clone or download and extract a zip of the repository into it in the Omeka 
`plugins` directory and rename the directory from `omeka-plugin-analytics`
 to `Analytics`.

Enable the plugin in the Omeka plugins interface. There is a single
configurable setting which is the Google Analytics 'property_id' - you
should obtain this from your Google Analytics profile.

## Dependencies

Each page where this plugin is to be used must also have access to jQuery.

## Building the project

If you just want to use the plugin you do **not** need to rebuild it. However if
you want to extend or customise the plugin the following describes how to 
rebuild it.

The project uses `nodejs` to preprocess its resources.

Install build dependencies with `npm install`.

Then build javascript with `gulp` (or `./node_modules/.bin/gulp` if you do not
have gulp installed globally). Use `gulp watch` to watch files for changes and 
check when they occur.

If adding a new js file it must be added to the list in the gulpfile, the
ordering is important (as it is a simple concat).