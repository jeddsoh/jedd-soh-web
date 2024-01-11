import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem } from "@nextui-org/react";
import { User, Link, Button } from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar maxWidth="lg">
      <NavbarBrand>
      <User
      name={(
        <p className="font-bold">
          Jedd Soh
        </p>
      )}
      description="Web Developer"
      avatarProps={{
        src: "/images/memoji.png",
        name: "JS"
      }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="" size="sm" isBlock color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="" size="sm" isBlock color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" size="sm" isBlock color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" size="sm" isBlock color="foreground">
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
  );
}
