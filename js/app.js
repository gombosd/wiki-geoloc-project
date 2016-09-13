var app = angular.module("Geoloc", ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/hits', { 
      controller: 'HomeController', 
      templateUrl: 'views/hits.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});