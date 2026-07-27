import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { DeleteButton } from '@/components/DeleteButton';
import { deleteProject } from '@/lib/actions';
import type { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Manage Projects',
  description: 'Review, modify, or eliminate entries across your portfolio directories.',
};

export default async function AdminProjectsPage() {
  const { rows: projects } = await sql`
    SELECT id, title, type, year_completed 
    FROM projects 
    ORDER BY year_completed DESC, id DESC;
  `;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Manage Projects
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Review, modify, or eliminate entries across your portfolio directories.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
          >
            ← Back to Main Panel
          </Link>
          <Link
            href="/dashboard/projects/new"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            + Create New Project
          </Link>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">No portfolio records found in the database.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold">
                <th className="p-4">Project Title</th>
                <th className="p-4">Classification</th>
                <th className="p-4">Year</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-900 dark:text-gray-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                      project.type === 'opensource' 
                        ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' 
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    }`}>
                      {project.type}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 dark:text-gray-400">
                    {project.year_completed || 'N/A'}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        href={`/dashboard/projects/${project.id}/edit`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Edit
                      </Link>
                      
                      <DeleteButton id={project.id} deleteAction={deleteProject} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
