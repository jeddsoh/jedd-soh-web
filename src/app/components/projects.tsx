import { Section } from "./section";
import { Container } from "./container";
import {Card, CardFooter, Image, Divider, Chip} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (
        <Section id="projects">
            <Container>
                <div id="home-projects-layout" className="flex flex-col md:flex-row gap-10 items-stretch w-full justify-between py-20">
                <Card
      isFooterBlurred
      radius="sm"
      className="border-none"
      fullWidth
      isPressable
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src="/images/cyberpotions.png"
        isZoomed
        radius="none"
      />
      <Divider/>
      <CardFooter className="text-left p-4">
        <div className="flex flex-col gap-1">
            <div id="card-footer-metadata" className="flex flex-row justify-between w-full">
                <p className="font-semibold text-lg">cyberPotions</p>
                <Chip size="sm" className="gap-1" variant="flat" color="primary" startContent={<FontAwesomeIcon icon={faPenNib} size="xs" className="ml-1"/>}>Design</Chip>
            </div>
        <p className="text-sm text-stone-300">My old UI design portfolio. Soon, it will be wiped and replaced with my web design agency, cyberPotions.</p>
        </div>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="sm"
      className="border-none"
      fullWidth
      isPressable
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src="/images/cyberpotions.png"
        isZoomed
        radius="none"
      />
      <Divider/>
      <CardFooter className="text-left p-4">
        <div className="flex flex-col gap-1">
            <div id="card-footer-metadata" className="flex flex-row justify-between w-full">
                <p className="font-semibold text-lg">cyberPotions</p>
                <Chip size="sm" className="gap-1" variant="flat" color="primary" startContent={<FontAwesomeIcon icon={faPenNib} size="xs" className="ml-1"/>}>Design</Chip>
            </div>
        <p className="text-sm text-stone-300">My old UI design portfolio. Soon, it will be wiped and replaced with my web design agency, cyberPotions.</p>
        </div>
      </CardFooter>
    </Card>
                </div>
            </Container>
        </Section>
    )
}