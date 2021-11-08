import { actionTypes } from '../constants/constants';

export const reducer=(cards = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL:
            return action.payload;
        case actionTypes.CREATE_CARD:
            return [...cards, action.payload];
        case actionTypes.UPDATE_CARD:
            return cards.map((card) => (card._id === action.payload._id ? action.payload : card));
        case actionTypes.DELETE_CARD:
            return cards.filter((card) => card._id !== action.payload);
        default:
            return cards;
    }
};



