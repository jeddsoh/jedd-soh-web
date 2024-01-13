"use client";

import React from "react";
import { Section } from "./section";
import { Container } from "./container";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function About() {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <Section id="about">
      <Container>
        <div
          id="home-about-layout"
          className="flex flex-col py-24 gap-10 items-center"
        >
          <h2 className="font-semibold text-4xl">About Me</h2>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs} fullWidth>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card>
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
      </Container>
    </Section>
  );
}
