// app/projects/layout.tsx
import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <nav className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <ul className="flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <li>
            <Link 
              href="/projects" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              All Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/projects/opensource" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Open Source
            </Link>
          </li>
          <li>
            <Link 
              href="/projects/school" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              School Projects
            </Link>
          </li>
        </ul>
      </nav>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        {children}
      </section>
    </div>
  );
}
