import React, {Component, Fragment} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {image, title, name, phone, email, linkedin, github} = this.props;
    return (
      <Fragment>
        <header className="resume-header pt-4 pt-md-0">
          <div className="media flex-column flex-md-row">
            <img className="mr-3 img-fluid picture mx-auto" src={image} alt=""/>
            <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
              <div className="primary-info">
                <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{name}</h1>
                <div className="title mb-3">{title}</div>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#">
                    <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"/>{email.toUpperCase()}
                  </a>
                  </li>
                  <li><a href="#"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"/>{phone}</a>
                  </li>
                </ul>
              </div>
              <div className="secondary-info ml-md-auto mt-2">
                <ul className="resume-social list-unstyled">
                  <li className="mb-3">
                    <a href={linkedin}>
                    <span className="fa-container text-center mr-2">
                      <i className="fab fa-linkedin-in fa-fw"/>
                    </span>Linkedin
                    </a>
                  </li>
                  <li className="mb-3"><a href={github}><span className="fa-container text-center mr-2"><i
                    className="fab fa-github-alt fa-fw"/></span>Github</a></li>
                </ul>
              </div>
            </div>
          
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;