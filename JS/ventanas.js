

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
function accion() {
  	  var texto = document.getElementById("texto").value.toLowerCase();
      var accion = document.querySelector('input[name="accion"]:checked').value;

      if (accion == "encriptar") {
        document.getElementById("resultado").value = encriptar(texto);
      } else {
        document.getElementById("resultado").value = desencriptar(texto);
      }
    }

    function encriptar(texto) {
      texto = texto.toLowerCase();
      texto = texto.replace(/e/g, "enter");
      texto = texto.replace(/i/g, "imes");
      texto = texto.replace(/a/g, "ai");
      texto = texto.replace(/o/g, "ober");
      texto = texto.replace(/u/g, "ufat");
      return texto;
    }

    function desencriptar(texto) {
      texto = texto.replace(/ufat/g, "u");
      texto = texto.replace(/ober/g, "o");
      texto = texto.replace(/ai/g, "a");
      texto = texto.replace(/imes/g, "i");
      texto = texto.replace(/enter/g, "e");
      return texto;
    }