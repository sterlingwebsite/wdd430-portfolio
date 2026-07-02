import { Project } from '@/lib/projects-db';

async function fetchOpenSourceProjects(): Promise<Project[]> {
  const res = await fetch('http://localhost:3000/api/projects?type=opensource', {
    cache: 'no-store', // Always get fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch open source projects');
  }

  return res.json();
}

export default async function OpenSourceProjectsPage() {
  const projects = await fetchOpenSourceProjects();

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Open Source Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Explore my open-source contributions and public repositories.
      </p>

      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No open source projects found.</p>
      ) : (
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
                  <span className="text-xs font-semibold px-2 py-1 rounded capitalize bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
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
                    View Repository →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
