import { createContext, useState,useEffect } from "react";
export const ContextProvider = createContext();
export const StateContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, label: "NotSelected" },
    { id: 1, label: "Undefined" },
    { id: 2, label: "Dog" },
    { id: 3, label: "Horse" },
  ]);

  

  
  return (
    <ContextProvider.Provider value={{ data, setData }}>
      {children}
    </ContextProvider.Provider>
  );
};
