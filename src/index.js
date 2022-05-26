import { pageLoad } from './header';
import { menuLoad } from './menu';
import { contactLoad } from './contact';
import { homeLoad } from './home';
import { footerLoad } from './home';

const content = document.getElementById('content');
headerLoad();
const home = document.createElement('div');
home.setAttribute('id', 'home');
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');
const contact = document.createElement('div');
contact.setAttribute('id', 'contact');

content.appendChild(contact);

contactLoad();

footerLoad();