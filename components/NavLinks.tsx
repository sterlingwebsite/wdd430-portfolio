'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <ul className="flex items-center gap-6 list-none p-0 m-0 font-medium">
      {links.map((link) => {
        const isActive = link.href === '/' 
          ? pathname === '/' 
          : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`
                text-sm transition-all duration-200 pb-1 border-b-2 font-medium outline-none
                ${isActive 
                  ? 'text-yellow-300 dark:text-blue-400 border-yellow-300 dark:border-blue-400 font-bold' 
                  : 'text-white/90 hover:text-blue-200 dark:hover:text-blue-300 border-transparent'
                }
              `}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
