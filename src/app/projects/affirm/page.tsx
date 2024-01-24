import { Section } from "@/app/components/section";
import { Container } from "@/app/components/container";
import {Spinner, Code, Tooltip} from "@nextui-org/react";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <Section>
        <Container>
          <div className="flex flex-col w-full min-h-96 gap-6 items-center justify-center">
          <Tooltip showArrow={true} content="Currently loading not shit" delay={0} closeDelay={0}>
          <Spinner size="lg" color="primary"/>
          </Tooltip>
          <Code color="primary">The only thing actually loading is me. I'm still building this page 😭</Code>
          </div>
        </Container>
      </Section>
    </main>
  );
}
