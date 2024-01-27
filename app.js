let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? 'Vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else{
        //El usuario no ha adivinado el número secreto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', ' El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    document.getElementById('valorUsuario').value = '';
    return;
}

function generarNumeroSecreto()
{
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya has sorteado todos los números');
    }else{
          //Si el número generado ya existe en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
    
            return generarNumeroSecreto(); //Generar otro número aleatorio.
    
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego()
{
    //Limpiar caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el boton del juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

    numeroSecreto = generarNumeroSecreto();
    limpiarCaja();
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    return;
}

condicionesIniciales();
