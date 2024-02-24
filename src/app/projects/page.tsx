import React from 'react';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section>
    <div className="mt-20 container mx-auto my-8">
      <div className="mt-20 max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map(project => (
                <div key={project.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                  <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
          </div>
      </div>
    </div>
    </section>
  );
};
