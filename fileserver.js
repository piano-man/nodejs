var http = require('http')
var fs = require('fs')
var path = require('path')

http.createServer(function(req,res){
	if(req.url =='/') {
		fs.readFile('/home/gaganjeet/Desktop/index.html',"UTF-8",function(err,html){
			res.writeHead(200,{"Content-Type": "text/html"})
			res.end(html)
		})
	}
	else if(req.url.match(/.css$/))
	{
		var csspath= `/home/gaganjeet/Desktop/${req.url}`;
		var fileStream = fs.createReadStream(csspath,'UTF-8')
		res.writeHead(200,{'Content-Type' : 'text/css'})
		fileStream.pipe(res)

	}
	else if(req.url.match(/.jpg$/))
	{
		 var imgpath = `/home/gaganjeet/Desktop/${req.url}`
		 var imgstream = fs.createReadStream(imgpath)
		 res.writeHead(200,{'Content-Type' : 'image/jpeg'})
		 imgstream.pipe(res)
	}
	else
	{
		res.writeHead(404,{"Content-Type":"text/plain"})           
		res.end("file not found")

	}

}).listen(3000)
