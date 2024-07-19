import "./App.css";
import RegBox from "./components/register";
import logo from "./images/logoDias.png";

export default function RegPage() {
  return (
    <>
      <main>
        <RegBox />
        <img src={logo} alt="The logo of SSA" className="leftImg" />
      </main>
      <footer>
        <span>Design by Ada Reinhold</span>
        <span>&copy; 2024</span>
      </footer>
    </>
  );
}
