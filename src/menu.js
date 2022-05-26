function menuLoad() {
    const content = document.getElementById('content');
    const menu = document.getElementById('menu');

    content.style.cssText = 'background-image: none;'

    //container content

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    const bowlContainer = document.createElement('div');
    bowlContainer.classList.add('bowl-container');
    const cerealContainer = document.createElement('div');
    cerealContainer.classList.add('cereal-container');
    const milksContainer = document.createElement('div');
    milksContainer.classList.add('milks-container');

    menu.appendChild(nameContainer);
    menu.appendChild(bowlContainer);
    menu.appendChild(cerealContainer);
    menu.appendChild(milksContainer);

    //Name content

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = 'Mike\'s Cereal Shack';

    nameContainer.appendChild(name);

    //Bowl Content
    
    const bowlSelection = document.createElement('div');
    bowlSelection.classList.add('selection-title');
    bowlSelection.textContent = 'Bowl Sizes';
    const bowlList = document.createElement('div');
    bowlList.classList.add('bowl-list');

    bowlContainer.appendChild(bowlSelection);
    bowlContainer.appendChild(bowlList);

    const small = document.createElement('div');
    small.classList.add('bowl');
    small.textContent = 'Small $3.00';
    const medium = document.createElement('div');
    medium.classList.add('bowl');
    medium.textContent = 'Medium $4.00';
    const large = document.createElement('div');
    large.classList.add('bowl');
    large.textContent = 'Large $5.00';

    bowlList.appendChild(small);
    bowlList.appendChild(medium);
    bowlList.appendChild(large);

    //cereal content

    const cerealSelection = document.createElement('div');
    cerealSelection.classList.add('selection-title');
    cerealSelection.textContent = 'Cereal Selection';
    const cerealList = document.createElement('div');
    cerealList.classList.add('cereal-list');

    cerealContainer.appendChild(cerealSelection);
    cerealContainer.appendChild(cerealList);

    let cereals = [];

    for (let i = 0; i < 20; i++){
        const cereal = document.createElement('div');
        cerealList.appendChild(cereal);
        cereals.push(cereal);
    }
    cereals[0].textContent = 'Honey Nut Cheerios';
    cereals[1].textContent = 'Cinnamon Toast Crunch';
    cereals[2].textContent = 'Frosted Mini-Wheats';
    cereals[3].textContent = 'Apple Jacks';
    cereals[4].textContent = 'Lucky Charms';
    cereals[5].textContent = 'Rice Crispies';
    cereals[6].textContent = 'Corn Pops';
    cereals[7].textContent = 'Raison Bran';
    cereals[8].textContent = 'Honey Smacks';
    cereals[9].textContent = 'Froot Loops';
    cereals[10].textContent = 'Life Cinnamon';
    cereals[11].textContent = 'Frosted Flakes';
    cereals[12].textContent = 'Fruity Pebbles';
    cereals[13].textContent = 'Corn Flakes';
    cereals[14].textContent = 'Cap\'n Crunch';
    cereals[15].textContent = 'Cap\'n Crunch Berries';
    cereals[16].textContent = 'Honey Bunches of Oats';
    cereals[17].textContent = 'Reese\'s Puffs';
    cereals[18].textContent = 'Trix';
    cereals[19].textContent = 'Oats';
    
    //Milk Content

    const milksSelection = document.createElement('div');
    milksSelection.classList.add('selection-title');
    milksSelection.textContent = 'Milk Selection';
    const milksList = document.createElement('div');
    milksList.classList.add('milk-list');

    milksContainer.appendChild(milksSelection);
    milksContainer.appendChild(milksList);

    let milks = [];

    for (let i = 0; i < 20; i++){
        const milk = document.createElement('div');
        milksList.appendChild(milk);
        milks.push(milk);
    }
    milks[0].textContent = '2%';
    milks[1].textContent = 'Whole';
    milks[2].textContent = 'Soy';
    milks[3].textContent = 'Nonfat';
    milks[4].textContent = 'Almond';
    milks[5].textContent = 'Oat';
}

export { menuLoad }