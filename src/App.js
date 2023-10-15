import Admin from "./Admin/Admin";
import { React, useState,useEffect } from "react";
import "./App.css";
import Client from "./Client/Client";
import Login from "./Login/Login";
import { Route, Routes, Navigate,useNavigate } from "react-router-dom";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Layout from "./Layout";

function App() {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate()
  console.log(userRole)

  useEffect(() => {
    
    navigate("/login")
    
  }, [])
  

  return (
    // <div>
    // <Navbar/>
    // <Routes>
    //   <Route path='/' element={<Login />} />
    //   <Route path='/Client' element={<Client />} />
    //   <Route path='/Admin' element={<Admin />} />
    //   <Route path='/Cards' element={<Cards/>} />
    //   </Routes>
    //   </div>

    // <>
    //   <nav>
    //     <Navbar />
    //   </nav>

    //   <Routes>
    //     <Route path="/login" element={<Login setUserRole={setUserRole} />} />
    //     {userRole ? (
    //       <>
    //       <Route
    //         path="/admin"
    //         element={<Layout userRole={userRole} />}
    //       />
    //       </>
    //     ) : (
    //       <Route
    //         path="/*"
    //         element={<Navigate to="/login" />} // Redirect to login if not authenticated
    //       />
    //     )}
    //   </Routes>
    // </>
    <>
   
    <Routes>
      
      <Route path="/login" element={<Login setUserRole={setUserRole} />} />
      {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} /> */}
      <Route
        path="/admin"
        element={userRole === "admin" ? <Admin userRole={userRole} /> : <Navigate to="/login" />}
      />

      

      <Route
        path="/cards"
        element={userRole ? <Cards userRole={userRole} /> : <Navigate to="/login" />}
      />

      
    </Routes>
    </>
  );
}

export default App;
