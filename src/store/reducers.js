const initialState = {
    inputValue: 'chelsea',
    data: [],
    favourites: [],
    infoItem: {indexInData: -1},
    isFetching: false,
    currentPage: 0,
    totalPages: 100,
    lastSearched: '',
    error: null
}

/**
 * Reducer for a ReduxStore
 * @param {ReduxState} state 
 * @param {ReduxAction} action
 * @return {Object}
 */
export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'INPUT_CHANGE': return {
            ...state,
            inputValue: action.payload
        }
        case 'ADD_ITEM_INFO': return {
            ...state,
            infoItem: action.payload
        }
        case 'ADD_TO_FAVOURITES': return {
            ...state,
            infoItem: {...state.infoItem, indexInFavs: state.favourites.length},
            data: state.data.map((el,index) => {
                return index === action.payload.index ?
                {...el, indexInFavs: state.favourites.length} :
                el;
            }),
            favourites: state.favourites.concat({
                ...action.payload.item,
                indexInData: action.payload.index,
                indexInFavs: state.favourites.length
            })
        }
        case 'REMOVE_FROM_FAVOURITES': return {
            ...state,
            infoItem: {...state.infoItem, indexInFavs: -1},
            data: state.data.map((el, index) => {
                return state.favourites[action.payload].indexInData === index ?
                {...el, indexInFavs: -1} :
                el
            }),
            favourites: state.favourites.filter((el, index) => index !== action.payload)
        }
        case 'START_REQUEST': return {
            ...state,
            isFetching: true,
            lastSearched: action.payload,
            currentPage: 1,
            data: [],
            favourites: state.favourites.map((el) => {
                return {...el, indexInData: -1}
            }),
        }
        case 'FETCHED_DATA': return {
            ...state,
            data: state.data.concat(action.payload.data),
            totalPages: action.payload.totalPages,
            infoItem: {...state.infoItem, indexInData: -1},
            isFetching: false,
            error: null
        }
        case 'START_REQUEST_NEXT': return {
            ...state,
            currentPage: ++state.currentPage,
            isFetching: true
        }
        case 'FETCHED_DATA_NEXT': return {
            ...state,
            data: state.data.concat(action.payload),
            isFetching: false
        }
        case 'RESPONSE_ERROR': return {
            ...state,
            error: action.payload,
            isFetching: false
        }
        case 'LAST_PAGE_REACHED': return {
            ...state,
            isOnLastPage: true
        }
        default: return state
    }
}