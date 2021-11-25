//script carrusel
var myIndex = 0;

	function carrusel(){
		var i;
		var x = document.getElementsByClassName("imagenes");
		for(i = 0; i < x.length; i++){
			x[i].style.display = "none";
		}
		myIndex++;
		if(myIndex > x.length){
			myIndex = 1
		}
		x[myIndex-1].style.display = "block";
		setTimeout(carrusel, 3000); //cambiar cada 1.5 segundos
	}
	carrusel();