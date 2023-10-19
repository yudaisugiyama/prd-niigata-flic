import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black p-4">
      <Link href="/" className="text-2xl text-white font-semibold">NGT金融リテラシー向上委員会</Link>
      <div className="container mx-auto flex items-center justify-between">
        <nav className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">Event</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Blog</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Support</Link>
        </nav>
      </div>
    </header>
  )
}