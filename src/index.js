import './style.css';
import fotoLucas from './assets/recursos/foto-lucas.png';
import iconoAzul from './assets/logos/logo-azul.svg';
import iconoBlanco from './assets/logos/logo-blanco.svg';

const header = document.getElementById('header')

const logoAzul = document.getElementById('icono');
const logoBlanco = document.getElementById('home-white-logo')
const homeLucas = document.getElementById('imagen-lucas');
homeLucas.src = fotoLucas;
logoAzul.src = iconoAzul;
logoBlanco.src = iconoBlanco;

window.addEventListener ('scroll', ()=> {
    let show = false;
    if (window.scrollY >= 150 && !show){
        header.classList.add('show-header');
        show = true;
    } else if (window.scrollY < 150) {
        header.classList.remove('show-header');
        show = false;
    }
    
})