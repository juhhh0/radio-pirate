import NavbarItem from "./NavbarItem";

export default function Navbar({setRadio}){
    return (
        <nav>
        <h1>pirate_radio</h1>
        <ul>
          <NavbarItem setRadio={setRadio} name="water-lily.mp3" url="https://ice.radio-pirate.com/water" />
          <NavbarItem setRadio={setRadio} name="tamagucci.ogg" url="https://ice.radio-pirate.com/tamagucci" />
          <NavbarItem setRadio={setRadio} name="ok.wav" url="https://ice.radio-pirate.com/ok" />
        </ul>
      </nav>
    )   
}