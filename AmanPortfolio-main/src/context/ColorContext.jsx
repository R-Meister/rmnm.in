import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ContextProvider = (props) => {
  const colorMode = JSON.parse(localStorage.getItem("colorMode"));
  const [clr, setclr] = useState(colorMode || true);
  return (
    <ColorContext.Provider value={{ clr, setclr }}>
      {props.children}
    </ColorContext.Provider>
  );
};
