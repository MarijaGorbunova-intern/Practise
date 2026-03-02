export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Welcome to my game reviews
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        Here are games I recommend
      </p>
      <a
        href="/games"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Games
      </a>
    </div>
  )
}