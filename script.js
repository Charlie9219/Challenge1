const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptador(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncritada = stringEncritada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncritada.includes(matrizCodigo[i][0])){
          stringEncritada = stringEncritada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
     
    }
    return stringEncritada
}


function btnDesencriptador(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value ="";
    
}

function desencriptar(stringDesencritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencritada = stringDesencritada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencritada.includes(matrizCodigo[i][1])){
          stringDesencritada = stringDesencritada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
     
    }
    return stringDesencritada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}