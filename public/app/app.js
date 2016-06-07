angular.module('app', [
    'ngResource',
    'ngRoute',
    'common',
    'main',
    'account',
    'admin',
    'courses'
]);

angular.module('common', []);
angular.module('main', []);
angular.module('account', ['common']);
angular.module('admin', []);
angular.module('courses', []);

angular.module('app').value('toastr', toastr);

var routeRoleChecks = {
    admin: {
        authenticate: function(auth) {
            return auth.authorizeCurrentUserForRoute('admin');
        }
    },
    user: {
        authenticate: function(auth) {
            return auth.authorizeAuthenticatedUserForRoute();
        }
    }
};

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mainCtrl'
        }).when('/admin/users', {
            templateUrl: '/partials/admin/userIndex',
            controller: 'userIndexCtrl',
            resolve: routeRoleChecks.admin
        }).when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'signupCtrl'
        }).when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'profileCtrl',
            resolve: routeRoleChecks.user
        }).when('/courses', {
            templateUrl: '/partials/courses/course-list',
            controller: 'courseListCtrl'
        });
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    });
});
