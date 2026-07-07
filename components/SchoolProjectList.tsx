import { Project } from '@/lib/projects-db';

async function fetchSchoolProjects(): Promise<Project[]> {

  const res = await fetch('http://localhost:3000/api/projects?type=school', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch school projects');
  }

  return res.json();
}

export default async function SchoolProjectList() {
  const projects = await fetchSchoolProjects();

  if (projects.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No school projects found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900/50 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <span className="text-xs font-semibold px-2 py-1 rounded capitalize bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                {project.type}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {project.description}
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
