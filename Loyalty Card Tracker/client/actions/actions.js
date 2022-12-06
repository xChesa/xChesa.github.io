/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const addMarketActionCreator = marketId => ({
  type: types.ADD_MARKET,
  payload: marketId,
});

// add more action creators
export const deleteCardActionCreator = marketId => ({
  type: types.DELETE_CARD,
  payload: marketId,
});
export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});
export const setNewLocationActionCreator = marketId => ({
  type: types.SET_NEW_LOCATION,
  payload: marketId,
});