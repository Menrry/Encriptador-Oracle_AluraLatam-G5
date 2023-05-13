function encriptar(matrizCodigo){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");

    if (texto!= ""){
        
        
        if ((validarMinusculas(texto)) == false){
            document.querySelector("#warning").style.color = "red";
            document.querySelector("#warning").style.fontSize = "16px";
            return;
        }
        
        for(let i = 0; i < matrizCodigo.length; i++){
            if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }
    

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = texto;
        textarea.value = "";
     
    }
    return;
}

function desencriptar(matrizCodigo){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");

    if (texto != ""){

        for(let i = 0; i < matrizCodigo.length; i++){
            if(texto.includes(matrizCodigo[i][1])){
                texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        }
    
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = texto;
        textarea.value = "";
       
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

function validarMinusculas(cadena) {
  var patron = /^[a-z\s]+$/;
  return patron.test(cadena);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

enc.addEventListener( 'click', function() {encriptar(matrizCodigo);} );
des.addEventListener( 'click', function() {desencriptar(matrizCodigo);} );
copy.addEventListener( 'click', function() {clipboard();} );