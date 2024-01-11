import React from "react";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem } from "@nextui-org/react";
import { User, Link, Button } from "@nextui-org/react";

export default function Nav() {
  return (
    <header className="w-full fixed">
    <Navbar>
      <NavbarBrand>
      <User
      name="Jedd Soh"
      description="Web Developer"
      avatarProps={{
        src: "",
        name: "JS"
      }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            View Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </header>
  );
}
