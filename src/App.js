import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponents/>
      <div className="container">
      <Router>
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent/>}></Route>
            <Route path="employee" element={<ListEmployeeComponent/>}></Route>
            <Route path="add-employee" element={<CreateEmployeeComponent/>}></Route>
          </Routes>
      </Router>
      </div>
      <FooterComponents/>
    </div>
  

  );
}

export default App;
