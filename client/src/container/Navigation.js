import React, {Component, Fragment} from 'react';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">My Resume</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01"
                  aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="navbar-collapse collapse" id="navbarColor01" style={{}}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create New</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;