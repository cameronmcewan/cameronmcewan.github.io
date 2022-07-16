import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/headshot1.jpeg" alt="" />
          </div>

        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Cameron McEwan</h1>
            <h3>Welcome to my website.</h3>
          </div>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="arrow" />
          </a>
        </div>
    </div>
  )
}
