import React from 'react';
import customLogoImage from './../img/customLogoImage.png'

function Header() {
  return (
    <>
    <img src={customLogoImage} alt="A beer and wheat" />
    <hr />
    </>
  );
}

export default Header;