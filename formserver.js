var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
	if(req.method == 'GET')
	{
		res.writeHead(200,{'Content-Type' : 'text/html'})
		fs.createReadStream('/home/gaganjeet/Desktop/form.html','UTF-8').pipe(res)
	}
	else if(req.method == 'POST')
	{
		var body = ''
		req.on('data',function(chunk){
			body += chunk


			})
		req.on('end',function(){
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(`
				<!DOCTYPE html>
				<html>
				<head>
				<body>
				<h1>data of your form</h1>
				<p>${body}</p>
				</body>
				</head>
				</html


				`)

		})

	}

}).listen(3001)