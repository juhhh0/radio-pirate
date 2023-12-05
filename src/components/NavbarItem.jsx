import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function NavbarItem({name, url}){

    const {radio, setRadio} = useContext(AppContext)

    const handleClick = () => {
        setRadio({name: name, url: url})
    }

    const isCurrent = radio.name == name

    return(
        <li className={isCurrent ? "current" : ""} onClick={handleClick}>
            {name}
        </li>
    )
}