// Creando una Objeto XMLHttpRequest

function cargaXhr(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("btn2").innerHTML =  this.responseText;
           console.log('yes');
        }
    };
    // Para enviar un solicitud al servidor se utiliza los metodos open() y send()
    // Del objeto XMLHttpRequest
    XHR.open("GET", "https://chilealerta.com/api/query", true);
    XHR.send();
};