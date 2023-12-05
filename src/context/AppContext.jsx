import { useEffect } from "react";
import { useRef } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const audio = useRef(null);
  const [radio, setRadio] = useState({ name: "water-lily.mp3", url: "water" });
  const [playing, setPlaying] = useState(false);
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    audio.current.load();
    if (playing) {
      audio.current.play();
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [radio]);

  useEffect(() => {
    if (playing) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ice.radio-pirate.com/status-json.xsl"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPlaylists(data.icestats.source);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const refetch = setInterval(fetchData, 10000);

    return () => clearInterval(refetch);
  }, []);

  return (
    <AppContext.Provider
      value={{
        radio,
        setRadio,
        playing,
        setPlaying,
        playlists,
      }}
    >
      <audio ref={audio}>
        <source
          type="audio/mpeg"
          src={`https://ice.radio-pirate.com/${radio.url}`}
        />
        <source
          type="audio/ogg"
          src={`https://ice.radio-pirate.com/${radio.url}`}
        />
        <source
          type="audio/aac"
          src={`https://ice.radio-pirate.com/${radio.url}`}
        />
        Your browser does not support the audio element.
      </audio>
      {children}
    </AppContext.Provider>
  );
};
