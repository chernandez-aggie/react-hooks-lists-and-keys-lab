import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkTags = links.map((link) => {
    return <a href = {"#" + link} key = {link}>{link}</a>;
  }); 

  return <nav>{linkTags}</nav>;
}


export default NavBar;
