const { mix } = require('laravel-mix');

let Mix = require('laravel-mix').config;
let dotenv = require('dotenv')

dotenv.config({
    path: Mix.Paths.root('.env')
});

Mix.initialize();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
    jquery: ['$', 'window.jQuery']
});

mix
   // JS App Entry - Multiple Apps
   .js('resources/assets/js/entry/demo.js', 'public/js/survey')
   .js('resources/assets/js/entry/app.js', 'public/js/survey')
   .js('resources/assets/js/entry/app2.js', 'public/js/survey')

   // SASS
   .sass('resources/assets/sass/app.scss', 'public/css')

   // Vendor libraries
   .extract([
       'lodash',
       'bootstrap-sass',
       'jquery',      
       'axios',
       'vue'
   ]);

// Source Maps
if (! Mix.inProduction) {
    mix.sourceMaps();
}

