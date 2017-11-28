app.controller('loginController', function ($scope, $rootScope, $cookies) {

    if ($rootScope.validateCookie()) {
        $rootScope.serviceView = true;
        $rootScope.urlChange('#/services');
    }



    $scope.uName = '';
    $scope.uPass = '';
    $scope.login = function () {
        if ($scope.uName == "admin" && $scope.uPass == "admin") {
            $cookies.put('utilityCookie', 'admin' + new Date().getTime() + 'pass');
            if ($rootScope.validateCookie()) {
                $rootScope.serviceView = true;
                $rootScope.urlChange('#/services');

            }
            // alert($cookies.get('utilityCookie'));
        } else {
            alert('Invalid UserName or Password');
            $scope.uName = '';
            $scope.uPass = '';
        }
    }
});