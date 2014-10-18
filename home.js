(function() {
	angular.module('swipee', []).controller('UserCtrl', ['$scope', function($scope) {
		var myDataRef = new Firebase('https://swipee.firebaseio.com/');
	
		myDataRef.on('value', function(snapshot) {
			var newPost = snapshot.val();
			console.log("Event Name:" + newPost.event_name);
		});
    
    $scope.l = function() {
      alert("l");
    }
    $scope.r = function() {
      alert("r");
    }
    
    $(".collapse").collapse({'toggle': false});
    $(".inv").click(function(event) {
      $(this).next(".collapse").collapse('toggle');
      $(".collapse").not(this).collapse('hide');
    });
    $(".collapse").click(function(event) {
      $(this).collapse('toggle');
    });
	}]);
}());