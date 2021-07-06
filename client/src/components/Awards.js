import React, {Component, Fragment} from 'react';

class Awards extends Component {
  render() {
    const {awardsAndActivities} = this.props;
    return (
      <Fragment>
        <section className="resume-section reference-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards & Activities</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled resume-awards-list">
              {awardsAndActivities && awardsAndActivities.map(award =>
                <li key={award} className="mb-2 pl-4 position-relative">
                  <i className="resume-award-icon fas fa-trophy position-absolute"
                     data-fa-transform="shrink-2"/>
                  <div>{award}</div>
                </li>)}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Awards;