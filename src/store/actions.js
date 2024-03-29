import {getAndCheckData, checkListings} from './utils';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&listing_type=buy&place_name=';

/**
 * create an action to dispatch when input value is changed 
 * @param {String} value 
 * @returns {Object}
 */
export function inputValueChange(value) {
    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
}

/**
 * create an action to dispatch when add to/remove from favourites is clicked 
 * @param {String} id
 * @return {function}
 */
export function toggleFavourites(id) {
    return function(dispatch, getState) {
        const indexInFavs = getState().favourites.findIndex(el => el.id === id);
        const indexInData = getState().data.findIndex(el => el.id === id);

        if (indexInFavs + 1) {
            dispatch({
                type: 'REMOVE_FROM_FAVOURITES',
                payload: {indexInFavs, indexInData}
            });
            return;
        };

        const itemToAdd = indexInData + 1 ?
            getState().data[indexInData] :
            getState().infoItem;

        dispatch({
            type: 'ADD_TO_FAVOURITES',
            payload: {
                item: itemToAdd,
                index: indexInData
            }
        });
    }
}

/**
 * create an action to dispatch when item is clicked to display details on item
 * @param {String} id 
 * @return {function}
 */
export function addItemInfo(id) {
    return function(dispatch, getState) {
        const infoItem = getState().data.find(el => el.id === id) ||
            getState().favourites.find(el => el.id === id);
            dispatch({
                    type: 'ADD_ITEM_INFO',
                    payload: infoItem
            });
    }
}

/**
 * dispatch an action to start async request,
 * make async request, then dispatch an action with error or new data
 * @return {function}
 */
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
                data.listings = checkListings(data.listings, getState);
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

/**
 * dispatch an action to start async request,
 * make async request, then dispatch an action with error or new data
 * @return {function}
 */
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
                data.listings = checkListings(data.listings, getState);
            dispatch({
                type: 'FETCHED_DATA_NEXT',
                payload: data.listings
            })}
        });
    }
}
