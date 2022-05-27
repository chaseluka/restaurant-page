import { headerLoad } from './header';
import { menuLoad } from './menu';
import { contactLoad } from './contact';
import { homeLoad } from './home';
import { footerLoad } from './footer';
import './style.css';

const content = document.getElementById('content');
const home = document.createElement('div');
home.setAttribute('id', 'home');
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');
const contact = document.createElement('div');
contact.setAttribute('id', 'contact');

headerLoad();
content.appendChild(home);
homeLoad.homeAppend();
footerLoad();


const footer = document.querySelector('.footer');


const homeBtn = document.querySelector('.header-home');
homeBtn.addEventListener('click', () => {
    content.insertBefore(home, footer);
    if (content.contains(menu)){
        content.removeChild(menu);
    }
    else if (content.contains(contact)){
        content.removeChild(contact);
    }
    homeLoad.homeAppend();
});

const menuBtn = document.querySelector('.header-menu');
menuBtn.addEventListener('click', () => {
    content.insertBefore(menu, footer);
    if (content.contains(home)){
        content.removeChild(home);
    }
    else if (content.contains(contact)){
        content.removeChild(contact);
    }
    menuLoad.menuAppend();
});

const contactBtn = document.querySelector('.header-contact');
contactBtn.addEventListener('click', () => {
    content.insertBefore(contact, footer);
    if (content.contains(menu)){
        content.removeChild(menu);
    }
    else if (content.contains(home)){
        content.removeChild(home);
    }
    contactLoad.contactAppend();
});

