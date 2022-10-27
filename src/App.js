import "./App.css";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop"
import About from './components/pages/About/About'
import FarmsList from './components/pages/FarmsList'
import NavBar from "./components/features/NavBar/NavBar";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";

import {Routes,Route}from 'react-router-dom'
import { Container } from "react-bootstrap";
import {Button} from '@mui/material'



function App() {
  return (
    <>
<ShoppingCartProvider>
 <NavBar/>
<Container className="mb-4">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Shop" element={<Shop/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/FarmsList" element={<FarmsList/>} />
  </Routes>
</Container>
</ShoppingCartProvider>
</>
  );
}

export default App;
