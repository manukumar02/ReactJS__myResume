import React, {Component, Fragment} from 'react';

class CareerObjective extends Component {
  render() {
    const {careerObjective} = this.props;
    return (
      <Fragment>
        <Fragment>
          <section className="resume-section summary-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Objective</h2>
            <div className="resume-section-content">
                <p>{careerObjective}</p>
            </div>
          </section>
        </Fragment>
      </Fragment>
    );
  }
}

export default CareerObjective;