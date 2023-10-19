

import Link from 'next/link'
export default function Footer() {
  return (
<footer className="bg-gray-800 text-white p-4">
<div className="container mx-auto text-center">
  <p>&copy; {new Date().getFullYear()} NGT金融リテラシー向上委員会</p>
</div>
</footer>
  )
}