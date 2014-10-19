(function() {
	angular.module('swipee', []).controller('UserCtrl', ['$scope', function($scope) {
		var myDataRef = new Firebase('https://swipee.firebaseio.com/');
	
		myDataRef.on('value', function(snapshot) {
			var newPost = snapshot.val();
			console.log("Event Name:" + newPost.event_name);
		});
    
    $scope.invites = {};
    $scope.invites[0] = {type: "event", name: "Seahawks game", time: "13:00", location: "Wilburt's House"};
    $scope.invites[1] = {type: "event", name: "Football", time: "18:00", location: "IMA"};
    $scope.invites[2] = {type: "event", name: "Study", time: "9:00", location: "Odegaard"};
    $scope.invites[3] = {type: "event", name: "Dinner", time: "19:00", location: "Chipotle"};
    
    $scope.clickInvite = function(event) {
      $(".collapse").collapse({'toggle': false});
      $(event.target).next(".collapse").collapse('toggle');
      $(".collapse").not(event.target).collapse('hide');
    }

    $(".collapse").click(function(event) {
      $(this).collapse('toggle');
    });
    
    $scope.clickLeftArrow = function(event) {
      $(event.target).parent(".inv").next(".collapse").animate({ marginRight: '90%' }, 500, function() {
        $(this).remove();
      });
      $(event.target).parent(".inv").animate({ marginRight: '90%' }, 500, function() {
        $(this).remove();
      });
    }
    
    $scope.clickRightArrow = function(event) {
      $(event.target).parent(".inv").next(".collapse").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
      $(event.target).parent(".inv").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
    }
    
	}]);
}());