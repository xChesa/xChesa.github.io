/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from 'react';
import Market from './Market.jsx';


const MarketsDisplay = props => {
  const allMarkets = [];
  console.log("Market list from disp: " + JSON.stringify(props.marketList));
  // if (!props.marketList) return null;
  for(let i=0; i<props.marketList.length; i++){
    console.log("Market list from disp: " + JSON.stringify(props.marketList[i]));
    allMarkets.push(<Market id={`Market${i}`} addCard={props.addCard} deleteCard={props.deleteCard} market={props.marketList[i]}/>);
  }

  return(
    <div className="displayBox">
      <h4>Markets</h4>
      {allMarkets}
    </div>
  );
};

export default MarketsDisplay;