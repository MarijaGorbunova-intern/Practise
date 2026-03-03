export default function HomePage() {
  return (
    <div className="relative -mt-8 -mx-4 px-4 py-16 min-h-[calc(100vh-4rem)] 
                    flex items-center justify-center overflow-hidden"
         style={{
           backgroundImage: "url('/background_image.jpg')",
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}>
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          Welcome to my game reviews
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Here are games I recommend
        </p>
        <a
          href="/games"
          className="px-8 py-3 bg-green-700  text-white rounded-lg shadow-lg 
                     hover:bg-green-600  transition transform hover:scale-105">
          Games
        </a>
      </div>
    </div>
  )
}