import { useRef } from "react";

import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import { useState } from "react";
import { useEffect } from "react";
import ThreeCube from "./ThreeCube";

export default function Player({ radio }) {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);
  const [data, setData] = useState({})

  const toggleAudio = () => {
    audio.current.paused ? audio.current.play() : audio.current.pause();
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    setPlaying(false);
  }, [radio]);

  useEffect(() => {
    const fetchData = async () => {
        console.log("fetch !")
      try {
        const response = await fetch("https://ice.radio-pirate.com/status-json.xsl");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setData(data.icestats.source)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const refetch = setInterval(fetchData, 10000);

    return () => clearInterval(refetch);

  }, []);

  let song = ''

  if(data.length > 0){
       song = data.find(item => item.server_name === radio.url).title
    }

  return (
    <>
      <section>
        <audio
          ref={audio}
          src={`https://ice.radio-pirate.com/${radio.url}`}
        ></audio>
        <h2>{radio.name}</h2>
        <ThreeCube />
        <p>{song}</p>
        <img onClick={toggleAudio} src={playing ? pause : play} />
      </section>
    </>
  );
}
