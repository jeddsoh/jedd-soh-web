import { Section } from "./section";
import { Container } from "./container";
import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function Hero() {
    return (
        <Section id="hero">
            <Container>
                <div id="home-hero-layout" className="flex flex-col py-20 gap-10 items-center">
                    <div id="home-hero-text" className="flex flex-col items-center gap-6 text-center">
                    <Image
                    width={256}
                    height={256}
                    alt="Jedd Soh Memoji"
                    src="/images/memoji.png"
                    />
                        <h1 className="font-semibold text-6xl">Hey fam, thanks for pulling up!</h1>
                        <p className="text-lg">I&apos;m lowkey tryna build lit products with bussin&apos; interfaces, on God ☝️
                        </p>
                    </div>
                    <div id="home-hero-buttons" className="w-full md:w-auto flex flex-col-reverse items-stretch md:flex-row gap-3 text-center">
                        <Button color="primary" variant="light" size="lg" radius="sm" href="#contact">
                            Contact Me
                        </Button>
                        <Button color="primary" variant="flat" size="lg" radius="sm" href="#about">
                            View My Resume
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}