"use client";

import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

interface IProjectProps {
  name: string;
  description: string;
  href?: string;
  status?: {
    text: string;
    color: string;
  };
}

export default function Home() {
  const projects: IProjectProps[] = [
    {
      name: "jedd-soh-web",
      description: "My software development portfolio. Built using Next.js.",
      href: "https://github.com/jeddsoh/jedd-soh-web",
    },
    {
      name: "cyberspace",
      description: "A task management web app. Built using Next.js.",
      href: "https://github.com/jeddsoh/cyberspace",
    },
    {
      name: "cyberpotions-web",
      description: "A website for my software and design business, cyberPotions. Built with Next.js and Supabase.",
      href: "https://github.com/jeddsoh/cyberpotions-web",
    },
    {
      name: "gamma-beta-web",
      description: "A marketing site and web app for a fraternity.",
      href: "https://github.com/jeddsoh/gamma-beta-web",
    },
  ];

  return (
    <section>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 items-stretch overflow-hidden">
        <h1 className="text-lg font-semibold">Projects</h1>
        {projects.map((project) => (
          <Link isExternal href={project.href} key={project.href}>
            <Card fullWidth className="p-4 flex flex-col gap-1" radius="sm">
              <CardHeader className="p-0 flex items-center gap-2">
                <p className="text-base">{project.name}</p>
                {project.status ? (
                  <Chip
                    size="sm"
                    classNames={{ base: "py-1 h-auto" }}
                  >
                    {project.status.text}
                  </Chip>
                ) : null}
              </CardHeader>
              <CardBody className="p-0">
                <p className="text-small text-default-500">
                  {project.description}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
