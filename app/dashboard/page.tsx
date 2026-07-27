import type { Metadata } from 'next';
import { auth } from '@/auth';
import { SignOutButton } from '@/components/sign-out-button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Manage projects and content for Sterling\'s Full-Stack Portfolio.',
};

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 w-full">
      <section className="text-center py-8 md:py-12 border-b border-gray-100 dark:border-gray-800 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 sm:text-5xl">
          Owner Dashboard
        </h1>
        <p className="text-lg text-green-600 font-medium">
          Welcome back, {user?.email || 'Admin'}!
        </p>
      </section>

      <section className="bg-white dark:bg-gray-800/40 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/60 text-center flex flex-col items-center gap-6">
        <p className="text-gray-600 dark:text-gray-300">
          This content is protected by NextAuth middleware. Only authenticated users can see this screen.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="/dashboard/projects" 
            className="w-full sm:w-auto bg-gray-800 dark:bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer transition-colors text-center text-sm"
          >
            📋 Manage Projects
          </Link>
          
          <Link 
            href="/dashboard/projects/new" 
            className="w-full sm:w-auto bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600/10 dark:hover:bg-blue-600/20 dark:text-blue-400 dark:border dark:border-blue-500/30 cursor-pointer transition-all text-center text-sm"
          >
            + Create Project
          </Link>
          
          <div className="pt-2 sm:pt-0">
            <SignOutButton /> 
          </div>
        </div>
      </section>
    </main>
  );
}
