import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeCimponent from './components/ViewEmployeeCimponent';
/*import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';*/

/*
Video Link referance
https://www.youtube.com/watch?v=XkVpb_8IPUM   2:21:00

Docker Link
https://github.com/jenkins-docs/simple-node-js-react-npm-app/blob/master/jenkins/Jenkinsfile

Simple Jenkins Run
https://adamtheautomator.com/jenkins-ci-cd/

Run React and Node on Jenkins
https://www.jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/
*/

function App() {
  return (
    <div>
      <HeaderComponents/>
      <div className="container"  style={{marginBottom:"50px"}}> 
      <Router>
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent/>}></Route>
            <Route path="employee" element={<ListEmployeeComponent/>}></Route>
            <Route path="add-update-employee/:id" element={<CreateEmployeeComponent/>}></Route>
            <Route path="view-employee/:id" element={<ViewEmployeeCimponent/>}></Route>
            { /*<Route path="update-employee/:id" element={<UpdateEmployeeComponent/>}></Route> */}
            
          </Routes>
      </Router>
      </div>
      <FooterComponents/>
    </div>
  

  );
}

export default App;
