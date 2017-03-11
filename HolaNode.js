var http=require("http");

var manejador = function(solicitud,respuestas){

	console.log("Petición recibida");
	respuesta.end("Hola Mundo");

};


var server=http.createServer(manejador);

server.listen(8080);