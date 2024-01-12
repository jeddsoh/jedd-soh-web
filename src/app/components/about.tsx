import { Section } from "./section";
import { Container } from "./container";

export default function Hero() {
    return (
        <Section id="about">
            <Container>
                <div id="home-about-layout" className="flex flex-col py-24 gap-10 items-center">
                    <h2 className="font-semibold text-4xl">About Me</h2>
                </div>
            </Container>
        </Section>
    )
}