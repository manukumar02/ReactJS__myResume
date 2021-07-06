import React, {Component, Fragment} from 'react';
import Navigation from "./container/Navigation";
import Resume from "./container/Resume";


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Navigation/>
          <Resume/>
        </div>
      </Fragment>
    )
  }
}

export default App;
