'use client'

import PortoBox from "./porto-box";
import Dropdown from "./porto-item";
import { experiences, achievement, education } from "@/lib/data";

export default function Body(){
  return (
    <main className="flex flex-col space-y-7 row-start-2 items-center sm:items-start w-full">
      <PortoBox title="Experience">
        {experiences.map(experience => (
          <Dropdown title={experience.title}>
            <p className="text-sm">Period: {experience.period}</p>
          </Dropdown>
        ))}
      </PortoBox>
      
      <PortoBox title="Achievement">
        {achievement.map(achievement => (
          <Dropdown title={achievement.title}>
            <p className="text-sm">time: {achievement.time}</p>
          </Dropdown>
        ))}
      </PortoBox>
      <PortoBox title="Project" />
      <PortoBox title="Education">
        {education.map(education => (
          <Dropdown title={education.institution}>
            <p className="text-sm">period: {education.period}</p>
          </Dropdown>
        ))}
      </PortoBox>

    </main>
  );
}