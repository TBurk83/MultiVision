admin.controller('userIndexCtrl',
	function($scope, user) {
		$scope.users = user.query(); 
	});