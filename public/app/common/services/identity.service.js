angular.module('common').factory('identity', function($window, user) {
    var currentUser = undefined;

    if (!!window.bootstrappedUserObject) {
        currentUser = new user();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }

    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});
