app.controller('loginController', function ($scope, $rootScope, $cookies) {
    $scope.uName = '';
    $scope.uPass = '';
    $scope.login = function () {
        alert($scope.uName)
        if ($scope.uName == "admin" && $scope.uPass == "admin") {
            $cookies.put('utilityCookie', 'admin' + new Date().getTime() + 'pass');
            if ($rootScope.validateCookie()) {
                $rootScope.serviceView = true;
            }
            alert($cookies.get('utilityCookie'));
        } else {
            alert('Invalid UserName or Password');
            $scope.uName = '';
            $scope.uPass = '';
        }
    }
});