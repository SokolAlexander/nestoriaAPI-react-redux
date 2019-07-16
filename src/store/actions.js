//import Dummy from '../data';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=';


export function inputValueChange(value) {
    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
}

export function toggleFavourites(id, index) {
    return function(dispatch, getState) {
        const data = getState().data;
        const favs = getState().favourites;

        const indexInFavs = favs.findIndex((el) => el.id === id);
        
        if (indexInFavs + 1) {
            dispatch({
                type: 'REMOVE_FROM_FAVOURITES',
                payload: data[index].indexInFavs
            }); return
        };
        dispatch({
            type: 'ADD_TO_FAVOURITES',
            payload: index
        })
    }
}

export function submitFormAsync() {
    return function(dispatch, getState) {
        const placeName = getState().inputValue;
        dispatch({
            type: 'START_REQUEST',
            payload: placeName
        });

        const url = BASE_URL + placeName;

        getAndCheckData(url, dispatch).then(data => {
            if (data) {
                data.listings = data.listings.map((el, index) => {
                    return {
                        ...el,
                        id: `${placeName}_${Date.now()}_${index}`,
                        indexInFavs: false
                    }
                });
                dispatch({
                    type: 'FETCHED_DATA',
                    payload: {
                        data: data.listings, 
                        totalPages: data.total_pages
                    }
                })
            }
        })
    }
}

export function requestNextPage() {
    return function(dispatch, getState) {
        if (getState().currentPage + 1 > getState().totalPages) {
            dispatch({
                type: 'LAST_PAGE_REACHED'
            }); return;
        }

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
        if (!((result.application_response_code) === '100')) {
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
