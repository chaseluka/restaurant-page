const homeLoad = (() => {
    const content = document.getElementById('content');
    

    const homepageMain = document.createElement('div');
    homepageMain.classList.add('homepage-main');

    const homepageLocation = document.createElement('div');
    homepageLocation.classList.add('homepage-location');
    homepageLocation.textContent = 'Scranton, Pennsylvania';
    const homepageTitle = document.createElement('div');
    homepageTitle.classList.add('homepage-title');
    homepageTitle.textContent = 'Mike\'s Cereal Shack';
    const homepageSlogan = document.createElement('div');
    homepageSlogan.classList.add('homepage-slogan');
    homepageSlogan.textContent = 'As many varieties as you can buy in the store!';

    const homeAppend = () => {
        content.style.cssText = 'background-image: url(../images/cereal.jpg);';
        const home = document.getElementById('home');
        console.log(home);
        home.appendChild(homepageMain);
        homepageMain.appendChild(homepageLocation);
        homepageMain.appendChild(homepageTitle);
        homepageMain.appendChild(homepageSlogan);
    }
    return {homeAppend}
})();

export { homeLoad }