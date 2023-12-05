import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [radio, setRadio] = useState({name: "water-lily.mp3", url: "water"})
  const [playing, setPlaying] = useState(false);


  return (
    <AppContext.Provider
      value={{
        radio,
        setRadio,
        playing,
        setPlaying
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
