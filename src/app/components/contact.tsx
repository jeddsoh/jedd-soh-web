"use client";

import { Section } from "./section";
import { Container } from "./container";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faComment,
  faGraduationCap,
  faFaceFlushed,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const openEmail = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const email = "mailto:jeddsoh@gmail.com";
    window.open(email, "_blank");
  };

  const openLinkedInProfile = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const linkedIn = "https://linkedin.com/in/jeddsoh";
    window.open(linkedIn, "_blank");
  };

  const openGitHubProfile = () => {
    // Replace the LinkedIn profile URL with your actual URL
    const gitHub = "https://github.com/jeddsoh";
    window.open(gitHub, "_blank");
  };

  return (
    <Section id="contact">
      <Container>
        <div id="home-about-layout" className="flex flex-col py-24 gap-10">
          <h2 className="font-semibold text-4xl">Contact</h2>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-10">
            <form className="w-full flex flex-col gap-4 items-start">
              <Input
                type="email"
                label="Email"
                required
                radius="sm"
                size="lg"
                variant="faded"
              />
              <Textarea
                type="text"
                label="Message"
                required
                radius="sm"
                size="lg"
                variant="faded"
                classNames={{
                  label: "text-base",
                }}
              />
              <Button
                type="submit"
                color="primary"
                radius="sm"
                variant="flat"
                size="lg"
              >
                Submit
              </Button>
            </form>
            <div className="w-full flex flex-col gap-4 items-start mt-4 md:mt-0">
              <h3>My addies:</h3>
              <Card
                className="w-full"
                radius="sm"
                isPressable
                onClick={openEmail}
              >
                <CardBody className="flex flex-row justify-between items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  <div className="flex flex-col items-end">
                    <p className="text-md">Email</p>
                    <p className="text-small text-default-500">
                      jeddsoh@gmail.com
                    </p>
                  </div>
                </CardBody>
              </Card>
              <Card
                className="w-full"
                radius="sm"
                isPressable
                onClick={openGitHubProfile}
              >
                <CardBody className="flex flex-row justify-between items-center gap-3">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                  <div className="flex flex-col items-end">
                    <p className="text-md">GitHub</p>
                    <p className="text-small text-default-500">
                      github.com/jeddsoh
                    </p>
                  </div>
                </CardBody>
              </Card>
              <Card
                className="w-full"
                radius="sm"
                isPressable
                onClick={openLinkedInProfile}
              >
                <CardBody className="flex flex-row justify-between items-center gap-3">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  <div className="flex flex-col items-end">
                    <p className="text-md">LinkedIn</p>
                    <p className="text-small text-default-500">
                      linkedin.com/in/jeddsoh
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
