module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            options: {
                sourceMap: true,
                sourceMapName: "dist/map/animadio.css.map",
                banner: "/* <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> License */\n\n",
                footer: "\n/* Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n Updated: <%= grunt.template.today('dS mmm yyyy @ h:MM:ss TT') %> */"
            },
            dist: {
                src: [
                    /***** NORMALIZE *****/
                    "node_modules/normalize.css/normalize.css",

                    /***** DISPLAY *****/
                    "src/display/grid.css",
                    "src/display/flexbox.css",
                    "src/display/show.css",
                    "src/display/text.css",

                    /***** COLORS *****/
                    "src/colors/color-var.css",
                    "src/colors/color.css",
                    "src/colors/color-bg.css",

                    /***** SPACES *****/
                    "src/spaces/space.css",
                    "src/spaces/space-var.css",

                    /***** BORDERS *****/
                    "src/borders/bord-var.css",
                    "src/borders/bord-global.css",
                    "src/borders/bord-style.css",
                    "src/borders/bord-width.css",
                    "src/borders/bord-color.css",
                    "src/borders/bord-radius.css",

                    /***** SIZES *****/
                    "src/sizes/space-var.css",
                    "src/sizes/size-var.css",

                    /***** SHADOWS *****/
                    "src/shadows/shadows-var.css",
                    "src/shadows/shabox.css",
                    "src/shadows/shabox-blur.css",
                    "src/shadows/shabox-spread.css",
                    "src/shadows/shatex.css",
                    "src/shadows/shatex-blur.css",

                    /***** ANIMATIONS *****/
                    "src/sizes/animation-var.css",
                    "src/sizes/transform-var.css",
                    "src/animations/keyframes.css",
                    "src/animations/name.css",
                    "src/animations/duration.css",
                    "src/animations/delay.css",
                    "src/animations/timing.css",
                    "src/animations/count.css",
                    "src/animations/direction.css",
                    "src/animations/fill.css",
                    "src/animations/origin.css",

                    /***** TAGS *****/
                    "src/tags/tag-var.css",
                    "src/tags/tag.css",

                    /***** NAVBAR *****/
                    "src/elements/navbar-var.css",
                    "src/elements/navbar.css",

                    /***** ELEMENTS *****/
                    "src/elements/button.css",
                    "src/elements/slider.css",
                    "src/elements/menu.css",
                    "src/elements/gallery.css",
                    "src/elements/table.css",
                    "src/elements/form.css",
                    "src/elements/footer.css"
                ],
                dest: "dist/animadio.css"
            }
        },

        postcss: {
            options: {
                processors: [
                    require("autoprefixer")({browsers: "last 2 versions"}) // add vendor prefixes
                ]
            },
            dist: {
                src: "dist/animadio.css"
            }
        },

        cssmin: {
            target: {
                files: [{
                    "dist/min/animadio.min.css": ["dist/animadio.css"]
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-cssmin");


    grunt.registerTask("default", ["concat", "postcss", "cssmin"]);
};