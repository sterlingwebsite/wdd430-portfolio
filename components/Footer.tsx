export default function Footer() {  
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm tracking-wide">
        <p>
          Copyright &copy; {new Date().getFullYear()} &nbsp;|&nbsp;
          <span className="text-white font-medium">Sterling Steele</span> &nbsp;|&nbsp;
          All rights reserved
        </p>
      </div>
    </footer>
  );
}