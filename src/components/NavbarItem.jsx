export default function NavbarItem({name, url, setRadio}){

    const handleClick = () => {
        setRadio({name: name, url: url})
    }

    return(
        <li onClick={handleClick}>
            {name}
        </li>
    )
}