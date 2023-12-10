import { useEffect } from "react";
import { useRef } from "react";
import { createContext, useState } from "react";
import {isMobile, isSafari} from "react-device-detect";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const audio = useRef(null);
  const [radio, setRadio] = useState({ name: "water_lily.mp3", url: "water" });
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

  const src = `https://ice.radio-pirate.com/${radio.url}${isMobile || isSafari ? "-mp3" : ""}`

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
          src={src}
        />
        <source
          type="audio/ogg"
          src={src}
        />
        <source
          type="audio/aac"
          src={src}
        />
        Your browser does not support the audio element.
      </audio>
      {children}
    </AppContext.Provider>
  );
};
