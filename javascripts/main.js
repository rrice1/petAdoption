import{sortEvents} from './events.js'
import{getPets} from './data/petData.js'

const initializeApp = () => {

   sortEvents();
    getPets();
    }
    
    initializeApp();