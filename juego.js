var comenzar= document.getElementById("game");
var coordenada = [
					[0,0,0]
					[0,0,0]
					[0,0,0]
							];
var incre = 0;


comenzar.addEventListener("click", jugar);

function jugar () {
	
	for (var w = 0; w <=2; w++) {
		for (var z = 1; z <=3; z++) {
			var casilla =document.getElementById(w + z);
			marcar(casilla,w,z);



		};

	};

}

function marcar (objeto,x,y) {
	function poner () {
		
		if (incre=0) {
			objeto.innerHTML = "X"; 
			incre++;
		} else {
  			objeto.innerHTML = "O"; 
  			incre-- ;
		}  
		
		var coordenada[x][y]=coordenada[x][y]+1;

	}
	objeto.addEventListener("click", poner);
}
}
