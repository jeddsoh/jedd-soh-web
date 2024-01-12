import { Section } from "./section";
import { Container } from "./container";
import { Card, CardFooter, Image, Divider, Chip } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faWebflow } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <div
          id="home-projects-layout"
          className="flex flex-col gap-10 items-stretch w-full justify-between"
        >
          <Card
            isFooterBlurred
            radius="sm"
            fullWidth
            isPressable
            className="border-[0.5px] border-white/10 max-h-60"
          >
            <Image
              alt="YouVersion project cover"
              className="object-fill"
              src="/images/cyberpotions.png"
              isZoomed
              radius="none"
            />
            <CardFooter className="flex flex-col gap-4 rounded-small p-8 items-start justify-center absolute z-10 border-r-[0.5px] border-white/10 left-0 w-1/2 h-full bg-background/80 text-left">
                  <Chip
                    size="sm"
                    className="gap-1 uppercase font-semibold tracking-wide"
                    variant="flat"
                    classNames={{
                      base: "bg-rose-500/20",
                      content: "text-rose-400",
                    }}
                    startContent={
                      <FontAwesomeIcon
                        icon={faPenNib}
                        size="xs"
                        className="ml-1 text-rose-400"
                      />
                    }
                  >
                    Design
                  </Chip>
                  <p className="font-bold text-lg">Affirm Agent Portal</p>
                <p className="text-sm text-stone-300">
                  Internal software to help Affirm support agents work more
                  efficiently, handle data discrepancies, and avoid customer
                  frustration.
                </p>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            radius="sm"
            fullWidth
            isPressable
            className="border-[0.5px] border-white/10 max-h-60"
          >
            <Image
              alt="YouVersion project cover"
              className="object-fill"
              src="/images/cyberpotions.png"
              isZoomed
              radius="none"
            />
            <CardFooter className="flex flex-col gap-4 rounded-small p-8 items-start justify-center absolute z-10 border-r-[0.5px] border-white/10 left-0 w-1/2 h-full bg-background/80 text-left">
            <Chip
                    size="sm"
                    className="gap-1 uppercase font-semibold tracking-wide"
                    variant="flat"
                    classNames={{
                      base: "bg-sky-500/20",
                      content: "text-sky-400",
                    }}
                    startContent={
                      <FontAwesomeIcon
                        icon={faWebflow}
                        size="xs"
                        className="ml-1 text-sky-400"
                      />
                    }
                  >
                    Webflow
                  </Chip>
                  <p className="font-bold text-lg">Affirm Agent Portal</p>
                <p className="text-sm text-stone-300">
                  Internal software to help Affirm support agents work more
                  efficiently, handle data discrepancies, and avoid customer
                  frustration.
                </p>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
