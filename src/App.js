import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import First from './components/First';
import Loginn from './components/Loginn';
import Navbar from './components/Navbar';
import Map from './components/Map';
import{Routes,Route} from 'react-router-dom';
import SignUp from './SignUp';
import Mapp from './components/Mapp';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
     <Route path="/" element={<First/>}/>
     <Route path="/l" element={<Loginn person={{username:'Deepthi', password:'abcd'}}/>}/>
    
     <Route path="/m" element={<Map/>}/>
      <Route path="/s" element={<SignUp signupdata={{ name:"Saranya",email:"mrb@gmail.com", password:"abcd",phoneno:2345678}}  />}/>                                
      <Route path="/mm" element={<Mapp persondata={{ name:"Ramya",age:10, place:"Calicut"}} 
                                     phone={{phoneno:457890}}/>}/>
     </Routes>

     
    </div>
  );
}

export default App;
