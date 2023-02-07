import React from 'react';
import Endpart from './Endpart';
import NewNav from './NewNav';
function Admin()
    {
        return(
            <div className="mybody">
             <NewNav/>
            <div className="container-fluid mb-3">
              <div className="row">
                <div className="dropdown-center">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Field Selection
                  </button>
                  <ul className="dropdown-menu">
                    <li><form action /></li>
                    <li><a className="dropdown-item" href="/">Recent uploads</a></li>
                    <li><a className="dropdown-item" href="/">Last edits</a></li>
                    <li><a className="dropdown-item" href="/">All uploads</a></li>
                    <li><a className="dropdown-item" href="/">Upload and edit history</a></li>
                  </ul>
                </div>   
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-6">
                <table style={{backgroundColor: '#FF9999', width: '100%', height: '100%'}} className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container" id="but">
                  <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-success bg-dark"><span className="material-symbols-outlined">
                      upload_file
                    </span>  Upload file</button>
                  <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-danger bg-dark">Go back</button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-end"><img src="https://img.freepik.com/free-vector/man-with-laptop-analyzing-infographics-diagram-bar-chart-report-flat-vector-illustration-analysis-marketing-project-manager_74855-8454.jpg?w=2000" id="ig" width="50%" height="auto" />
                  
                </div>
                <div className="mt-1 d-flex flex-column align-items-end">
                  <table style={{backgroundColor: '#FF9999'}} className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Endpart/>
          </div>
        )
}
export default Admin