/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

//
const MarketCreator = props => {
  // how do we create the circuit between the store and an input field?
  return(
    <div>
      <h3>Create New Market</h3>
      <span>
        <p style = {style.container}><strong>Location: </strong>
          <input id="addMarketLocation" type="text"></input>
          <button onClick={ () => {
            props.addMarket(document.getElementById('addMarketLocation').value);
          }}>Add Market</button>
        </p>
      </span>
    </div>
  );
  // how do we update the store from a presentation component?
};
const style ={
    container: {
        borderBottom: '1px solid black'
    }
}

export default MarketCreator;