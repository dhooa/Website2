import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-green-800 text-white">
      <h1 className="text-xl font-bold">Green Coffee Shelter</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
