import React from 'react';
import customLogoImage from './../img/customLogoImage.png'

function Header() {
  return (
    <>
      <div id="header">
        <img src={customLogoImage} alt="A beer and wheat" />
        <hr />
      </div>
    </>
  );
}

export default Header;