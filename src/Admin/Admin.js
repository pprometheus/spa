import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import './Admin.css';
import { useDataContext } from '../Hooks/useDataContext';
import Navbar from "../Components/Navbar";

const Admin = ({userRole}) => {

    console.log(userRole)

    const navigate = useNavigate()

    const { data, setData } = useDataContext()
    // const [data,setData] = useState()
    const [label, setLabel] = useState()

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setData(items);
        }
      }, []);

    const submit = () => {

        setData((prevItems) => {
            const newItems = [...data,{label:label}];
            window.localStorage.setItem("items", JSON.stringify(newItems));
            return newItems;
          });

        
        
        
    }

    console.log(data)
    if(userRole === 'admin'){
        return (
            <>
            <Navbar userRole={userRole}  />
            <div className="admin-container">
            <button className='view' onClick={() => navigate("/cards")}>View Client</button>

                 <div className="input">

                 <input onChange={(e)=>setLabel(e.target.value)} type="text" name="newlabel"/>
                     <button onClick={submit}>Add New Label</button>
                 </div>
     
                 <div className="label-container">
                     {data && data.map((item, i) => {
                         return <span key={i} className="classifer">{ item.label}</span>
                     })}
                    
                 </div>
     
             </div>
             </>
         );
    }
   
}

export default Admin