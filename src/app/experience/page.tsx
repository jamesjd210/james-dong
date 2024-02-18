import React from "react";
import experiencesData from '@/app/data/experiences.json'
interface ExperienceItemProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

const experiences: ExperienceItemProps[] = experiencesData.experiences;

export default function Experience() {
  return (
    <div className="mt-20 max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ul>
        {experiences.map((experience: ExperienceItemProps, index: number) => (
          <li key={index} className="mb-8 bg-gray-800 p-4">
            <h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
            <p className="text-gray-400 mb-1">{experience.company} - {experience.year}</p>
            <p className="text-gray-200">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
