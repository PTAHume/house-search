import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ subtitle }: { subtitle: string }) => {
  const history = useNavigate()
  const handleClick = () =>{
    history("/");
  }
  return (
    <header className="header">
      <div className="col-md-5">
        <img src={logo} style={{cursor:'pointer'}} className="logo" title="Home" alt="Home" onClick={handleClick} />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
