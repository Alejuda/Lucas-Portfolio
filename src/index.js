import './style.css';
import fotoLucas from './assets/recursos/foto-lucas.png';
import iconoAzul from './assets/logos/logo-azul.svg';
import iconoBlanco from './assets/logos/logo-blanco.svg';
import { getPhotoPath } from './photoImporter.js';

const header = document.getElementById('header');
const portfolioSection = document.getElementById('portfolio');
const worksContainer = document.getElementById('works');
const works = [
  {
    name: 'YSY-A',
    photo: './assets/portfolio/ysy-a.jpg',
  },
  {
    name: 'Martha',
    photo: './assets/portfolio/martha.jpg',
  },
  {
    name: 'Valkiria',
    photo: './assets/portfolio/valkiria.jpg',
  },
  {
    name: 'Outdoor',
    photo: './assets/portfolio/outdoor.jpg',
  },
  {
    name: 'Travel',
    photo: './assets/portfolio/travel.jpg',
  },
  {
    name: 'Polo',
    photo: './assets/portfolio/polo.jpg',
  },
  {
    name: 'Street',
    photo: './assets/portfolio/street.jpg',
  },
  {
    name: 'Artash',
    photo: './assets/portfolio/artash.jpg',
  },
];

const worksSections = [
  {
    name: 'YSY-A',
    tags: ['Live', 'Trap', 'Show', 'Artist'],
  },
  {
    name: 'Martha Headwear',
    tags: ['Beanies', 'Caps', 'Bucket Hat', 'Lifestyle', 'Fashion', 'Outdoor'],
  },
  {
    name: 'Valkiria',
    tags: ['Eyewear', 'Fashion', 'Sunglasses', 'Portrait'],
  },
  {
    name: 'Outdoor',
    tags: ['Landscape', 'Mountain', 'Snow', 'Beach', 'Sunset'],
  },
];

const logoAzul = document.getElementById('icono');
const logoBlanco = document.getElementById('home-white-logo');
const homeLucas = document.getElementById('imagen-lucas');
homeLucas.src = fotoLucas;
logoAzul.src = iconoAzul;
logoBlanco.src = iconoBlanco;

window.addEventListener('scroll', () => {
  let show = false;
  if (window.scrollY >= 150 && !show) {
    header.classList.add('show-header');
    show = true;
  } else if (window.scrollY < 150) {
    header.classList.remove('show-header');
    show = false;
  }
});

const renderWorks = () => {
  let portfolioInner = '';
  works.forEach((work) => {
    portfolioInner += `
    <a href="#${work.name.split(' ')[0].toLocaleLowerCase()}">
    <div class="work-container">
        <img class="work-photo">
        <h3 class="work-name">${work.name}</h3>
    </div>
    </a>
  `;
  });
  portfolioSection.innerHTML = portfolioInner;
  const worksArray = Array.from(document.querySelectorAll('.work-photo'));
  worksArray.forEach((work, idx) => {
    getPhotoPath(works[idx].photo).then((photoPath) => {
      work.src = photoPath;
    });
  });
};

const renderWorkSection = () => {
  worksSections.forEach((workSection) => {
    const prefix = workSection.name.split(' ')[0].toLocaleLowerCase();
    const workContainer = document.createElement('div');
    workContainer.className = 'work-section';
    workContainer.id = `${prefix}`;
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'work-section-title';
    sectionTitle.innerText = workSection.name;
    const tags = document.createElement('h3');
    tags.className = 'work-tags';
    tags.innerText = workSection.tags.join(' - ');
    const gridSectionDisplay = document.createElement('div');
    gridSectionDisplay.className = 'work-section-image-grid';

    workContainer.appendChild(sectionTitle);
    workContainer.appendChild(tags);
    for (let i = 1; i < 11; i += 1) {
      const image = document.createElement('img');
      image.className = 'work-section-image';
      image.alt = 'Work Image';
      getPhotoPath(
        `./assets/${prefix}/${prefix}-${i}.jpg`,
      ).then((photoPath) => {
        image.src = photoPath;
        gridSectionDisplay.appendChild(image);
      });
    }
    workContainer.appendChild(gridSectionDisplay);
    worksContainer.appendChild(workContainer);
  });
};

renderWorks();
renderWorkSection();
