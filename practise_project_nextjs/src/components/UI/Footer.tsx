export default function Footer() {
  return (
    <footer className="bg-green-600 text-white shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2026 Prctise Marija xd</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-200 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}