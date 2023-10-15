import React, { useState,useEffect } from "react";
import './Card.css';
import { useDataContext } from "../Hooks/useDataContext";
import Navbar from "./Navbar";



const Card = (props) => {
    const [ data, setData ] = useState([
        { id: 1, label: "NotSelected" },
        { id: 2, label: "Dog" },
        { id: 3, label: "Horse" },
      ]);
    const [admin, setAdmin] = useState(false)
    const [option, setOption] = useState()


  
    const setLabel = (i) => {
   const result = props.allcards.map((pre) => pre.id===i ? {...pre,name:option}: pre )
        props.setAllCards(result);
    }

    

    const removeLabel = (i) => {
   const result = props.allcards.map((pre) => pre.id===i ? {...pre,name:'Undefined'}: pre )
        props.setAllCards(result);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setData(items);
        }
      }, []);

    return (
        <>
        <div className="card">
            <img src={props.item.img} alt="Animal" />
            <div className="card-holder">
            <span>{props.item.name}</span>

            <span > LABEL:
            <select className="select" onChange={(e)=>setOption(e.target.value)}>
                {data && data.map((item, i) => {
                    return <option className="classifer">{ item.label}</option>
                })}
            </select>
            </span>
            
            <div className="buttons">
            <button onClick={()=>setLabel(props.id)}>Set Label</button>
                    <button onClick={() => removeLabel(props.id)}>Remove Label</button>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Card