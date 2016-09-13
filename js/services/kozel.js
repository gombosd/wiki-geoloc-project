app.factory('kozel',['$http',function($http){
  return function(lat, long, callback, rad){
	  	$http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius='+rad+'&gscoord='+lat+'%7C'+long+'&gslimit=30&format=json&callback=JSON_CALLBACK')
	    .success(function(data){
	    	callback(data)
	    })
	    .error(function(err){
	    	callback(err)
	    });
	}
}]);
// background-image: url("http://wallpapercave.com/wp/UfRgjiC.jpg");