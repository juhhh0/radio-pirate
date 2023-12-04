import { useState } from "react"
import Navbar from "./components/Navbar"
import Player from "./components/Player"

function App() {
  const [radio, setRadio] = useState({name: "water-lily.mp3", url: "https://radio-pirate.com/kanye"})
  return (
    <>
    <main>
      <Navbar setRadio={setRadio}/>
      <Player radio={radio}/>
    </main>
    </>
  )
}

export default App
