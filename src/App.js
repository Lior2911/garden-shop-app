import "./App.css";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop"
import About from './components/pages/About/About'
import FarmsList from './components/pages/FarmsList'
import NavBar from "./components/features/NavBar/NavBar";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";
import ProtectedRoute from "./components/features/ProtectedRoute/ProtectedRoute";
import {Routes,Route}from 'react-router-dom'
import { Container } from "react-bootstrap";
import SignUpComp from './components/pages/SignUp/SignUp'
import LogInComp from "./components/pages/LogIn/LogIn";
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import { useUserAuth } from "./contexts/userAuthContext";


function App() {
  const {user} = useUserAuth()
  return (
    <>
<ShoppingCartProvider>
 

<Container className="mb-4">
{!user ? "" : <Header/>}
  <Routes>

    <Route path="/" element={<LogInComp/>} />
    <Route path="/SignUp" element={<SignUpComp/>} />
    <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
    <Route path="/Shop" element={<ProtectedRoute><Shop/></ProtectedRoute>} />
    <Route path="/About" element={<ProtectedRoute><About/></ProtectedRoute>} />
    <Route path="/FarmsList" element={<ProtectedRoute><FarmsList/></ProtectedRoute>} />
  </Routes>
</Container>



</ShoppingCartProvider>
</>
  );
}

export default App;
