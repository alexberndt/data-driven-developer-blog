import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <Link href='https://alexberndt.com' passHref>by Alex Berndt</Link>
        <p>Data Driven Developer</p>
        <p>© 2022</p>
      </div>
    </footer>
  )
}
