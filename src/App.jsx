import { useState } from "react"
import Navbar from "./components/Navbar"
import Player from "./components/Player"

function App() {
  const [radio, setRadio] = useState({name: "water-lily.mp3", url: "water"})

  return (
    <>
    <main>
      <Navbar />
      <Player/>
    </main>
    </>
  )
}

export default App
