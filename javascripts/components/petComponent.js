import{printToDom} from '../helpers/util.js'

let pets=[];

const setPets = (newArray) => {
    pets=newArray;
};

const getPetsz = () => {
    return pets;
}








let petsBuilder = (petsArray) => {
    let newString = '';
    for(let i=0; i<petsArray.length;i++){
    newString += `<div class="col-2 pet-card" id="${pets[i].id}">`
    newString+= `<div class="card">`;
    newString+= `<img class="card-img-top" src="${pets[i].imageUrl}" alt="">`;
    newString+= `<div class="card-body">`;
    newString+= `<h4 class="card-title">${pets[i].name}</h4>`;
    newString+= `</div>`;
    newString+= `</div>`;
    newString+= `</div>`;

    
}
printToDom(newString,'pets');
createEvents();
}


export {petsBuilder,setPets,getPetsz}