requirejs.config({
    paths: {
      "jquery": "lib/jquery-1.10.2.min",
      /*"bootstrap": "lib/bootstrap.min",*/
      "angular": "lib/angular.min",
      "sui": "lib/sui.min",
      "uploadify": "lib/jquery.uploadify",
      "validate": "lib/jquery.validate.min",
      "highcharts": "lib/highcharts",
      "datepicker": "lib/jquery-ui-datepicker-1.10.4.custom.min",
      "commonDirectives": "ng/common/commonDirectives"
    },
    shim: {
      "angular": {
        deps: ["jquery"],
        exports: 'angular' 
      },
      "sui": {
        deps: ["jquery"] 
      },
      "bootstrap": {
        deps: ["jquery"]
      },
      "uploadify": {
        deps: ["jquery"]
      },
      "validate": {
        deps: ["jquery"]
      },
      "highcharts": {
        deps: ["jquery"]
      },
      "datepicker": {
        deps: ["jquery"]
      },
      "sui": {
        deps: ["jquery"]
      }
    }
});
