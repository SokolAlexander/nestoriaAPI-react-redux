import Dummy from '../../data';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/api.nestoria.co.uk/api?action=echo&encoding=json&foo=bar';


export function inputValueChange(value) {
    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
}

export function submitFormAsync() {
    return function(dispatch, getState) {
        let newData = [];
        console.log(getState().inputValue)
        dispatch({
            type: 'START_REQUEST'
        })
    
        fetch(BASE_URL)
            .then(
                function(response) {
                    return response.json();
            })
            .then(
                function(myJson) {
                    console.log(myJson);
                    dispatch({
                        type: 'FETCHED_DATA',
                        payload: newData
                    })
            });      
        };
}