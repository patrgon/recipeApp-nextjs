import Footer from "./components/Footer";
import Header from "./components/Header";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="">
      <body className="flex min-h-screen flex-col items-center">
        <Header />
        <main className="w-full max-w-4xl ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
