import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../app/components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/contact/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Honda Clone',
  description: 'Created by Randel Humphrey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav />
        <Footer />
        </body>
    </html>
  )
}
