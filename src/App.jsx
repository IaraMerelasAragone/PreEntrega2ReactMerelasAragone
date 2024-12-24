import React from 'react';
import './css/style.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;