"use client";

import PortoBox from "./porto-box";
import Dropdown from "./porto-item";
import ItemCard from "./item-card";
import { experiences, achievement, education } from "@/lib/data";

export default function Body() {
  return (
    <main className="flex flex-col space-y-7 row-start-2 items-center sm:items-start w-full">
      <PortoBox key="exp-box" title="Experience">
        {experiences.map((experience) => (
          <Dropdown key={experience.id} title={experience.title}>
            <p className="text-sm">Period: {experience.period}</p>
            <ItemCard desc={experience.desc} itemKey={experience.id} />
          </Dropdown>
        ))}
      </PortoBox>

      <PortoBox key="ach-box" title="Achievement">
        {achievement.map((achievement) => (
          <Dropdown key={achievement.id} title={achievement.title}>
            <p className="text-sm">Time: {achievement.time}</p>
          </Dropdown>
        ))}
      </PortoBox>

      <PortoBox key="ed-box" title="Education">
        {education.map((education) => (
          <Dropdown key={education.id} title={education.institution}>
            <p className="text-sm">Period: {education.period}</p>
          </Dropdown>
        ))}
      </PortoBox>
    </main>
  );
}
