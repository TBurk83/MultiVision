angular.module('account').controller('loginCtrl',
    function($scope, $http, $location, identity, notifier, auth) {

        $scope.identity = identity;

        $scope.signin = function(username, password) {
            auth.authenticateUser(username, password).then(function(success) {
                if (success) {
                    notifier.notify('Logged In!');
                } else {
                    notifier.notify('Fail!');
                }
            });
        };

        $scope.signout = function() {
            auth.logoutUser().then(function() {
                $scope.username = "";
                $scope.password = "";

                notifier.notify('Logged Out!');

                $location.path('/');
            });
        };
    });
