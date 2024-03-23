'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
  Link,
} from "@nextui-org/react";

// Render different Navbar if not on home page



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCode,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";



export default function Nav() {

  return (
    <Navbar maxWidth="lg" className="px-4 navbar">
      <NavbarBrand>
        <Link href="/">
          <User
            name={
              <p className="font-semibold text-yellow-500 uppercase tracking-wide">
                Jedd Soh
              </p>
            }
            description={
              <p className="text-foreground">Software Design-gineer</p>
            }
            avatarProps={{
              src: "/icon.svg",
              name: "JS",
            }}
          />
        </Link>
      </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              href="/#hero"
              size="sm"
              isBlock
              color="foreground"
              showAnchorIcon
              anchorIcon={<FontAwesomeIcon icon={faHouse} className="ml-2" />}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/#projects"
              size="sm"
              isBlock
              color="foreground"
              showAnchorIcon
              anchorIcon={<FontAwesomeIcon icon={faCode} className="ml-2" />}
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/#about"
              size="sm"
              isBlock
              color="foreground"
              showAnchorIcon
              anchorIcon={<FontAwesomeIcon icon={faUser} className="ml-2" />}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/#contact"
              size="sm"
              isBlock
              color="foreground"
              showAnchorIcon
              anchorIcon={<FontAwesomeIcon icon={faComment} className="ml-2" />}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}
