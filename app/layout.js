import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'DetMoji',
  description: 'Detects Signs and gives reactions!',
}
const style={
  body:`flex flex-col min-h-screen font-poppins subpixel-antialiased bg-gradient-to-t from-white via-sky-100 to-sky-200`,
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className={style.body}>
        <Provider>
              <main>
                <Nav/>
                {children}
              </main>
              <Footer/>
        </Provider>
      </body>
    </html>
  )
}
