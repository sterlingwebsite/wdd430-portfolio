import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold tracking-tight">
          <Link href="/">Sterling Steele</Link>
        </div>

        <ul className="flex gap-6 font-medium">
          <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-200 transition-colors">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}