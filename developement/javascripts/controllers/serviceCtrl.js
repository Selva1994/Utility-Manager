app.controller('serviceController', function ($scope, $rootScope, $cookies) {
    alert($rootScope.validateCookie())
    if (!$rootScope.validateCookie()) {
        $rootScope.serviceView = false;
    }
});