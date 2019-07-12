//import Dummy from '../data';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=';


export function inputValueChange(value) {
    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
}

export function submitFormAsync() {
    return function(dispatch, getState) {
        const request = getState().inputValue;
        dispatch({
            type: 'START_REQUEST',
            payload: request
        });

        const url = BASE_URL + getState().inputValue;

        getAndCheckData(url, dispatch).then(data => {
            if (data) {
                dispatch({
                    type: 'FETCHED_DATA',
                    payload: {
                        data: data.listings, 
                        total: data.total_pages
                    }
                })
            }
        })
    }
}

export function requestNextPage() {
    return function(dispatch, getState) {
        dispatch({
            type: 'START_REQUEST_NEXT'
        });

        const url = BASE_URL + getState().lastSearched + '&page=' + getState().currentPage;

        getAndCheckData(url, dispatch).then((data) => {
            if (data) { 
                dispatch({
                    type: 'FETCHED_DATA_NEXT',
                    payload: data.listings
                })
            }
        });
    };
}

function getAndCheckData(url, dispatch) {
    return fetch(url)
    .then(resp => {
        return resp.json();
    }).then(res => {
        const result = res.response
        if (!((parseInt(result.application_response_code)) === 100)) {
            dispatch({
                type: 'RESPONSE_ERROR',
                payload: result.application_response_text
            }); 
            return null
        }
        return result;
        }    
    );
}