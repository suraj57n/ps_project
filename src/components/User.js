import React from 'react';
import Endpart from './Endpart';
import NewNav from './NewNav';
function User()
{
        return(
            <div>
              <NewNav/>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="dropdown-center">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Field Selection
                </button>
                <br /> <br />
                <ul className="dropdown-menu">
                  <li><form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form></li>
                  <li><form action /></li>
                  <li><a className="dropdown-item" href="/">Machine learning</a></li>
                  <li><a className="dropdown-item" href="/">Data science</a></li>
                  <li><a className="dropdown-item" href="/">Web development</a></li>
                </ul>
              </div>
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
            <div className="col-lg-8 col-md-8" style={{paddingLeft: '3rem'}}>
              <img id="stat" className="img-fluid" style={{height: '540px'}} src="https://media.makeameme.org/created/chart-2401d9507c.jpg" alt="" />
              <footer><h1 style={{textAlign: 'center'}}>stats graph</h1></footer>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className="container" id="but">
          <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-success bg-dark">Download file</button>
          <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-danger bg-dark">Go back</button>
          <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-danger bg-dark">Download given data</button>
        </div><br /><br />
        <Endpart/>
      </div>
        )
}
export default User