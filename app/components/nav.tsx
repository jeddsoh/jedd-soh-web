"use client";

import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Button } from "@nextui-org/button";

interface IContactLink {
  platform: string;
  url: string;
  icon: any;
}

const contactLinkIconSize = 16;

export default function Nav() {
  const contactLinks: IContactLink[] = [
    {
      platform: "email",
      url: "/",
      icon: <FaEnvelope size={contactLinkIconSize} />,
    },
    {
      platform: "github",
      url: "https://github.com/jeddsoh",
      icon: <FaGithub size={contactLinkIconSize} />,
    },
  ];

  return (
    <header>
      <nav className="max-w-2xl mx-auto py-12 flex items-center justify-between">
        <Link href="/" color="primary">
          <User
            name="Jedd Soh"
            description="Software Developer"
            avatarProps={{
              src: "/icon.svg",
              name: "JS",
              size: "sm",
              className: "hidden",
            }}
            classNames={{
              name: "text-lg font-semibold text-foreground",
              description: "text-base text-primary",
            }}
          />
        </Link>
        <div className="flex gap-1">
          {contactLinks.map((link) => (
            <Button
              as={Link}
              key={link.platform}
              href={link.url}
              isExternal
              isIconOnly
              size="sm"
              variant="light"
              radius="sm"
            >
              {link.icon}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
