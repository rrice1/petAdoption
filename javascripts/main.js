import{sortPets} from './components/petComponent.js'
import{getPets} from './data/petData.js'

const initializeApp = () => {

    sortPets();
    getPets();
    }
    
    initializeApp();