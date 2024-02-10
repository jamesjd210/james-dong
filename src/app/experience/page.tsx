import React from 'react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'ABC Tech Solutions',
    year: '2020-2022',
    description: 'Worked on front-end development using React and collaborated with cross-functional teams.'
  },
  {
    title: 'Intern',
    company: 'XYZ Company',
    year: 'Summer 2019',
    description: 'Gained hands-on experience in web development and assisted in various projects.'
  },
  // Add more experiences as needed
];

const Page = () => {
  return (
    <div className="mt-20 max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} className="mb-8 bg-gray-800 p-4">
            <h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
            <p className="text-gray-400 mb-1">{experience.company} - {experience.year}</p>
            <p className="text-gray-200">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;