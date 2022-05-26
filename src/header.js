function headerLoad(){
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add('header');
    
    content.appendChild(header);
    

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
};

export { pageLoad }

