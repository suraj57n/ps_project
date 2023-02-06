import React from "react";
import Endpart from "./Endpart";
import NewNav from "./NewNav";
class Home extends React.Component{
  render()
  {
    return(
    <div className="mybody">
    <NewNav/>
    <h1 style={{backgroundColor: 'aqua'}}>List of most applied field</h1>
    <div className="row">
      <div className="col-lg-6 col-md-4">
        <div className="container">
          <div className="col-lg-8 col-md-4">
            <div className="btn-group col-lg-3">
              <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul className="dropdown-menu">
                <li><p>This Week</p></li>
                <li><p>This Month</p></li>
                <li><p>This Year</p></li>
                <li><p>Closest deadline</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div>
        <table className="table " style={{backgroundColor: '#FF9999'}}>
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
    <br /><br /><br />
    <div className="container" id="but">
      <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-success bg-dark">Download file</button>
      <button style={{backgroundColor: 'yellow'}} type="button" className="btn btn-outline-danger bg-dark">Go back</button>
    </div><br /><br />
    <br /><br />
    <Endpart/>
  </div>)
  }
}
export default Home