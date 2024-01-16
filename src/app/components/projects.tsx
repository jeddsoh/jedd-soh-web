"use client";

import { Section } from "./section";
import { Container } from "./container";
import { Card, CardFooter, Image, Divider, Chip } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faWebflow } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const openQuickSilver = () => {
    const quickSilver = "https://www.figma.com/community/file/1328329151973841917/quicksilver-wireframing-kit";
    window.open(quickSilver, "_blank");
  };

  const openAffirmProject = () => {
    const affirmProject = "https://cyberpotions.com/projects/affirm";
    window.open(affirmProject, "_blank");
  };

  const openWarriorsForFreedom = () => {
    const warriorsForFreedom = "https://warriorsforfreedom.org";
    window.open(warriorsForFreedom, "_blank");
  };

  return (
    <Section id="projects">
      <Container>
        <div
          id="home-projects-layout"
          className="flex flex-col gap-4 items-stretch w-full justify-between py-10 md:py-16"
        >
          <h2 className="font-semibold text-4xl">Projects</h2>
          <Card
            isFooterBlurred
            radius="sm"
            fullWidth
            isPressable
            className="border-[0.5px] border-white/10 md:h-60 flex-col-reverse md:flex-col mt-6"
            onClick={openQuickSilver}
          >
            <CardFooter className="flex flex-col gap-3 p-6 md:p-8 items-start justify-center z-10 md:w-1/2 w-full h-full bg-background/80 text-left md:absolute md:left-0 rounded-none md:border-t-0 md:border-r-[0.5px] border-white/10">
              <Chip
                size="sm"
                className="gap-1 uppercase font-semibold tracking-wide"
                variant="flat"
                classNames={{
                  base: "bg-indigo-500/20",
                  content: "text-indigo-300",
                }}
                startContent={
                  <FontAwesomeIcon
                    icon={faPenNib}
                    size="xs"
                    className="ml-1 text-indigo-300"
                  />
                }
              >
                Design
              </Chip>
              <p className="font-bold text-2xl">quickSilver Wireframing Kit</p>
              <p className="text-sm text-stone-300 md:pb-4">
              quickSilver is a free wireframing kit of hand-drawn components, made to feel like you uploaded your stationery into Figma.
              </p>
            </CardFooter>
            <Image
              alt="quickSilver project cover"
              className="hidden md:block object-cover h-60 z-0"
              src="/images/quickSilver.png"
              isZoomed
              radius="none"
              
            />
          </Card>
          <Card
            isFooterBlurred
            radius="sm"
            fullWidth
            isPressable
            className="border-[0.5px] border-white/10 md:h-60 flex-col-reverse md:flex-col"
            onClick={openAffirmProject}
          >
            <CardFooter className="flex flex-col gap-3 p-6 md:p-8 items-start justify-center z-10 md:w-1/2 w-full h-full bg-background/80 text-left md:absolute md:left-0 rounded-none md:border-t-0 md:border-r-[0.5px] border-white/10">
              <Chip
                size="sm"
                className="gap-1 uppercase font-semibold tracking-wide"
                variant="flat"
                classNames={{
                  base: "bg-indigo-500/20",
                  content: "text-indigo-300",
                }}
                startContent={
                  <FontAwesomeIcon
                    icon={faPenNib}
                    size="xs"
                    className="ml-1 text-indigo-300"
                  />
                }
              >
                Design
              </Chip>
              <p className="font-bold text-2xl">Affirm Agent Portal</p>
              <p className="text-sm text-stone-300 md:pb-4">
                Internal tooling helping Affirm support agents work more
                efficiently, handle data discrepancies, and avoid customer
                frustration.
              </p>
            </CardFooter>
            <Image
              alt="YouVersion project cover"
              className="object-cover h-60 z-0 hidden md:block"
              src="/images/affirm.png"
              isZoomed
              radius="none"
            />
          </Card>
          <Card
            isFooterBlurred
            radius="sm"
            fullWidth
            isPressable
            className="border-[0.5px] border-white/10 md:h-60 flex-col-reverse md:flex-col"
            onClick={openWarriorsForFreedom}
          >
            <CardFooter className="flex flex-col gap-3 p-6 md:p-8 items-start justify-center z-10 md:w-1/2 w-full h-full bg-background/80 text-left md:absolute md:left-0 rounded-none md:border-t-0 md:border-r-[0.5px] border-white/10">
              <Chip
                size="sm"
                className="gap-1 uppercase font-semibold tracking-wide"
                variant="flat"
                classNames={{
                  base: "bg-red-500/20",
                  content: "text-red-400",
                }}
                startContent={
                  <FontAwesomeIcon
                    icon={faWebflow}
                    size="xs"
                    className="ml-1 text-red-400"
                  />
                }
              >
                Webflow
              </Chip>
              <p className="font-bold text-2xl">Warriors for Freedom</p>
              <p className="text-sm text-stone-300 md:pb-4">
                A Webflow site for Warriors for Freedom, a nonprofit
                organization committed to improving mental health and preventing
                suicide among veterans.
              </p>
            </CardFooter>
            <Image
              alt="YouVersion project cover"
              className="object-cover h-60 z-0 hidden md:block"
              src="/images/warriors-for-freedom.png"
              isZoomed
              radius="none"
            />
          </Card>
        </div>
      </Container>
    </Section>
  );
}
