(function() {
	angular.module('swipee', []).controller('UserCtrl', ['$scope', function($scope) {
		var myDataRef = new Firebase('https://swipee.firebaseio.com/');
	
		myDataRef.on('value', function(snapshot) {
			var newPost = snapshot.val();
			console.log("Event Name:" + newPost.event_name);
		});
    
    
    $scope.invites = [];
    $scope.invites[0] = {type: "event", name: "Seahawks game", time: "13:00", location: "Wilburt's House", color: "blue"};
    $scope.invites[1] = {type: "event", name: "Football", time: "18:00", location: "IMA", color: "green"};
    $scope.invites[2] = {type: "event", name: "Study", time: "9:00", location: "Odegaard", color: "red"};
    $scope.invites[3] = {type: "event", name: "Dinner", time: "19:00", location: "Chipotle", color: "purple"};
    
    $scope.clickInvite = function(event) {
      if (!$(event.target).hasClass("arrows")) {
        var info = $(event.target).next(".info");
        if (info.css("height") == "0px") {
          info.animate({height: "75px", opacity: 10}, 100);
        }
        else {
          info.animate({height: "0px", opacity: 0}, 100);
        }
        $(".info").not(info).animate({height: "0px", opacity: 0}, 100);    
      }
    }
    
    $scope.clickLeftArrow = function(event) {
      $(event.target).parent(".inv").next(".info").animate({ marginRight: '90%' }, 500, function() {
        $(this).remove();
      });
      $(event.target).parent(".inv").animate({ marginRight: '90%' }, 500, function() {
        $(this).remove();
      });
    }
    
    $scope.clickRightArrow = function(event) {
      $(event.target).parent(".inv").next(".info").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
      $(event.target).parent(".inv").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
    }
    
	}]);
}());