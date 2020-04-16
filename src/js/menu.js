import itemsTemplates from '../templates/menu-items.hbs';
import menuItems from '../menu.json';

const markup = itemsTemplates(menuItems);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);