const texto = document.querySelector(".main__izquierda-texto");
const btnEncriptar = document.querySelector(".main__btn-encriptar");
const textoDerecha = document.querySelector(".main__derecha-mensaje");
const btnDesencriptar = document.querySelector(".main__btn-desencriptar");
const btnCopiar = document.querySelector(".main__derecha-btn-copiar");



texto.addEventListener("click", () => {
    alert("Por defecto se han convertido los textos a minúsula.");
});

btnEncriptar.addEventListener("click", function() {
    let textoRecogido = texto.value;

    let reemplazar = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    let resultado = "";
    
    for (let i = 0; i < textoRecogido.length; i++) {
        let cadenaActual = textoRecogido[i];
        if (reemplazar[cadenaActual]){
            resultado += reemplazar[cadenaActual];
        } else {
            resultado += cadenaActual;
        }
    }

    textoDerecha.value = resultado;
    
} );

btnDesencriptar.addEventListener("click", function() {
    let textoActual = texto.value;
    let textoDesencriptado = "";

    let reemplazar = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    
    for(let palabra in reemplazar){

        textoActual=textoActual.replaceAll(palabra, reemplazar[palabra]);
    }
    textoDesencriptado = textoActual;

    textoDerecha.value = textoDesencriptado;
    
} );

btnCopiar.addEventListener( 'click', ()=>{
    navigator.clipboard.writeText(textoDerecha.value);
    alert(`Texto copiado: ${textoDerecha.value}`);
})


// Abajo forma rápida de encriptar

/* btnDesencriptar.addEventListener("click", () => {
    let textoAhora = texto.value;
    let textoReemplazado = textoAhora.replace(/[ai]/g /[enter]/g, (match) => {
        switch (match) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
        }
    });
    
    console.log(textoReemplazado);
}); */





