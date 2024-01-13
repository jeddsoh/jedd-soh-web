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
        <div id="home-about-layout" className="flex flex-col py-24 gap-10">
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
                  className="flex flex-col text-left overflow-auto"
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
                  className="flex flex-col mt-3 text-left overflow-auto"
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
                  className="flex flex-col mt-3 text-left overflow-auto"
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
                  <div className="flex flex-row p-2 overflow-auto">
                    <Link
                      isBlock
                      showAnchorIcon
                      href="https://frankyou.com"
                      color="primary"
                      size="sm"
                    >
                      frankyou.com
                    </Link>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="https://warriorsforfreedom.org"
                      color="primary"
                      size="sm"
                    >
                      warriorsforfreedom.org
                    </Link>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="https://yourwsa.com"
                      color="primary"
                      size="sm"
                    >
                      yourwsa.com
                    </Link>
                  </div>
                </Card>
                <Card
                  className="flex flex-col mt-3 text-left overflow-auto"
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
                      Deliver high-fidelity user interface designs for new
                      internal tooling.
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
                  className="flex flex-col overflow-auto"
                  radius="sm"
                  isPressable
                  onClick={openUniversityOfOklahoma}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row justify-between w-full items-center  gap-4">
                      <div className="flex flex-row gap-4 items-start text-left">
                        <p className="text-nowrap text-base md:text-xl">
                          University of Oklahoma
                        </p>
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <Chip
                          className="gap-1 font-semibold"
                          variant="solid"
                          classNames={{
                            base: "",
                            content: "",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="ml-2"
                            />
                          }
                        >
                          Class of 2020
                        </Chip>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="flat"
                          classNames={{
                            base: "",
                            content: "",
                          }}
                          startContent={
                            <FontAwesomeIcon icon={faScroll} className="ml-2" />
                          }
                        >
                          B.A. Creative Media Production
                        </Chip>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="flat"
                          classNames={{
                            base: "",
                            content: "",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faScroll}
                              className="ml-2 "
                            />
                          }
                        >
                          B.A. Chinese
                        </Chip>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <Card
                  className="flex flex-col mt-3 overflow-auto"
                  radius="sm"
                  isPressable
                  onClick={openBeijingNormalUniversity}
                  fullWidth
                >
                  <CardHeader className="flex gap-3 p-4">
                    <div className="flex flex-row gap-4 justify-between w-full items-center">
                      <div className="flex flex-row gap-4 items-start text-left">
                        <p className="text-nowrap text-base md:text-xl">
                          Beijing Normal University
                        </p>
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <Chip
                          className="gap-1 font-semibold"
                          variant="solid"
                          classNames={{
                            base: "",
                            content: "",
                          }}
                          startContent={
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="ml-2"
                            />
                          }
                        >
                          2017 - 2018
                        </Chip>
                        <Chip
                          className="gap-1 font-semibold"
                          variant="flat"
                          classNames={{
                            base: "",
                            content: "",
                          }}
                          startContent={
                            <FontAwesomeIcon icon={faScroll} className="ml-2" />
                          }
                        >
                          Exchange Program
                        </Chip>
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
                        My heading goes here.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
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
