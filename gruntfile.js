module.exports = (grunt)=>{
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        sass:{
            dist:{
                options:{
                    implementation:require('node-sass'),
                    includePaths: ['node_modules/']
                },
                files:{
                    'css/styles.css':'sass/index.scss',
                }
            }
        },
        //  - Browserify:
        //      • Allows use of `require()`
        //      • ES6 to regular 'ol JS
        //      • Uglifies JS
        browserify:{
            main:{
                options:{
                    transform:[['babelify',{presets:['@babel/preset-env']}]],
                    browserifyOptions: {debug:false}
                },
                files:{
                    'scripts/vendor.js':'js/index.js',
                  // 'scripts/vendor-urlshortener.js':'node_modules/node-url-shortener/app.js'
                }

            },
            vendor:{
                options:{
                    transform:[['uglifyify', { global: true, sourceMap: false }]],
                    browserifyOptions: {debug:false}
                },
                files:{
                    'scripts/vendor-urlshortener.js':'node_modules/node-url-shortener/index.js'
                }
            }
        },
        /*browserify:{
            src:['/js/shorten.js'],
            dest: '/scripts/vendor.js',
            
        },*/
        watch:{
            scss:{
                tasks:['sass'],
                files:'sass/**.scss',
                options:{
                    livereload:true
                }
            },
           js:{
               tasks:['browserify:main'],
               files:['js/**.js'],
               options:{
                livereload: true
               }
           }
        
        },
       
    })
    grunt.registerTask('default',['sass','watch'])
}