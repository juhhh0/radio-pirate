import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import ThreeCube from "./ThreeCube";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Player() {
  const { radio, playing, setPlaying, playlists } = useContext(AppContext);

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  let song = "";

  if (playlists.length > 0) {
    song = playlists.find(
      (playlist) => playlist.server_name === radio.url
    ).title;
  }

  return (
    <>
      <h2>{radio.name}</h2>
      <ThreeCube />
      <div className="player">
        <p>{song}</p>
        <img onClick={togglePlaying} src={playing ? pause : play} />
      </div>
    </>
  );
}
