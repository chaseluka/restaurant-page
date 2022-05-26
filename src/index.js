import { pageLoad } from './pageLoad';
import { menuLoad } from './menu';
import { contactLoad } from './contact';
import { homeLoad } from './home';

const content = document.getElementById('content');
pageLoad();


menuLoad();
content.appendChild(menu);