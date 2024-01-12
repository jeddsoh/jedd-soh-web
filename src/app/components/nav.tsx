import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem } from "@nextui-org/react";
import { User, Link, Button } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCode, faUser, faComment } from "@fortawesome/free-solid-svg-icons";


export default function Nav() {
  return (
    <Navbar maxWidth="lg">
      <NavbarBrand>
      <User
      name={(
        <p className="font-semibold text-yellow-500 uppercase tracking-wide">
          Jedd Soh
        </p>
      )}
      description="Software Developer"
      avatarProps={{
        src: "/images/memoji.png",
        name: "JS"
      }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#hero" size="sm" isBlock color="foreground" showAnchorIcon anchorIcon={<FontAwesomeIcon icon={faHouse} className="ml-2"/>}>
            Intro
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="#projects" size="sm" isBlock color="foreground" showAnchorIcon anchorIcon={<FontAwesomeIcon icon={faCode} className="ml-2"/>}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="#about" size="sm" isBlock color="foreground" showAnchorIcon anchorIcon={<FontAwesomeIcon icon={faUser} className="ml-2"/>}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="" size="sm" isBlock color="foreground" showAnchorIcon anchorIcon={<FontAwesomeIcon icon={faComment} className="ml-2"/>}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
