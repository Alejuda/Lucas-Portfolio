const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
import popupPlaceholder from './assets/placeholder.png'
import { getPhotoPath } from "./photoImporter";

export const showPopup = (id, section) => {
  getPhotoPath(
    `./assets/grandes/${section}-${id}.jpg`,
  ).then((photoPath) => {
    popupImg.src = photoPath;
    popup.classList.add("show-popup");
  });
}

export const hidePopup = () => {
  popup.classList.remove("show-popup");
    popupImg.src = popupPlaceholder;
    
}

popup.addEventListener('click', () => {
  hidePopup();
})
