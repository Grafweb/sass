 System.config({
    baseURL: '/',
    meta: {
        "workspace/sass/sass/app/main.js" :{
            deps: [
                "jquery"
            ]
        }
    },
     map: {
        "jquery": "bower_components/jquery/dist/jquery.min.js",
    }
  });

  // loads /app/main.js
System.import('workspace/sass/sass/app/main.js');


//sample works