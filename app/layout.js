import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center">
        <Header/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
