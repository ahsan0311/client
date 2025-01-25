import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";




const App = () => {

  return (
    <>
    
    {/* <Navbar/> */}
    <Home/>
    <Outlet/>

  
    
    </>
  );
};

export default App;





