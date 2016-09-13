app.factory('kozelszoveg',['$http',function($http){
  return function(id, callback){
	  	$http.jsonp('https://en.wikipedia.org/w/api.php?format=json&callback=JSON_CALLBACK&action=query&prop=extracts&exintro=&explaintext=&pageids='+id)
	    .success(function(data){
	    	callback(data,id)
	    })
	    .error(function(err){
	    	callback(err)
	    });
	}
}]);
//https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&&iiprop=url&pageids=1489790