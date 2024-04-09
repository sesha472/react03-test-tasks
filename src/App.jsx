
import './App.css'
import Calculations from './components/Calculations'
import Datagetting from './components/Datagetting'
import Firebaseupload from './components/Firebaseupload'
import Mathcalculations from './components/Mathcalculations'
import User from './components/Userinput'

function App() {

  return (
    
      <div>
        <Firebaseupload/>
        <Datagetting/>
        <br/>
      <Calculations/>
      <br></br>
      <br></br>
      <User/>
      <br/>
      <Mathcalculations/>
      </div>
      
    
  )
}

export default App
