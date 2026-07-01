'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0, margin: 0, fontWeight: 500 }}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={isActive ? 'active' : ''}
              style={{
                textDecoration: 'none',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                paddingBottom: '4px',
                color: isActive ? '#fde047' : '#ffffff',
                fontWeight: isActive ? '700' : '500',
                borderBottom: isActive ? '2px solid #fde047' : '2px solid transparent',
              }}
              onMouseEnter={(e) => { if(!isActive) e.currentTarget.style.color = '#bfdbfe'; }}
              onMouseLeave={(e) => { if(!isActive) e.currentTarget.style.color = '#ffffff'; }}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
