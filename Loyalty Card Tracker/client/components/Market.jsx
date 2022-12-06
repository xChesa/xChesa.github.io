/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';

const Market = props => (
  <div className="marketBox">
    <p><strong>Market ID: </strong>{props.market.marketId}</p>
    <p><strong>Location: </strong>{props.market.location}</p>
    <p><strong>Cards: </strong>{props.market.numCards}</p>
    <p><strong>% of total: </strong>{props.market.percentOfTotalCards}</p>
    <p><button id="add-card" onClick={() => {
      props.addCard(props.market.marketId)}
    }>Add Card</button>
      <button id="delete-card" onClick={() => {
        props.deleteCard(props.market.marketId)
      }}>Delete Card</button>
    </p>
  </div>
);

export default Market;