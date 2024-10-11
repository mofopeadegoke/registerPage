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
        <span>
          For more details, contact Dr. Opeoluwa Seun Ojekemi - Liason Diaspora
          Officer to the Office of the Senior Special Advisor to the President
          on Student engagement. <br /> Phone number: +90 542 884 73 58
        </span>
        <span className="credits">Design by Ada Reinhold</span>
      </footer>
    </>
  );
}
