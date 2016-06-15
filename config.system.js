 System.config({
    baseURL: '/',
    meta: {
        "app" :{
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
  System.import('app/main.js');