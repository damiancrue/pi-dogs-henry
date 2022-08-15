
const initialState ={
    dogs : [],
    allDogs: [],
    temperaments: [],
    detail:[],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'FILTER_BY_ORIGIN':
                const all = state.allDogs;
                const originFiltered =  action.payload ==='api'?all.filter(dog => !dog.createdInDb): 
                                        action.payload ==='created'? all.filter(dog => dog.createdInDb):
                                        all;
            return {
                ...state,
                dogs: originFiltered
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allTemp = state.allDogs;
            console.log(action.payload)
            const tempFiltered = action.payload === 'all' ? allTemp : allTemp.filter(el => {
                if (typeof (el.temperaments) === 'string') return el.temperaments.includes(action.payload);
                if (Array.isArray(el.temperaments)) {
                    let temps = el.temperaments.map(el => el.name);
                    return temps.includes(action.payload);
                }
                return true;
            });
            tempFiltered.filter(el=>el.temperaments!==null)
            console.log(tempFiltered)
            return {
                ...state,
                dogs: tempFiltered
            }
        case 'ORDER_BY_NAME':
            const dogs = state.dogs;
            const orderedDogs = action.payload === 'asc'? dogs.sort((a,b) => a.name > b.name? 1: -1):
                                action.payload === 'desc'? dogs.sort((a,b) => a.name < b.name? 1: -1):
                                dogs;
            return {
                ...state,
                dogs: orderedDogs
            };
        case 'ORDER_BY_WEIGHT':
            const dogsByWeight = state.dogs;
            const orderedDogsByW = action.payload === 'asc'? dogsByWeight.sort((a,b) => parseInt(a.weightMin) > parseInt(b.weightMin)? 1: -1):
                                action.payload === 'desc'? dogsByWeight.sort((a,b) => parseInt(a.weightMax) < parseInt(b.weightMax)? 1: -1):
                                dogsByWeight;
            return {
                ...state,
                dogs: orderedDogsByW
            };
        case 'GET_NAME_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
        case 'POST_DOG':
            return {
                ...state
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }

        default: return state
}}