import React, {Component, Fragment} from 'react';
import resume from "../resume";
import Header from "../components/Header";
import CareerObjective from "../components/CareerObjective";
import CareerSummary from "../components/CareerSummary";
import WorkExperience from "../components/WorkExperience";
import SkillsAndTools from "../components/SkillsAndTools";
import Education from "../components/Education";
import Awards from "../components/Awards";
import LanguagesKnown from "../components/LanguagesKnown";
import Interest from "../components/Interest";

class Resume extends Component {
  render() {
    const {
      name,
      image,
      title,
      email,
      phone,
      linkedin,
      github,
      careerObjective,
      careerSummary,
      experiences,
      awardsAndActivities,
      skills,
      otherSkills,
      education,
      languages,
      interests
    } = resume;
    console.log(resume);
    
    const resumeHeader = (
      <Fragment>
        <Header
          name={name}
          image={image}
          title={title}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
        />
      </Fragment>
    );
    
    const careerObj = (
      <Fragment>
        <CareerObjective careerObjective={careerObjective}/>
      </Fragment>
    );
    
    const careerSumry = (
      <Fragment>
        <CareerSummary careerSummary={careerSummary}/>
      </Fragment>
    );
    
    const workExperience = (
      <Fragment>
        <WorkExperience experiences={experiences}/>
      </Fragment>
    );
    
    const skillsAndTools = (
      <Fragment>
        <SkillsAndTools skills={skills} otherSkills={otherSkills}/>
      </Fragment>
    );
    
    const educationList = (
      <Fragment>
        <Education education={education}/>
      </Fragment>
    );
    const awardList = (
      <Fragment>
        <Awards awardsAndActivities={awardsAndActivities}/>
      </Fragment>
    );
    
    const languagesKnown = (
      <Fragment>
        <LanguagesKnown languages={languages}/>
      </Fragment>
    );
    
    const interestList = (
      <Fragment>
        <Interest interests={interests}/>
      </Fragment>
    )
    
    return (
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          {resumeHeader}
          <div className="resume-body p-5">
            {careerObj}
            {careerSumry}
            <div className="row">
              <div className="col-lg-9">
                {workExperience}
              </div>
              <div className="col-lg-3">
                {skillsAndTools}
                {educationList}
                {awardList}
                {languagesKnown}
                {interestList}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Resume;