import "../app/global.css" 
import Navbar from "../components/UI/Navbar"
import Footer from "../components/UI/Footer"
type LayoutPr = {
    children: React.ReactNode
}

export default function RootLayout({ children }: LayoutPr) {
  return (
   <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-900 text-amber-50">
        <Navbar/> 
        <main className="max-w-6xl px-4 py-8 mx-auto">      
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}