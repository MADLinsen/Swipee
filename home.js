(function() {
	angular.module('swipee', []).controller('UserCtrl', ['$scope', function($scope) {
		var myDataRef = new Firebase('https://swipee.firebaseio.com/');
	
		myDataRef.on('value', function(snapshot) {
			var newPost = snapshot.val();
			console.log("Event Name:" + newPost.event_name);
		});
    
    $(".collapse").collapse({'toggle': false});
    $(".inv").click(function(event) {
      
      // Is collapsed
      if (!$(this).next(".collapse").is(":visible") && $(event.target).hasClass("inv")) {
        $(this).next(".collapse").collapse('toggle');
        $(".collapse").not(this).collapse('hide');
      }
      // Is expanded
      if ($(this).next(".collapse").is(":visible")) {
        $(this).next(".collapse").collapse('toggle');
      }
    });
    
    $(".collapse").click(function(event) {
      $(this).collapse('toggle');
    });
    
    $(".arrow-left").click(function(event) {
      var collapse = $(this).parent(".inv").next(".collapse");
      collapse.animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
      $(this).parent(".inv").animate({ marginRight: '90%' }, 500, function() {
        $(this).remove();
        $(this).next(".collapse").remove();
      });
    });
    
    $(".arrow-right").click(function(event) {
      $(this).parent(".inv").next(".collapse").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
      $(this).parent(".inv").animate({ marginLeft: '90%' }, 500, function() {
        $(this).remove();
      });
    });
    
	}]);
}());