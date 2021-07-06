import React, {Component, Fragment} from 'react';

class WorkExperience extends Component {
  render() {
    const {experiences} = this.props;
    return (
      <Fragment>
        <section className="resume-section experience-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
          <div className="resume-section-content">
            <div className="resume-timeline position-relative">
              {experiences && experiences.map(exp =>
                <article key={exp.id}
                         className="resume-timeline-item position-relative pb-5">
                  
                  <div className="resume-timeline-item-header mb-2">
                    <div className="d-flex flex-column flex-md-row">
                      <h3 className="resume-position-title font-weight-bold mb-1">{exp.role}</h3>
                      <div className="resume-company-name ml-auto font-weight-bold">{exp.company}</div>
                    </div>
                    
                    <div className="resume-position-time">{exp.period}</div>
                    <div className="resume-company-name ml-auto">{'Client: ' + exp.client}</div>
                    <div className="resume-company-name ml-auto">{'Project Name: ' + exp.projectName}</div>
                    <div className="resume-company-name ml-auto">{exp.teamSize && 'Team Size: ' + exp.teamSize}</div>
                    <div className="resume-company-name ml-auto">{exp.company}</div>
                  </div>
                  
                  <div className="resume-timeline-item-desc">
                    <p>{exp.description}</p>
                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Responsibility:</h4>
                    <ul>
                      {exp.responsibilities.map(resp =>
                        <li key={resp}>{resp}</li>
                      )}
                    </ul>
                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                    <ul className="list-inline">
                      {exp.languages && exp.languages.map(lang =>
                        <li key={lang} className="list-inline-item"><span
                          className="badge badge-primary badge-pill">{lang}</span></li>
                      )}
                    </ul>
                  </div>
                </article>)}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WorkExperience;