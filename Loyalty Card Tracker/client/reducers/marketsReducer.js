/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET:
      // Check if payload (location name) is empty, cancel if so
      if (action.payload === '') return state;
      // Check if location name is already in use, increment cards if so (change to ADD_CARD functionality)
      for (const market of state.marketList) {
        if (market.location === action.payload) return addRemoveMarketCards(state, market.marketId, 1);
      }
      // increment lastMarketId and totalMarkets counters

      const newLastMarketId = state.lastMarketId + 1;
      const newTotalMarket = state.totalMarkets + 1;
      //create new location with new market id, set locCards equal to 1, and get percent cards
      //create vars to hold market card data:
      const marketId = newLastMarketId;
      const newLoc = action.payload;
      const locCards = 0;
      const percentCards = 0;

      // create the new market object from provided data
      const newMarket = {
        marketId: marketId,
        location: newLoc,
        numCards: locCards,
        percentOfTotalCards: percentCards
      }

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket)

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId: newLastMarketId,
        totalMarkets: newTotalMarket,
        newLocation: newLoc,
      };

    // what is this supposed to do?
    // case types.SET_NEW_LOCATION: 
    //   const newLocationObj = Object.assign({}, state, {newLocation: action.payload} );
    //   marketList = state.marketList.slice();
    //   marketList.push(newLocationObj);
    //   return newLocationObj;

    case types.ADD_CARD:{
      //payload is marketID for clicked market
      
      const newState = addRemoveMarketCards(state, action.payload, 1);
      return newState;
    }
    case types.DELETE_CARD: 
      const newState = addRemoveMarketCards(state, action.payload, -1);
      return newState;
    default: {
      return state;
    }
  }
};

// Helper class for updating number of local and total cards
const addRemoveMarketCards = (state, marketId, numToAdd) => {
  // Copy state
  const newState = structuredClone(state);
  // Increment total cards in state
  newState.totalCards = state.totalCards += numToAdd;

  for (const market of newState.marketList) {
    if (market.marketId === marketId) market.numCards += numToAdd;

    market.percentOfTotalCards = ((market.numCards / (newState.totalCards)) * 100).toFixed(1);
  }

  return newState;
}

export default marketsReducer;
