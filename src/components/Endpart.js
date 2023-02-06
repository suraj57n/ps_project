import React from 'react';
class Endpart extends React.Component {
  render(){
          return(
            <div>
            <footer id="info" className="text-center text-lg-start bg-dark text-white">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>
                <a href="#" className="me-4 link-secondary">
                  <i className="bi bi-facebook" />
                </a>
                <a href className="me-4 link-secondary">
                  <i className="bi bi-twitter" />
                </a>
                <a href className="me-4 link-secondary">
                  <i className="bi bi-google" />
                </a>
                <a href className="me-4 link-secondary">
                  <i className="bi bi-instagram" />
                </a>
                <a href className="me-4 link-secondary">
                  <i className="bi bi-linkedin" />
                </a>
                <a href className="me-4 link-secondary">
                  <i className="bi bi-github" />
                </a>
              </section>
              <section cl>
                <div className="container text-center text-md-start mt-5">
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Admins</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset" />
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Last dates Alert</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Help</a>
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3 text-secondary" />KMIT,HYDERABAD</p>
                    <p>
                      <i className="fas fa-envelope me-3 text-secondary" />
                      info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
                  </div>
                </div>
                <br/><br/><br/><br/>
              </section>
            </footer>
            
          </div>
          )
  }
}
export default Endpart