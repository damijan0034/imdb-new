import Providers from './Providers'
import Container from './components/Container'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'imdb',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Container>
            <Header />
            </Container>
            <Navbar />
            {children}
        </Providers>
          
       
       
        </body>
    </html>
  )
}
