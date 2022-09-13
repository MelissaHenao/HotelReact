import { Routes, Route, Link } from "react-router-dom";
import {Home} from '../Home/Home.js'
import {Menu} from '../Menu/Menu.js'

export function Rutas(){
    
    return (
        <div className="App">
          <h1>Welcome to React Router!</h1>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
  
          </Routes>
        </div>
      );


}