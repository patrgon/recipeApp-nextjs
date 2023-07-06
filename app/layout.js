import Footer from './components/Footer';

import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center">
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
