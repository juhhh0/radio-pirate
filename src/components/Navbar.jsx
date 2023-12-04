import NavbarItem from "./NavbarItem";

const radios = [
    {name: "water-lily.mp3", url: "water"},
    {name: "tamagucci.ogg", url: "tamagucci"},
    {name: "ok.wav", url: "ok"}
]

export default function Navbar({setRadio, radio}){
    
    return (
        <nav>
        <h1>radio_pirate</h1>
        <ul>
            { radios.map((item, index) => (
                <NavbarItem key={index} radio={radio} setRadio={setRadio} name={item.name} url={item.url}/>
            ))
            }
        </ul>
      </nav>
    )   
}