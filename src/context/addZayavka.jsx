import React, { useState, createContext } from "react";

export const ZayavkaContext = createContext();
export default ZayavkaContext;

export const ZayavkaContextProvider = (props) => {
  const [zayavkas, setZayavka] = useState();

  const addZayavka = (zayavka) => {
    setZayavka([...zayavkas, zayavka]);
  };
  return (
    <ZayavkaContext.Provider
      value={{
        addZayavka,
        zayavkas,
        setZayavka
      }}>
      {props.children}{" "}
    </ZayavkaContext.Provider>
  );
};
