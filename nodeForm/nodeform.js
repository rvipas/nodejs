var http=require("http");

fs=require("fs");


http.createServer(function(req,res){

	if(req.url.indexOf("favicon.ico")>0){return;}

	console.log("=========\n\n");
	console.log(req);
	console.log("=========\n\n");

	fs.readFile("./index.html",function(err,html){
		console.log("Petición recibida");
		var html_string=html.toString();
		var params=[],parametros={};
		var variables=html_string.match(/[^\{\}]+(?=\})/g);

		if(req.url.indexOf("?")>0){
			var url_data=req.url.split("?");
			var params=url_data[1].split("&");
		}

		for (var i = params.length - 1; i >= 0; i--) {
			var parametro=params[i];
			var param_data=parametro.split("=");
			parametros[param_data[0]]=param_data[1];
		};

		for (var i = variables.length - 1; i >= 0; i--) {
			var variable=variables[i];
			html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
		};

		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
		res.end();
	}); 

}).listen(8080);