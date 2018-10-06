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
    newString += `<div class="col-4 pet-card container-card" id="${petsArray[i].name}">`
    newString+= `<h4 class="card-header d-flex justify-content-center text-secondary bg-dark">${petsArray[i].name}</h4>`;
    newString+= `<div class="card">`;
    
    newString+= `<img class="card-img-top" src="${petsArray[i].imageUrl}" alt="">`;
    newString+= `<div class="card-body d-flex justify-content-center">`;
    newString+= `<p class="card-title">${petsArray[i].specialSkill}</p>`;
    newString+= `</div>`;
    newString+= `</div>`;
    newString+= `<p id="footerid${[i]}" class="card-footer d-flex justify-content-center hello">${petsArray[i].type}</p>`;
    newString+= `</div>`;

}

printToDom(newString,'pets');
colorCode();
}

let colorCode = () =>{
    for(let i=0; i<pets.length;i++){
        if(pets[i].type==='cat'){
            document.getElementById(`footerid${[i]}`).classList.toggle('cat')
        } else if (pets[i].type==='dog'){
            document.getElementById(`footerid${[i]}`).classList.toggle('dog')
        } else if (pets[i].type==='dino'){
            document.getElementById(`footerid${[i]}`).classList.toggle('dino')
        }
    }
}
        
export {petsBuilder,setPets,getPetsz,sortPets}