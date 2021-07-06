import React, {Component, Fragment} from 'react';

class Education extends Component {
  render() {
    const {education} = this.props;
    return (
      <Fragment>
        <section className="resume-section education-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled">
              {education && education.map(edu =>
                <li className="mb-2" key={edu.degree}>
                  <div className="resume-degree font-weight-bold">{edu.degree}</div>
                  <div className="resume-degree-org">{edu.university}</div>
                  <div className="resume-degree-time">{edu.period}</div>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Education;