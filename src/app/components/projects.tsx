import { Section } from "./section";
import { Container } from "./container";

export default function Projects() {
    return (
        <Section>
            <Container>
                <div id="home-hero-layout" className="flex flex-col py-20">
                    <div id="home-hero-text" className="flex flex-col gap-4">
                        <h2 className="font-bold text-4xl">My Projects</h2>
                        <p className="text-lg">Check out these wildin&apos; things I made!</p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}