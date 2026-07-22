'use client';

import { useActionState } from 'react';
import { updateProject, type State } from '@/lib/actions';

interface EditProjectFormProps {
  project: {
    id: number;
    title: string;
    type: string;
    description: string;
    technologies: string[];
    link?: string | null;
    year_completed?: number;
  };
}

export default function EditProjectForm({ project }: EditProjectFormProps) {
  const initialState: State = { message: null, errors: {} };
  
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [state, formAction, isPending] = useActionState(updateProjectWithId, initialState);

  const defaultTechnologiesString = project.technologies.join(', ');

  return (
    <form action={formAction} className="space-y-6">
      {/* Project Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          minLength={2}
          defaultValue={project.title}
          aria-describedby="title-error"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Project Type
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue={project.type}
          aria-describedby="type-error"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        >
          <option value="school">School Project</option>
          <option value="opensource">Open Source</option>
        </select>
        <div id="type-error" aria-live="polite" aria-atomic="true">
          {state.errors?.type?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          defaultValue={project.description}
          aria-describedby="description-error"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Technologies (Comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          required
          defaultValue={defaultTechnologiesString}
          aria-describedby="technologies-error"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Repository URL (Optional)
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={project.link || ''}
          aria-describedby="link-error"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder="https://github.com"
        />
        <div id="link-error" aria-live="polite" aria-atomic="true">
          {state.errors?.link?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="yearCompleted" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Year Completed
        </label>
        <input 
          id="yearCompleted" 
          name="yearCompleted" 
          type="number" 
          min="2000" 
          max="2099" 
          required 
          defaultValue={project.year_completed || ''}
          aria-describedby="yearCompleted-error" 
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error: string) => (
            <p key={error} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
          ))}
        </div>
      </div>

      {state.message && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400" aria-live="assertive">
          {state.message}
        </p>
      )}

      <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <a
          href="/projects"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
        >
          Cancel
        </a>
        <button
          type="submit"
          disabled={isPending}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isPending ? 'Updating...' : 'Update Project'}
        </button>
      </div>
    </form>
  );
}
