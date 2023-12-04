export default function NavbarItem({name, url, setRadio, radio}){

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