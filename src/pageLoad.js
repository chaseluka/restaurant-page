function pageLoad(){
    const content = document.querySelector('div#content');
    console.log(document);

    //container divs

    const header = document.createElement('div');
    header.classList.add('header');
    const homepageMain = document.createElement('div');
    homepageMain.classList.add('homepage-main');
    const footer = document.createElement('div');
    footer.classList.add('footer');

    console.log(header);

    document.body.appendChild(header);

    content.appendChild(header);
    content.appendChild(homepageMain);
    content.appendChild(footer);
    
    //header content
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

    //main content
    const homepageLocation = document.createElement('div');
    homepageLocation.classList.add('homepage-location');
    homepageLocation.textContent = 'Scranton, Pennsylvania';
    const homepageTitle = document.createElement('div');
    homepageTitle.classList.add('homepage-title');
    homepageTitle.textContent = 'Mike\'s Cereal Shack';
    const homepageSlogan = document.createElement('div');
    homepageSlogan.classList.add('homepage-slogan');
    homepageSlogan.textContent = 'As many varieties as you can buy in the store!';

    homepageMain.appendChild(homepageLocation);
    homepageMain.appendChild(homepageTitle);
    homepageMain.appendChild(homepageSlogan);

    //footer
    const svg = document.querySelector('svg');
    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'chaseluka';

    footer.appendChild(svg);
    footer.appendChild(footerText);

    console.log('Hello!');
};

export { pageLoad }