import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Weather from './Weather';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App " >
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="weather" element={<Weather/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="signup" element={<Signup/>}/>
     </Routes>
    </div>
  );
}

export default App;
