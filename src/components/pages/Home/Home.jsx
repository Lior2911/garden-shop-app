import "./Home.css";
import React from "react";
import { useUserAuth } from "../../../contexts/userAuthContext";
import{Button} from "react-bootstrap"

function Home() {
  const {user , logOut} = useUserAuth();
  const handleLogOut = async ()=>{
    try{
      await logOut()
    }
    catch(err){
      console.log(err);
    }

  }
  
  return (
    <>

    <div className="p-4 box mt-3 text-center">hello welcome<br/>{user.email}</div>
  
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}> log out</Button>
    </div>
    </>
  );
};

export default Home;
