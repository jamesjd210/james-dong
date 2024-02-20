import React from 'react';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects as needed
];

const Page = () => {
  return (
    <section>
    <div className="mt-20 container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Page;
