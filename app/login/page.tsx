import type { Metadata } from 'next';
import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Access the portfolio administrator control center to manage project directories.',
};

export default function LoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Access your portfolio administrator control center.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
