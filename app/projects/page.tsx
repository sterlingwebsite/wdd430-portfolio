import { Project } from '@/lib/projects-db';
import { sql } from '@vercel/postgres';
import { ProjectSearch } from '@/components/ProjectSearch';
import { Pagination } from '@/components/Pagination';
import { deleteProject } from '@/lib/actions';
import Link from 'next/link';
import { DeleteButton } from '@/components/DeleteButton';

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 6;

async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
  try {
    const { rows } = await sql<Project>`
      SELECT id, title, type, description, technologies, link 
      FROM projects 
      WHERE 
        ${query} = '' OR
        title ILIKE ${'%' + query + '%'} OR 
        description ILIKE ${'%' + query + '%'} OR
        EXISTS (
          SELECT 1 FROM unnest(technologies) AS tag 
          WHERE tag ILIKE ${'%' + query + '%'}
        )
      ORDER BY title ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    
    return rows;
  } catch (error) {
    console.error('Database connection error filtering projects:', error);
    throw new Error('Failed to retrieve filtered project rows from Vercel Postgres');
  }
}

async function fetchProjectsPages(query: string): Promise<number> {
  try {
    const { rows } = await sql<{ count: string }>`
      SELECT COUNT(*) 
      FROM projects 
      WHERE 
        ${query} = '' OR
        title ILIKE ${'%' + query + '%'} OR 
        description ILIKE ${'%' + query + '%'} OR
        EXISTS (
          SELECT 1 FROM unnest(technologies) AS tag 
          WHERE tag ILIKE ${'%' + query + '%'}
        );
    `;
    
    const totalCount = Number(rows[0].count);
    return Math.ceil(totalCount / ITEMS_PER_PAGE);
  } catch (error) {
    console.error('Database error counting project pages:', error);
    throw new Error('Failed to retrieve total project page count');
  }
}

interface PageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function ProjectsOverviewPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query)
  ]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projects Overview
        </h1>
        <Link 
          href="/projects/create" 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors"
        >
          + Add Project
        </Link>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Welcome to the projects area. Use the panel below to filter records by keywords or technology stack tags.
      </p>

      <div className="mb-6">
        <ProjectSearch />
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No projects found matching "{query}".</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => {
              const deleteProjectWithId = deleteProject.bind(null, project.id);

              return (
                <div 
                  key={project.id} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      <span className={`text-xs font-semibold px-2 py-1 rounded capitalize ${
                        project.type === 'opensource' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
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
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800 mt-2">
                      {project.link ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          Repo →
                        </a>
                      ) : (
                        <div />
                      )}

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/projects/${project.id}/edit`}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                        >
                          Edit
                        </Link>

                        <DeleteButton action={deleteProjectWithId} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Pagination totalPages={totalPages} />
        </>
      )}
    </main>
  );
}
