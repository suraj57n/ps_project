// // import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
// import NewNav from "./components/NewNav";
// import Endpart from './components/Endpart.js'
import Home from "./components/Home";
import Stats from "./components/Stats";
import Admin from "./components/Admin";
import User from "./components/User";
import Endpart from "./components/Endpart";
function App() {
  return (
    <div>
      {/* <Stats/>
      <User/>
      <Admin/> */}
      {/* <table/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Stats" element={<Stats/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/User" element={<User/>}/>  
        <Route path="/Endpart" element={<Endpart/>}/>  
      </Routes>
      </div>
    
   );
  // <div>
      
   
//* // const App=()=>{ 
///* //   return(
//     <div>
//       <h1>List of sample data</h1>
//         <h2>data will be displayed here</h2>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th scope="col">S.no</th>
//               <th scope="col">Name</th>
//               <th scope="col">Longitute</th>
//               <th scope="col">Latitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//             Sampledata.map((record) =>{
//               const id=record.id;
//               const city=record.name;
//               const la=record.lati;
//               const lo=record.lon;
//               return(<tr key={id}><td>{id}</td><td>{city}</td><td>{la}</td><td>{lo}</td></tr>);
//             })
//           }
//           </tbody>
//         </table>
//     </div>
  } 
export default App
