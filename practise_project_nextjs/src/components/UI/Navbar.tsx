"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <Link href="/" className="text-white no-underline hover:text-blue-200 transition mx-4">
            Home  
          </Link>
          <Link href="/games" className="text-white no-underline hover:text-blue-200 transition mx-4">
            Games
          </Link>
          <Link href="/about" className="text-white no-underline hover:text-blue-200 transition mx-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}