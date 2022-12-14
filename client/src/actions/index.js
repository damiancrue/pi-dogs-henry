import axios from 'axios';

export function getDogs(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/dogs')
        return dispatch({
        type: 'GET_DOGS',
        payload: json.data
        })
    }
}

export function filterByOrigin(payload){
    return {
        type: 'FILTER_BY_ORIGIN',
        payload: payload
    }
}

export function filterByTemperament(payload){

         return {
             type: 'FILTER_BY_TEMPERAMENT',
             payload: payload
         }
}
export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload: payload
    }
}

export function orderByWeight(payload){
    return {
        type: 'ORDER_BY_WEIGHT',
        payload: payload
    }
}

export function getNameDogs (name) {
    return async function (dispatch){
       try {
        var json = await axios.get('http://localhost:3001/dogs?name='+name)
        return dispatch({
            type: 'GET_NAME_DOGS',
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}}

export function getTemperaments(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/temperament')
        return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: json.data
        })
    }
}

export function postDog(payload){
    return async function (dispatch){
        var json = await axios.post('http://localhost:3001/dogs', payload)
        return json.data
    }
}

export function getDetail (id) {
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/dogs/'+id);
            return dispatch(
                {
                type: 'GET_DETAIL',
                payload: json.data
            },
            )
    } catch (error){
        console.log(error)
    }
    }
}



// Promise:
// export function getDetail(id){
//     return function (dispatch){
//         var json = axios.get('http://localhost:3001/dogs/' + id)
//             .then(res => res.data)
//             .catch(err => console.log(err));
//         return dispatch({
//             type: GET_DETAIL,
//             payload: json,
//         })
//     }
// }

