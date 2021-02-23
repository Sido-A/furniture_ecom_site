import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <MobileMenu mobileMenuToggle={mobileMenuToggle} isOpen={isOpen} />
      <DesktopMenu mobileMenuToggle={mobileMenuToggle} isOpen={isOpen} />
    </header>
  );
}

export default Header;
