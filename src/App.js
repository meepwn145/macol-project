import './App.css';
import Navbarcom from './Components/Navbarcom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbarcom/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
