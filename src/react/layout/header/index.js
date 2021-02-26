import logo from "images/logo.png";

import Search from "react/components/search";
import UserNav from "react/components/user-nav";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="airbrb logo" className="logo" />
      <Search />
      <UserNav />
    </header>
  );
}
