import RandomCard from "./games/Games_Components/GameRandomCard";

export default function HomePage() {
  return (
    <div
        className="relative -mt-8 -mx-4 min-h-[calc(100vh-4rem)] 
                  flex items-center justify-center"
      style={{
        backgroundImage: "url('/background_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
      }}>

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4">
        <div className="flex items-center justify-between w-full gap-4 mb-8">
          <div className="w-64">
            <RandomCard />
          </div>
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-5xl font-bold text-white mb-4 text-center">
              Welcome to my game reviews
            </h1>
            <a
              href="/games"
              className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors">
              Games
            </a>
          </div>
          <div className="w-64">
            <RandomCard />
          </div>
        </div>
      </div>
    </div>
  );
}