function footerLoad(){
    const content = document.getElementById('content');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    content.appendChild(footer);

    const svg = document.querySelector('svg');
    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'chaseluka';

    footer.appendChild(svg);
    footer.appendChild(footerText);
} 

export { footerLoad }