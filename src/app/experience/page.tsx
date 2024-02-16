import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

const experiences: ExperienceItemProps[] = [
  {
    title: 'Associate Software Engineer',
    company: 'Charles Schwab | Full Time',
    year: 'Jan 2023 - Present',
    description: 'Worked on front-end development using Angular and collaborated with cross-functional teams.',
  },
  {
    title: 'Software Intern',
    company: 'Charles Schwab',
    year: 'Summer 2022',
    description: `Leveraged JavaScript and Mabl to create 300+ automated tests to confirm code functionality and correctness
    Reduced overall cost and time of deploying tests for the entire work group by 10% on the CI/CD Bamboo pipeline
    Documented Mabl integrations with Charles Schwab’s internal network for all future code deployment and tests`,
  },
  // Add more experiences as needed
];

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
