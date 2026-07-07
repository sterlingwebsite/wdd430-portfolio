'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    params.set('page', '1'); 
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search projects
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search projects..."
        className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 py-[9px] pl-3 text-sm text-gray-900 dark:text-white outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />

    </div>
  );
}
