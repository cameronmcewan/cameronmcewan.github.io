import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" >Me.</a>
          <div className="itemContainer">
           <Person className="icon" />
           <span>+44 7757 968 947</span>
          </div>
          <div className="itemContainer">
           <Mail className="icon" />
           <span>cammcewan16@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
