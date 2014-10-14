accountServices.factory('auth', function($http, identity, $q, user) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();

			$http.post('/login', {
				username: username,
				password: password
			}).then(function(response) {
				if(response.data.success) {
					var authedUser = new user();
					angular.extend(authedUser, response.data.user);
					identity.currentUser = authedUser;
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		},
		logoutUser: function() {
			var dfd = $q.defer();

			$http.post('/logout', {logout: true}).then(function(){
				identity.currentUser = undefined;
				dfd.resolve();
			}); 
			return dfd.promise;
		},
		authorizeCurrentUserForRoute: function(role) {
			if(identity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		}
	}
});