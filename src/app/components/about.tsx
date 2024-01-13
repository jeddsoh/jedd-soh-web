"use client";

import React from "react";
import { Section } from "./section";
import { Container } from "./container";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faBriefcase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div
          id="home-about-layout"
          className="flex flex-col py-24 gap-10 items-center"
        >
          <h2 className="font-semibold text-4xl">About Me</h2>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" fullWidth>
              <Tab
                key="mission"
                title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faBullseye} className=""/>
                    <span className="text-base">Mission</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>
                    <h3 className="font-semibold text-2xl">
                      My Heading Goes Here
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="experience" title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faBriefcase} className=""/>
                    <span className="text-base">Experience</span>
                  </div>
                }>
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="education" title={
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGraduationCap} className=""/>
                    <span className="text-base">Education</span>
                  </div>
                }>
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
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
