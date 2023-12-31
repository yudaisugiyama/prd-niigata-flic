import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black p-4 text-left">
      <Link href="/" className="text-2xl text-white font-semibold">NGT金融リテラシー向上委員会</Link>
      <div className="container flex items-center justify-between">
        <nav className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/event" className="text-white hover:text-gray-300">Event</Link>
          <Link href="/blog" className="text-white hover:text-gray-300">Blog</Link>
          <Link href="/support" className="text-white hover:text-gray-300">Support</Link>
        </nav>
      </div>
    </header>
  )
}