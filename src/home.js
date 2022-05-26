function homeLoad() {
    const home = document.getElementById('home');

    const homepageMain = document.createElement('div');
    homepageMain.classList.add('homepage-main');

    home.appendChild(homepageMain);

    //header content
    
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
};

export { homeLoad }