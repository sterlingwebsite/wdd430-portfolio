import { createProject } from '@/lib/actions';

export default function CreateProjectPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Add New Project
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Fill out the details below to add a new project record to your web development portfolio.
      </p>

      <form action={createProject} className="space-y-6">
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="e.g., Portfolio CMS"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Project Type
          </label>
          <select
            id="type"
            name="type"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="school">School Project</option>
            <option value="opensource">Open Source</option>
          </select>
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            placeholder="Describe your full-stack project context and engineering choices..."
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="e.g., Next.js, TypeScript, PostgreSQL, Tailwind"
          />
        </div>

        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Repository URL (Optional)
          </label>
          <input
            id="link"
            name="link"
            type="url"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="https://github.com"
          />
        </div>

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <a
            href="/projects"
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
          >
            Cancel
          </a>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Project
          </button>
        </div>
      </form>
    </main>
  );
}
