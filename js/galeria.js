var num = 1;
var aux = 0;
/*
function Adelante() {
	num++;
	aux = num;

	if (num > 15) {
		num = 1;
	}//Fin del if.
	var foto1 = document.getElementById("Visor1");
	foto1.src = "./img/foto"+num+".jpg";
	num++;
	if (num > 15) {
		num = 1;
	}//Fin del if.
	var foto2 = document.getElementById("Visor2");
	foto2.src = "./img/foto"+num+".jpg";
	num++;
	if (num > 15) {
		num = 1;
	}//Fin del if.
	var foto3 = document.getElementById("Visor3");
	foto3.src = "./img/foto"+num+".jpg";
	num++;
	if (num > 15) {
		num = 1;
	}//Fin del if.
	var foto4 = document.getElementById("Visor4");
	foto4.src = "./img/foto"+num+".jpg";
	num++;
	if (num > 15) {
		num = 1;
	}//Fin del if.
	var foto5 = document.getElementById("Visor5");
	foto5.src = "./img/foto"+num+".jpg";

	if (num > 4) {
		num = num - 4;
	} else if (num == 1) {
		num = aux;
	} else if (num == 2 || num == 3 || num == 4) {
		num = aux + 1;
	}
}//Fin de la funcion Adelante().

function Atras() {
	num--;
	if (num < 1) {
		num = 15;
	}//Fin del if.
	var foto = document.getElementById("foto");
	foto.src="./img/foto"+num+".jpg";
}//Fin de la funcion Atras().
*/
var imgArray = new Array("foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto7.jpg"
,"foto8.jpg","foto9.jpg","foto10.jpg","foto11.jpg","foto12.jpg","foto13.jpg","foto14.jpg","foto15.jpg");

var numImages = 15;
var curImage = 1;

function f_slideshow( xflip ) {
	curImage = curImage + xflip;
	if (curImage == 0 || curImage == numImages){
		curImage = numImages ;
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[0];
		document.images[2].src =  "./img/" + imgArray[1];
		document.images[3].src =  "./img/" + imgArray[2];
		document.images[4].src =  "./img/" + imgArray[3];
		document.images[5].src =  "./img/" + imgArray[1];
	} else if (curImage > numImages){
		curImage = 1 ;
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[curImage];
		document.images[2].src =  "./img/" + imgArray[curImage + 1];
		document.images[3].src =  "./img/" + imgArray[curImage + 2];
		document.images[4].src =  "./img/" + imgArray[curImage + 3];
		document.images[5].src =  "./img/" + imgArray[curImage + 1];
	} else if (curImage == 12) {
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[curImage];
		document.images[2].src =  "./img/" + imgArray[curImage + 1];
		document.images[3].src =  "./img/" + imgArray[curImage + 2];
		document.images[4].src =  "./img/" + imgArray[0];
		document.images[5].src =  "./img/" + imgArray[curImage + 1];
	} else if (curImage == 13) {
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[curImage];
		document.images[2].src =  "./img/" + imgArray[curImage + 1];
		document.images[3].src =  "./img/" + imgArray[0];
		document.images[4].src =  "./img/" + imgArray[1];
		document.images[5].src =  "./img/" + imgArray[curImage + 1];
	} else if (curImage == 14) {
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[curImage];
		document.images[2].src =  "./img/" + imgArray[0];
		document.images[3].src =  "./img/" + imgArray[1];
		document.images[4].src =  "./img/" + imgArray[2];
		document.images[5].src =  "./img/" + imgArray[0];
	} else {
		document.images[0].src =  "./img/" + imgArray[curImage - 1];
		document.images[1].src =  "./img/" + imgArray[curImage];
		document.images[2].src =  "./img/" + imgArray[curImage + 1];
		document.images[3].src =  "./img/" + imgArray[curImage + 2];
		document.images[4].src =  "./img/" + imgArray[curImage + 3];
		document.images[5].src =  "./img/" + imgArray[curImage + 1];
	}//Fin del if else
	
}//Fin de la funcion
