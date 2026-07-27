import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';
import EditProjectForm from '@/components/EditProjectForm';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: EditPageProps): Promise<Metadata> {
  const { id } = await props.params;
  const projectId = Number(id);
  const project = await getProjectById(projectId);

  if (isNaN(projectId) || !project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `Edit ${project.title}`,
    description: `Modify the fields to update ${project.title} inside your database records.`,
  };
}

export default async function EditProjectPage(props: EditPageProps) {
  const { id } = await props.params;
  const projectId = Number(id);

  const project = await getProjectById(projectId);

  if (isNaN(projectId) || !project) notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Edit {project.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Modify the fields below to update this project&apos;s record in your database.
      </p>
      
      <EditProjectForm project={project} />
    </main>
  );
}
