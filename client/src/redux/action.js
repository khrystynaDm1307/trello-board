import { actionTypes } from '../constants/constants';

import * as api from '../api/api';

export const getCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCards();

        dispatch({ type: actionTypes.FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createCard = (card) => async (dispatch) => {
    try {
        const { data } = await api.createCard(card);

        dispatch({ type: actionTypes.CREATE_CARD, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCard = (id, card) => async (dispatch) => {
    try {
        const { data } = await api.updateCard(id, card);

        dispatch({ type: actionTypes.UPDATE_CARD, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteCard = (id) => async (dispatch) => {
   
    try {
        await api.deleteCard(id); 
        dispatch({ type: actionTypes.DELETE_CARD, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};
