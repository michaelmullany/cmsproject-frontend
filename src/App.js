import { useState } from "react";
import './style.css';
import { AccessForm } from './Components/AccessForm';
import { MainApp } from './Components/mainApp'
import { Support } from './Components/support'


function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <MainApp />
      {/* {!user && <AccessForm setUser={setUser} />}
      {user && <MainApp user={user}/>}     */}
    </div>
  );
}

export default App;
