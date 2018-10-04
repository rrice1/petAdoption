import{printToDom} from '../helpers/util.js'

let pets=[];

const setPets = (newArray) => {
    pets=newArray;
};

const getPetsz = () => {
    return pets;
}

const petClick = (e) => {
    const name=e.target.closest('.pet-card').id
    const currentPet = pets.find(x=> x.id === name)
    detailsBuilder(currentPet);
}

const createEvents = () => {
    const petCards = document.getElementsByClassName('pet-card');
    for(let i=0;i<petCards.length;i++){
        petCards[i].addEventListener('click',petClick);
    }
   };

   const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'All'){
        petsBuilder(pets);
    } else if (type === 'Cats') {
        const filteredCats = pets.filter(x=>x.type === type);
        petsBuilder(filteredCats);
    } else if (type === 'Dogs') {
        const filteredDogs = pets.filter(x=>x.type === type);
        petsBuilder(filteredDogs);
    } else {
        const filteredDinos = pets.filter(x=>x.type === type);
        petsBuilder(filteredDinos);
    }

};


let petsBuilder = (petsArray) => {
    let newString = '';
    for(let i=0; i<petsArray.length;i++){
    newString += `<div class="col-2 pet-card" id="${pets[i].name}">`
    newString+= `<h4 class="card-header">${pets[i].name}</h4>`;
    newString+= `<div class="card">`;
    
    newString+= `<img class="card-img-top" src="${pets[i].imageUrl}" alt="">`;
    newString+= `<div class="card-body">`;
    newString+= `<p class="card-title">${pets[i].specialSkill}</p>`;
    newString+= `</div>`;
    newString+= `</div>`;
    newString+= `<p class="card-footer">${pets[i].type}</p>`;
    newString+= `</div>`;

    
}
printToDom(newString,'pets');
createEvents();
}


export {petsBuilder,setPets,getPetsz,sortPets}