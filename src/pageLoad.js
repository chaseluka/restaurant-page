function pageLoad(){
    const content = document.getElementById('content');
    
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');


    const header = document.createElement('div');
    header.classList.add('header');
    const footer = document.createElement('div');
    footer.classList.add('footer');

    content.appendChild(header);

    content.appendChild(footer);

    const headerHome = document.createElement('div');
    headerHome.classList.add('header-home');
    headerHome.textContent = 'Home';
    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    headerMenu.textContent = 'Menu';
    const headerContact = document.createElement('div');
    headerContact.classList.add('header-contact');
    headerContact.textContent = 'Contact';

    header.appendChild(headerHome);
    header.appendChild(headerMenu);
    header.appendChild(headerContact);

    const svg = document.querySelector('svg');
    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'chaseluka';

    footer.appendChild(svg);
    footer.appendChild(footerText);
};

export { pageLoad }

