var fs = require("fs");
var path=require("path");
var files = fs.readdir("/home/gaganjeet",function(err,files)
	{
		files.forEach(function(fileName)
		{
			var name = path.join("/home/gaganjeet",fileName)
			var stats=fs.statSync(name);
			if(stats.isFile() && fileName != ".DS_Store")
			{
				fs.readFile(name,"UTF-8",function(err,contents)
				{
					console.log(contents);

				})
			}

		})


	});