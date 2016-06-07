angular.module('app', [
	'ngResource', 
	'ngRoute',
	'common',
	'main',
	'account',
	'admin'
]);

angular.module('common', []);
angular.module('main', []);
angular.module('account', []);
angular.module('admin', []);

var toastr = {} 