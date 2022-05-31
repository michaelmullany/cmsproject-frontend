import { useState } from "react";
import './style.css';
import { AccessForm } from './Components/AccessForm';
import { MainApp } from './Components/mainApp'

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {/* <MainApp user={user} setUser={setUser}/> */}
      {!user && <AccessForm setUser={setUser} />}
      {user && <MainApp user={user} setUser={setUser}/>}    
    </div>
  );
}

export default App;
