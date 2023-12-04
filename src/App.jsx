import { useState } from "react"
import Navbar from "./components/Navbar"
import Player from "./components/Player"

function App() {
  const [radio, setRadio] = useState({name: "water-lily.mp3", url: "water"})
  return (
    <>
    <main>
      <Navbar setRadio={setRadio} radio={radio}/>
      <Player radio={radio}/>
    </main>
    </>
  )
}

export default App
