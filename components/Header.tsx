import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold tracking-tight">
          <Link href="/">Sterling Steele</Link>
        </div>

        <NavLinks />
      </nav>
    </header>
  );
}