import{printToDom} from '../helpers/util.js'

let pets=[];

const setPets = (newArray) => {
    pets=newArray;
};

const getPetsz = () => {
    return pets;
}

const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'All'){
        petsBuilder(pets);
    } else if (type === 'cat') {
        const filteredCats = pets.filter(x=>x.type === type)
        petsBuilder(filteredCats);
    } else if (type === 'dog') {
        const filteredDogs = pets.filter(x=>x.type === type);
        petsBuilder(filteredDogs); 
    } else if (type==='dino') {
        const filteredDinos = pets.filter(x=>x.type === type);
        petsBuilder(filteredDinos);
    }

};

let petsBuilder = (petsArray) => {
    let newString = '';
    for(let i=0; i<petsArray.length;i++){
    newString += `<div class="col-2 pet-card" id="${petsArray[i].name}">`
    newString+= `<h4 class="card-header">${petsArray[i].name}</h4>`;
    newString+= `<div class="card">`;
    
    newString+= `<img class="card-img-top" src="${petsArray[i].imageUrl}" alt="">`;
    newString+= `<div class="card-body">`;
    newString+= `<p class="card-title">${petsArray[i].specialSkill}</p>`;
    newString+= `</div>`;
    newString+= `</div>`;
    newString+= `<p class="card-footer">${petsArray[i].type}</p>`;
    newString+= `</div>`;
    
}
printToDom(newString,'pets');
}


export {petsBuilder,setPets,getPetsz,sortPets}