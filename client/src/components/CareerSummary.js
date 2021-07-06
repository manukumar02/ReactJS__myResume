import React, {Component, Fragment} from 'react';

class CareerSummary extends Component {
  render() {
    const {careerSummary} = this.props;
    console.log(careerSummary);
    return (
      <Fragment>
        <section className="resume-section summary-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
          <div className="resume-section-content">
            <ul>
              {careerSummary.map(career =>
                <li key={career}>{career}</li>
              )}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default CareerSummary;