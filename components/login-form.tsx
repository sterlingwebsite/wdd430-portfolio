'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 bg-white placeholder-gray-400"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input 
          id="password" 
          type="password" 
          name="password" 
          minLength={6} 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 bg-white placeholder-gray-400"
          placeholder="••••••••"
        />
      </div>
      <button 
        aria-disabled={isPending} 
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-colors"
        disabled={isPending}
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-3 mt-2 rounded">
          <p role="alert" className="text-sm text-red-700 font-medium">
            {errorMessage}
          </p>
        </div>
      )}
    </form>
  );
}
