type Game = {
  _id: Object
  title: string
  genre: string
  releaseYear: number
  rating: number
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold">{game.title}</h2>
      <p>genre: {game.genre}</p>
      <p>releaseYear: {game.releaseYear}</p>
      <p>rating: {game.rating}</p>
    </div>
  )
}