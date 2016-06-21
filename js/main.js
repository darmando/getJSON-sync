"use strict";
	$(document).ready(function(){

		obtenerDatosJSON().then(function(data) {
		  let items = [];
		  $.each( data, function( key, val ) {
		    items.push("<li id='" + val.idAlumno + "'>" + val.nombre + "</li>");
		  });
		  $("<ul/>", {
		    "class": "lista_ejemplo",
		    "html": items
		  }).appendTo("body");

     	   alert("TERMINO");
		}).catch(function(err) {
		  console.log("Hubo un error al cargar el JSON", err);
		});		
	}); // FIN $(document).ready

// $.ajaxSetup({
//     async: false
// });
function obtenerDatosJSON(){  
  return new Promise(function(resolve, reject) {
		$.getJSON("js/datos.json") 	    	
	    .then(function(res) {
	        resolve(res);
	    })
	    .catch(function(err) {
	        reject(err);
	    });  
  });
}