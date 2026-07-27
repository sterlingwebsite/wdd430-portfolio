'use client';

import { useTransition } from 'react';

interface DeleteButtonProps {
  id: number;
  deleteAction: (id: number) => Promise<void>;
}

export function DeleteButton({ id, deleteAction }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      className="text-sm text-red-600 dark:text-red-400 hover:underline font-medium focus:outline-none disabled:opacity-50"
      onClick={() => {
        if (confirm("Are you sure you want to delete this project?")) {
          startTransition(async () => {
            await deleteAction(id);
          });
        }
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
