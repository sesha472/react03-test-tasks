
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Calculations from './components/Calculations';
import Datagetting from './components/Datagetting';
import Firebaseupload from './components/Firebaseupload';
import Mathcalculations from './components/Mathcalculations';
import User from './components/Userinput';
import Navbar from './components/Navbar';
import Errormsg from './Errormsg';
import IncrimentReducer from './components/IncrimentReducer';
import  Testhook  from './components/Testhook';


function App() {
  return (
      <>
        <nav>
    <Navbar/>

         <Routes>

          <Route path="/" element={<Calculations/>}/> 
          <Route path="/testhook" element={<Testhook/>}/>
          <Route path="/datagetting" element={<Datagetting/>}/>
          <Route path="/mathcalculations" element={<Mathcalculations/>}/>
          <Route path="/firebaseupload" element={<Firebaseupload/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/*" element={<Errormsg/>}/>
          <Route path='/incrimentReducer' element={<IncrimentReducer/>}/>

         </Routes>
        </nav>
      </>
      
  )
}

export default App
