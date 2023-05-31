import './style.css';
import fotoLucas from './assets/recursos/foto-lucas.png';
import iconoAzul from './assets/logos/logo-azul.svg';
import iconoBlanco from './assets/logos/logo-blanco.svg';

const logoAzul = document.getElementById('icono');
const logoBlanco = document.getElementById('home-white-logo')
const homeLucas = document.getElementById('imagen-lucas');
homeLucas.src = fotoLucas;
logoAzul.src = iconoAzul;
logoBlanco.src = iconoBlanco;