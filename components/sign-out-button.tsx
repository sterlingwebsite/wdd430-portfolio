import { signOut } from '@/auth';

export function SignOutButton() {
  async function handleSignOut() {
    'use server';
    await signOut({ redirectTo: '/' });
  }

  return (
    <form action={handleSignOut} className="w-full sm:w-auto">
      <button 
        type="submit" 
        className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 dark:bg-red-950/10 dark:hover:bg-red-950/20 dark:text-red-400 dark:border dark:border-red-900/40 cursor-pointer transition-all text-center text-sm"
      >
        Sign Out
      </button>
    </form>
  );
}
