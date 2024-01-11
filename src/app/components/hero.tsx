import { Section } from "./section";
import { Container } from "./container";
import {Image} from "@nextui-org/react";

export default function Hero() {
    return (
        <Section>
            <Container>
                <div id="home-hero-layout" className="flex flex-col py-20 items-center">
                    <div id="home-hero-text" className="flex flex-col items-center gap-4">
                    <Image
                    width={256}
                    height={256}
                    alt="Jedd Soh Memoji"
                    src="/images/memoji.png"
                    />
                        <h1 className="font-bold text-6xl">I&apos;m Jedd</h1>
                        <p className="text-xl">I&apos;m lowkey a front-end engineer and tryna build lit products with bussin&apos; interfaces, on God ☝️</p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}