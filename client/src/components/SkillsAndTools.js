import React, {Component, Fragment} from 'react';

class SkillsAndTools extends Component {
  render() {
    const {skills, otherSkills} = this.props;
    return (
      <Fragment>
        <section className="resume-section skills-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
          <div className="resume-section-content">
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
              <ul className="list-unstyled mb-4">
                {skills && skills.map(skill =>
                  <li key={skill.name} className="mb-2">
                    <div className="resume-skill-name">{skill.name}</div>
                    <div className="progress resume-progress">
                      <div className="progress-bar theme-progress-bar-dark" style={{width: skill.percent}} role="progressbar"
                           aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Other Skills</h4>
              <hr/>
              <ul className="list-inline">
                {otherSkills && otherSkills.map(othSkl =>
                  <li key={othSkl} className="list-inline-item"><span className="badge badge-light">{othSkl}</span></li>
                )}
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SkillsAndTools;