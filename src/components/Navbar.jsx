import NavbarItem from "./NavbarItem";

const radios = [
  { name: "water_lily.mp3", url: "water" },
  { name: "tamagucci.ogg", url: "tamagucci" },
  { name: "ok.wav", url: "ok" },
];

export default function Navbar() {
  return (
    <>
      <h1>radio-pirate 🏴</h1>
      <ul>
        {radios.map((item, index) => (
          <NavbarItem key={index} name={item.name} url={item.url} />
          ))}
      </ul>
    </>
  );
}
