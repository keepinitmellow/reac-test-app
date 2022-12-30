import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { getAllUsers} from './services/UserService'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
      });
  }, [])
    
    return (
        <div className="App">
          <Header></Header>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
        </div>
    );
}

export default App;
