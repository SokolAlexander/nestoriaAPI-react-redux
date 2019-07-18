const RESULTS_PER_PAGE = 20;
/**
 * performs a comparing of 2 objects with primitive values 
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (!(key in obj2 && obj1[key] === obj2[key])) return false
    }
    return true
};


/**
 * handles async operations
 * @param {String} url 
 * @param {function} dispatch 
 * @return {Promise}
 */
export function getAndCheckData(url, dispatch) {
    return fetch(url)
    .then(resp => {
        return resp.json();
    }).then(res => {
        const result = res.response
        if (!((result.application_response_code) === '100')) {
            throw new Error(result.application_response_text);
        }
        return result;
        }
    ).catch(e => {
        dispatch({
            type: 'RESPONSE_ERROR',
            payload: e.message
        }); return null
    });
}

/**
 * checks if any of items in returned listings are in favourites 
 */
export function checkListings(listings, getState) {
    return listings.map((elInData, index) => {
        const indexInFavs = getState().favourites.findIndex((elInFav) => {
            return elInFav.img_url === elInData.img_url ?
                compareObjects(elInData, elInFav):
                false;
        });
        const id = indexInFavs + 1 ?
            getState().favourites[indexInFavs].id :
            `${getState().lastSearched}_
                ${Date.now()}_
                ${RESULTS_PER_PAGE*getState().currentPage + index}`
        return {
            ...elInData,
            id,
            indexInFavs
        }
    });
}
