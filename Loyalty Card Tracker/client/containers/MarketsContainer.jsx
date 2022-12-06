/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import MarketsDisplay from '../components/MarketsDisplay.jsx'
import MarketCreator from '../components/MarketCreator.jsx';

const mapStateToProps = state => ({
  // provide pertinent state here
  marketList: state.markets.marketList,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addMarket: (location) => dispatch(actions.addMarketActionCreator(location)),
  addCard: (marketId) => dispatch(actions.addCardActionCreator(marketId)),
  deleteCard: (marketId) => dispatch(actions.deleteCardActionCreator(marketId)),
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        { /* add components here... */ }
        <MarketCreator addMarket={this.props.addMarket}/>
        <MarketsDisplay addCard={this.props.addCard} deleteCard={this.props.deleteCard} marketList={this.props.marketList}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
