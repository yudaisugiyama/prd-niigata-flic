import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black p-4">
      <a href="/" className="text-2xl text-white font-semibold">NGT金融リテラシー向上委員会</a>
      <div className="container mx-auto flex items-center justify-between">
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">Event</a>
          <a href="/contact" className="text-white hover:text-gray-300">Blog</a>
          <a href="/contact" className="text-white hover:text-gray-300">Support</a>
        </nav>
      </div>
    </header>
  )
}