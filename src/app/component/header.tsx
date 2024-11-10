import Link from "next/link";
import React from "react";

const Header = () => {
    return (
      <div className= "head">
        <div className= "heads">
          <Link href="./">Home</Link>
          <Link href="./About">About</Link>
          <Link href="./Service">Service</Link>
          <Link href="./contact">Contact</Link>
        </div>
      </div>
    )
  }
  
  export default Header;
  