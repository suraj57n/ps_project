import React from 'react';
import Endpart from './Endpart';
import MyStats from './MyStats';
import NewNav from './NewNav';
function Stats()
{
    return(
          <div>
            <NewNav/>
        <div className="mybody">
          <div className="row">
            <div className="container">
              <div className="col-lg-8 col-md-4">
                <button className="btn btn-secondary btn-lg dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginBottom: 0}}>
                  Sort
                </button>
                <ul className="dropdown-menu">
                  <li><form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit" id="st">Search</button>
                    </form></li>
                  <li><p>Web development</p></li>
                  <li><p>Mschine learning</p></li>
                  <li><p>Artificial inteliigence</p></li>
                  <li><p>App Development</p></li>
                </ul>
              </div>
              <div className="row p-3">
                <div className="col-sm-6 py-5">
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
                </div>
                <div className="col-sm-6 py-5">
                  <div className="d-flex justify-content-end">
                   <MyStats/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br/>
      <Endpart/>
      </div>
        )
}

export default Stats