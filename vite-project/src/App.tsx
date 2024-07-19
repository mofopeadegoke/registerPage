import "./App.css";
import RegBox from "./components/register";
import sideImg from "./images/image.svg";

export default function RegPage() {
  return (
    <>
      <main>
        <RegBox />
        <img
          src={sideImg}
          alt="A person floating mid air and smiling with a flower vase below them"
          className="leftImg"
        />
      </main>
      <footer>
        <span>Design by Ada Reinhold</span>
        <span>&copy; 2024</span>
      </footer>
    </>
  );
}
