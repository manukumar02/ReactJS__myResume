import React, {Component, Fragment} from 'react';

class Interest extends Component {
  render() {
    const {interests} = this.props;
    return (
      <Fragment>
        <section className="resume-section interests-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled">
              {interests && interests.map(intr =>
                <li key={intr} className="mb-1">{intr}</li>
              )}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Interest;