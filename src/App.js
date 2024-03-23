import './App.css';
import Homepage from './Components/Homepage';
import {Route,Routes} from "react-router-dom";
import Layout from './Components/Layout';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Dashboard/Profile';
import addMedicine from './Components/Dashboard/Addmedicine';
import addPatient from './Components/Dashboard/AddPatient';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='about-us' element={<div>Aboutus</div>}/>
          <Route path='/user/profile' element={<Profile/>}/>
          <Route path='addPatient' element={<addPatient/>}/>
          <Route path='addMedicine' element={<addMedicine/>}/>
        </Route>
        
      </Routes>
  );
}

export default App;
