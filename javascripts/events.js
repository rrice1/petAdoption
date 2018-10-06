import {sortPets} from './components/petComponent.js'

const sortEvents = () => {
    const allButton = document.getElementById('All')
    const catButton = document.getElementById('cat')
    const dogButton = document.getElementById('dog')
    const dinoButton = document.getElementById('dino')
    allButton.addEventListener('click',sortPets);
    catButton.addEventListener('click',sortPets);
    dogButton.addEventListener('click',sortPets);
    dinoButton.addEventListener('click',sortPets);
}

export{sortEvents}