"use client";

import React from "react";
import { Section } from "./section";
import { Container } from "./container";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Link,
  Image,
  Chip,
  Divider,
  Tooltip,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faBriefcase,
  faGraduationCap,
  faFaceFlushed,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const openWipro = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const wipro = "https://wipro.com";
    window.open(wipro, "_blank");
  };
  const openAffirm = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const affirm = "https://affirm.com";
    window.open(affirm, "_blank");
  };
  const openFrank = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const frank = "https://frankyou.com";
    window.open(frank, "_blank");
  };
  const openYouVersion = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const youVersion = "https://youversion.church";
    window.open(youVersion, "_blank");
  };

  const openUniversityOfOklahoma = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const universityOfOklahoma = "https://ou.edu";
    window.open(universityOfOklahoma, "_blank");
  };
  const openBeijingNormalUniversity = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const beijingNormalUniversity = "https://english.bnu.edu.cn";
    window.open(beijingNormalUniversity, "_blank");
  };

  return (
    <Section id="about">
      <Container>
        <div id="home-about-layout" className="flex flex-col py-10 md:py-16 gap-10">
          <h2 className="font-semibold text-4xl">About</h2>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" fullWidth radius="sm" size="lg">
              <Tab
                key="experience"
                title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="text-base">Experience</span>
                  </div>
                }
              >
                <Card
                  className="flex flex-col text-left"
                  radius="sm"
                  isPressable
                  onClick={openWipro}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="flex flex-col gap-2 items-start">
                        <p className="text-small text-default-500">
                          2023 • Remote Contractor
                        </p>
                        <p className="font-semibold text-base md:text-xl">
                          Design Ops Strategist
                          <span className="text-foreground/70"> • Wipro</span>
                        </p>
                      </div>
                      <Image
                        alt="Wipro logo"
                        radius="none"
                        src="/images/wipro-logo.svg"
                        width={64}
                      />
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="p-4">
                    <p className="text-sm">
                      Building design systems and improving design workflows.
                    </p>
                  </CardBody>
                </Card>
                <Card
                  className="flex flex-col mt-3 text-left"
                  radius="sm"
                  isPressable
                  onClick={openAffirm}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="flex flex-col gap-2 items-start">
                        <p className="text-small text-default-500">
                          2022 • Remote Contractor
                        </p>
                        <p className="font-semibold text-base md:text-xl">
                          User Interface Designer
                          <span className="text-foreground/70"> • Affirm</span>
                        </p>
                      </div>
                      <Image
                        alt="Affirm logo"
                        radius="none"
                        src="/images/affirm-logo.svg"
                        width={64}
                      />
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="p-4">
                    <p className="text-sm">
                      Deliver high-fidelity user interface designs for new
                      internal tooling.
                    </p>
                  </CardBody>
                </Card>
                <Card
                  className="flex flex-col mt-3 text-left"
                  radius="sm"
                  isPressable
                  onClick={openFrank}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="flex flex-col gap-2 items-start">
                        <p className="text-small text-default-500">
                          2021 • Oklahoma City
                        </p>
                        <p className="font-semibold text-base md:text-xl">
                          Webflow Developer
                          <span className="text-foreground/70"> • Frank</span>
                        </p>
                      </div>
                      <Image
                        alt="Frank logo"
                        radius="none"
                        src="/images/frank-logo.png"
                        width={64}
                      />
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="p-4 -mb-4">
                    <p className="text-sm">
                      Design and develop no-code sites for clients using
                      Webflow, WordPress, and Shopify.
                    </p>
                  </CardBody>
                  <div className="flex flex-row p-2 overflow-auto max-w-full">
                    <Link
                      isBlock
                      showAnchorIcon
                      isExternal
                      href="https://frankyou.com"
                      color="primary"
                      size="sm"
                    >
                      frankyou.com
                    </Link>
                    <Link
                      isBlock
                      showAnchorIcon
                      isExternal
                      href="https://warriorsforfreedom.org"
                      color="primary"
                      size="sm"
                    >
                      warriorsforfreedom.org
                    </Link>
                    <Link
                      isBlock
                      showAnchorIcon
                      isExternal
                      href="https://yourwsa.com"
                      color="primary"
                      size="sm"
                    >
                      yourwsa.com
                    </Link>
                  </div>
                </Card>
                <Card
                  className="flex flex-col mt-3 text-left"
                  radius="sm"
                  isPressable
                  onClick={openYouVersion}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="flex flex-col gap-2 items-start">
                        <p className="text-small text-default-500">
                          2021 • Edmond, Oklahoma
                        </p>
                        <p className="font-semibold text-base md:text-xl">
                          Product Design Intern
                          <span className="text-foreground/70">
                            {" "}
                            • Bible App
                          </span>
                        </p>
                      </div>
                      <Image
                        alt="YouVersion logo"
                        radius="none"
                        src="/images/bible-logo.png"
                        width={40}
                      />
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="p-4">
                    <p className="text-sm">
                      Designed user interface and researched user behavior for
                      the Bible App.
                    </p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="education"
                title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span className="text-base">Education</span>
                  </div>
                }
              >
                <Card
                  className="flex flex-col"
                  radius="sm"
                  isPressable
                  onClick={openUniversityOfOklahoma}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center gap-4">
                      <div className="flex flex-row gap-4 items-start text-left">
                        <p className="whitespace-nowrap text-base md:text-xl">
                          University of Oklahoma
                        </p>
                      </div>
                      <div className="flex flex-row gap-3 md:gap-4 items-center overflow-auto">
                      <Popover placement="top" color="primary" radius="sm">
                          <PopoverTrigger>
                          <Chip
                            className="gap-1 font-semibold"
                            variant="solid"
                            classNames={{
                              base: "",
                              content: "hidden md:block",
                            }}
                            startContent={
                              <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="mx-1 md:mx-0 md:ml-2"
                              />
                            }
                          >
                            Class of 2020
                          </Chip>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2 text-yellow-950">
                            
                              <div className="text-small font-semibold">
                                Class of 2020
                              </div>
                             
                            </div>
                          </PopoverContent>
                        </Popover>
                        <Popover placement="top" color="primary" radius="sm">
                          <PopoverTrigger>
                            <Chip
                              className="gap-1 font-semibold"
                              variant="flat"
                              classNames={{
                                base: "",
                                content: "hidden md:block",
                              }}
                              startContent={
                                <FontAwesomeIcon
                                  icon={faScroll}
                                  className="mx-1 md:mx-0 md:ml-2"
                                />
                              }
                            >
                              B.A. Creative Media Production
                            </Chip>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2 text-yellow-950">
                            <div className="text-tiny ">
                                Bachelor of Arts
                              </div>
                              <div className="text-small font-semibold">
                                Creative Media Production
                              </div>
                             
                            </div>
                          </PopoverContent>
                        </Popover>
                        <Popover placement="top" color="primary" radius="sm">
                          <PopoverTrigger>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="flat"
                          classNames={{
                            base: "",
                            content: "hidden md:block",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faScroll}
                              className="mx-1 md:mx-0 md:ml-2"
                            />
                          }
                        >
                          B.A. Chinese
                        </Chip>
                        </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2 text-yellow-950">
                            <div className="text-tiny ">
                                Bachelor of Arts
                              </div>
                              <div className="text-small font-semibold">
                                Chinese
                              </div>
                             
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <Card
                  className="flex flex-col mt-3"
                  radius="sm"
                  isPressable
                  onClick={openBeijingNormalUniversity}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row gap-4 justify-between w-full items-center">
                      <div className="flex flex-row gap-4 items-start text-left">
                        <p className="whitespace-nowrap text-base md:text-xl">
                          Beijing Normal University
                        </p>
                      </div>
                      <div className="flex flex-row gap-3 md:gap-4 items-center">
                      <Popover placement="top" color="primary" radius="sm">
                          <PopoverTrigger>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="solid"
                          classNames={{
                            base: "",
                            content: "hidden md:block",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="mx-1 md:mx-0 md:ml-2"
                            />
                          }
                        >
                          2017 - 2018
                        </Chip>
                        </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2 text-yellow-950">
                            <div className="text-tiny ">
                                Exchange Program
                              </div>
                              <div className="text-small font-semibold">
                                Academic Year 2017-2018
                              </div>
                             
                            </div>
                          </PopoverContent>
                        </Popover>
                        <Popover placement="top" color="primary" radius="sm">
                          <PopoverTrigger>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="flat"
                          classNames={{
                            base: "",
                            content: "hidden md:block",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faScroll}
                              className="mx-1 md:mx-0 md:ml-2"
                            />
                          }
                        >
                          Exchange Program
                        </Chip>
                        </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2 text-yellow-950">
                            <div className="text-tiny ">
                                Certification
                              </div>
                              <div className="text-small font-semibold">
                                HSK Level 5
                              </div>
                             
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Tab>
              <Tab
                key="personal"
                title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faFaceFlushed} className="" />
                    <span className="text-base">Personal</span>
                  </div>
                }
              >
                <Card>
                  <CardBody className="flex flex-row p-8 items-center gap-8">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-2xl">
                        The history of my entire life
                      </h3>
                      <div className="flex flex-col gap-6">
                        <p>
                          After graduating under lockdown with a major in video
                          production, I realized I like being on my laptop more
                          than being on a set, so I attended YouTube University
                          and learned design. Then, I passed away.
                        </p>
                        <Divider />
                        <p>
                          I respawned and began my tech journey by designing
                          logos and branding. Then, God airdropped the new UX/UI
                          update into my teeny weeny brain, so I interned for{" "}
                          <Link
                            isBlock
                            isExternal
                            href="https://youversion.church"
                          >
                            the Bible
                          </Link>{" "}
                          before launching my freelance career.
                        </p>
                        <Divider />
                        <p>
                          Currently, I&apos;m under contract with{" "}
                          <Link isBlock isExternal href="https://wipro.com">
                            Wipro
                          </Link>
                          , building design systems and stuff. But this will be
                          my final battle as a designer, as I&apos;ve been told
                          engineers get a little more respect &apos;round these
                          parts. Recently, I&apos;ve re-enrolled in YouTube
                          University and have been learning to code in my secret
                          hideout (parents&apos; basement).
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </Section>
  );
}
