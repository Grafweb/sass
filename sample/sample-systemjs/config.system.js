 System.config({
    baseURL: '/',
    "defaultJSExtensions": true,
    meta: {
        "wp-content/themes/navireo_rwd/delete/test/app/main.js" :{
            deps: [
                "jquery"
            ]
        },
        "wp-content/themes/navireo_rwd/delete/test/app/bx-slider-custom.js" : {
             deps: [
                "jquery",
                "bxslider"
            ]
        }
    },
     map: {
        "jquery": "wp-content/themes/navireo_rwd/bower_components/jquery/dist/jquery.min.js",
        "bxslider": "wp-content/themes/navireo_rwd/delete/test/jquery.bxslider.min.js"
    }
  });

  // loads /app/main.js
  //wp-content/themes/navireo_rwd/delete/test
System.import('wp-content/themes/navireo_rwd/delete/test/app/main.js');