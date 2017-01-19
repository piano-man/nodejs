var https = require('https')
var fs = require('fs')
var options = {
	hostname : "en.wikipedia.org",
	port : 443,
	path : '/wiki/Roger_Federer',
	method : 'GET'
};

var request = https.request(options,function(res){
	var responseBody = "";
	res.setEncoding('UTF-8');
	res.once('data',function(chunk){
		console.log(chunk);

	});
	res.on("data",function(chunk){
		responseBody += chunk;

	});
	res.on('end',function(){
		fs.writeFile("roger.html",responseBody,function(err){
			if(err){
				throw err;
			}
			console.log("file downloaded")
		});
	});
});
request.on("error",function(err){
	if(err)
		throw err;
})
request.end()