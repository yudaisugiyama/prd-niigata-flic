import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center p-2">
        <p>&copy; {new Date().getFullYear()} NGT金融リテラシー向上委員会</p>
      </div>

      <div className="flex justify-center space-x-5">
        <Link href="https://line.me/R/ti/p/@590qfaot">
          <img src="/LINE_APP_Android.png" alt="LINE" className="h-4 w-4" /></Link>

        <Link href="https://twitter.com/niigataflic">
          <img src="/logo.svg" alt="X" className="h-4 w-4" /></Link>

        <Link href="https://www.facebook.com/profile.php?id=100087655291578">
          <img src="/Facebook_Logo_Secondary.png" alt="Facebook" className="h-4 w-4" /></Link>

        <Link href="https://www.instagram.com/niigata_money_literacy/">
          <img src="/Instagram_Glyph_White.svg" alt="Instagram" className="h-4 w-4" /></Link>
      </div>

    </footer>
  )
}
