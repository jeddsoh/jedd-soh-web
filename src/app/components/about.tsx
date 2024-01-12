import { Section } from "./section";
import { Container } from "./container";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div
          id="home-about-layout"
          className="flex flex-col py-24 gap-10 items-center"
        >
          <h2 className="font-semibold text-4xl">About Me</h2>
          <div className="flex w-full flex-col">
           
          </div>
        </div>
      </Container>
    </Section>
  );
}
