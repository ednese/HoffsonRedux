const initialState = {
    items: [],
    filteredItems: [],
    size: ''
}

export default function productReducer(state = initialState, action) {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {...state, items: action.payload, filteredItems: action.payload};
        case 'FILTER_PRODUCTS_SIZE':
            return {...state, filteredItems: action.payload.items, size: action.payload.size};
        case 'FILTER_PRODUCTS_ORDER':
            return {...state, filteredItems: action.payload};
        default:
            return state;
    }
}