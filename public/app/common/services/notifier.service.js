commonServices.factory('notifier', function(toastr) {
	return {
		notify: function(msg) {
			toastr.success(msg);
			console.log(msg);
		}
	}	
});