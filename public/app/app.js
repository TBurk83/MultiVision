angular.module('app', [
	'ngResource', 
	'ngRoute',
	'accountServicesModule',
	'commonServicesModule',
	'mainModule',
	'loginModule',
	'adminModule'
]);

var routeRoleChecks = {
	admin: {
		auth: function(auth) {
			return auth.authorizeCurrentUserForRoute('admin');
		}
	}
}

angular.module('app').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { 
			templateUrl: '/partials/main/main',
			controller: 'mainCtrl'
		})
		.when('/admin/users', { 
			templateUrl: '/partials/admin/userIndex',
			controller: 'userIndexCtrl',
			resolve: routeRoleChecks.admin
		});
});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	});
});
