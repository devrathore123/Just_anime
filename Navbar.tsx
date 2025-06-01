import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">Just Anime</Link>
      <div>
        <Link href="/login" className="mr-4">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}