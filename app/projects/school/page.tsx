import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';

function SchoolProjectSkeleton() {
  return (
    <div className="animate-pulse grid gap-6 sm:grid-cols-2">
      <div className="h-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default function SchoolProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        School Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Review coursework projects, database architectures, and academic assignments.
      </p>

      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}
