import NavbarItem from "./NavbarItem";

const radios = [
  { name: "water_lily.mp3", url: "water" },
  { name: "tamagucci.ogg", url: "tamagucci" },
  { name: "wallet", url: "wallet" },
];

export default function Navbar() {
  return (
    <>
      <h1>radio-pirate 🏴</h1>
      <div className="contact">
          <p>envoie nous ton son!</p>
          <a target="_blank" href="https://instagram.com"><img src="/insta.svg" alt="" /></a>
        </div> 
      <ul>
        {radios.map((item, index) => (
          <NavbarItem key={index} name={item.name} url={item.url} />
          ))}
      </ul>
    </>
  );
}
