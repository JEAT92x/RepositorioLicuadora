//console.log(123);

var estadoLicuadora = 'apagada';
var sonidoLicuadora = document.getElementById('blender-sound');
var botonLicuadora = document.getElementById('blender-button-sound');
var Licuadora = document.getElementById('blender');

function controlarLicuadora(){
    if(estadoLicuadora == 'apagada'){
        estadoLicuadora = 'encendido';
        hacerBrrBrr();
        Licuadora.classList.add('active');
        console.log("Me Prendiste");
    } else {
        estadoLicuadora = 'apagada';
        hacerBrrBrr();
        Licuadora.classList.remove('active');
        console.log("Me Apagaste");
    }
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}