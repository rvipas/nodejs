var http=require("http");

fs=require("fs");


http.createServer(function(req,res){

	fs.readFile("./index.html",function(err,html){
		console.log("Petición recibida");
		var i=0;
			res.writeHead(200,{"Content-Type":"application/json"})
			res.write(JSON.stringify({username:"rafa", password:"err"}));
		res.end();
	}); 

}).listen(8080);