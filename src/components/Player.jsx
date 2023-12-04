import { useRef } from "react"

import play from "../assets/play.svg"
import pause from "../assets/pause.svg"
import { useState } from "react"
import { useEffect } from "react"

export default function Player({radio}){
    const [playing, setPlaying] = useState(false)
    const audio = useRef(null)

    const toggleAudio = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause()
        setPlaying(prev => !prev)
        
    }

    useEffect(() => {
        setPlaying(false)
    }, [radio])
    return (
        <>
        <section>
            <audio ref={audio} src={radio.url}></audio>
            <h2>{radio.name}</h2>
           <img onClick={toggleAudio} src={playing? pause : play} />
        </section>
        </>
    )
}