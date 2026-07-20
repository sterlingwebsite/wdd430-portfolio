'use client';

interface DeleteButtonProps {
  action: () => void;
}

export function DeleteButton({ action }: DeleteButtonProps) {
  return (
    <form action={action}>
      <button 
        type="submit"
        className="text-sm text-red-600 dark:text-red-400 hover:underline font-medium focus:outline-none"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this project?")) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </button>
    </form>
  );
}
