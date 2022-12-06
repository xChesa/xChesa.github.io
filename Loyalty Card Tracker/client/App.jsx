/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {/* return Main Container, which contains TotalsDisplay and MarketsContainer */}
        <MainContainer/>
      </div>
    );
  }
}

export default App;
