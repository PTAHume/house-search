import { Component } from "react";
import logo from "./logo.png";

/*
class Header extends Component<any> {
  render() {
    return (
      <header className="header">
        <div className="col-md-5">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">{this.props.subtitle}</div>
      </header>
    );
  }
}
*/

const Header = ({ subtitle }: { subtitle: string }) => {
  return (
    <header className="header">
      <div className="col-md-5">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
