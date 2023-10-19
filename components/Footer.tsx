

import Link from 'next/link'
export default function Footer() {
  return (
<footer className="bg-gray-800 text-white p-4">
<div className="container mx-auto text-center">
  <p>&copy; {new Date().getFullYear()} NGT金融リテラシー向上委員会</p>
  <div className="mt-2">
    {/* <a href="/privacy-policy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
    <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a> */}
  </div>
</div>
</footer>
  )
}