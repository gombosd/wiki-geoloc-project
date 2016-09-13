app.controller('HomeController', ['kozel', '$scope', 'kozelszoveg', function(kozel, $scope, kozelszoveg ){
	var lat=0;
	var long=10;
	$scope.lat = lat; 
	$scope.long = long;
	$scope.rad = 1000;
  	
  	$scope.nearme = function() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function (position) {
	                lat = position.coords.latitude; 
	                long = position.coords.longitude;	                

	                $scope.radplus = function(){
	                	$scope.rad += 100;
	                }

	                $scope.radminus = function(){
	                	$scope.rad -= 100;
	                }

	                kozel(lat,long,
	                	function(data){ 
				    		$scope.kozelihelyek = data.query.geosearch;

				    		for(var i=0;i<$scope.kozelihelyek.length;i++){
				    			kozelszoveg($scope.kozelihelyek[i].pageid, 
				    				function(data,idi){
				    					$scope.kozelihelyek.find(function(wut){
				    						return idi === wut.pageid;
				    					}).extract = data.query.pages[idi].extract
				    					console.log(idi)
				    				}
				    			);
				    		};
				    		console.log('lefutott')
				  		},
				  		$scope.rad);
	        });
	    };
	};


	$scope.$on('$routeChangeSuccess', function () {
  		$scope.nearme();
	});
}]);