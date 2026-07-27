import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add New Project',
  description: 'Fill out the details to add a new project record to your web development portfolio.',
};

export default function NewProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
