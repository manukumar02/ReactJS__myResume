import React, {Component, Fragment} from 'react';

class LanguagesKnown extends Component {
  render() {
    const {languages} = this.props;
    return (
      <Fragment>
        <section className="resume-section language-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled resume-lang-list">
              {languages && languages.map(langknw =>
                <li key={langknw.name} className="mb-2"><span className="resume-lang-name font-weight-bold">{langknw.name}</span>
                  <small className="text-muted font-weight-normal">({langknw.details})</small>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default LanguagesKnown;