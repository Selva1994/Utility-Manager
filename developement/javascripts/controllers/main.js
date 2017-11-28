var app = angular.module("utility", ["ngRoute", "ngCookies"]);

//Controllers

app.controller('MainController', function ($scope, $rootScope, $location, $cookies) {
    $rootScope.serviceView = false;
    $rootScope.urlChange = function (url) {
        window.location = url;
    }
    $rootScope.validateCookie = function () {
        if ($cookies.get('utilityCookie')) {
            return true;
        }
        return false;
    }
    $rootScope.logout = function () {
        $cookies.remove('utilityCookie');
        $rootScope.urlChange("/");
    }
});

app.controller('serviceController', function ($scope, $rootScope, $cookies) {

    if ($rootScope.validateCookie()) {
        $rootScope.serviceView = true;
    }else{
        $rootScope.urlChange('/');
    }
});

//Route Configuration
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "../../views/landing.html",
            controller: "loginController"
        })
        .when('/services', {
            templateUrl: "../views/services.html",
            controller: "serviceController"
        });
});

//Location provider to remove ! from !# in route url 
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);