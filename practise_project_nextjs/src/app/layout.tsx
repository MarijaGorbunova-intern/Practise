import "../app/global.css" 
import Navbar from "../components/UI/Navbar"
import Footer from "../components/UI/Footer"
type LayoutPr = {
    children: React.ReactNode
}

export default function RootLayout({ children }: LayoutPr) {
  return (
   <html suppressHydrationWarning>
      <body>
        <Navbar /> 
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}