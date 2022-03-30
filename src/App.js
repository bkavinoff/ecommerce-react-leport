import React, {useEffect, useState} from 'react';

//css:
import './App.css';

//Componentes:
import Navbar from './components/Navbar/Navbar'
import ItemList from './components/ItemList/ItemList'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'

//services:
import {getUsers} from '../src/components/services/users.service'


function App() {
//const [users, setUsers] = useState([]);

//   useEffect( () => {
//     //console.log("Users: " + getUsers());
//     setUsers(getUsers());
//  }, [])//se ejecuta una sola vez cuando se genera el componente
 
  return (
    <div className="App">

      {/* <div>{users.map( (user) => (
        <div key = {user.id}>{user.name}</div>
        ) )}
      </div> */}

      <Navbar />
      <ItemDetailContainer id="0"/>
      <ItemList />
      
    </div>
  );
}

export default App;
