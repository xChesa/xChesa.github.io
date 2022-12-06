/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';

//Makes a new props object for the class it is connected to
const mapStateToProps = state => {
  console.log(state);
  console.log(state.markets.totalCards);
  console.log(state.markets.totalMarkets);
  return {
    totalCards: state.markets.totalCards,
    totalMarkets: state.markets.totalMarkets,
  }
}

// => props: {totalCards: state.markets.totalCards, totalMarkets: state.markets.totalMarkets}
// => this / MainContainer NOT TotalsDisplay or any other children

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets} />
          <MarketsContainer />
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(MainContainer);