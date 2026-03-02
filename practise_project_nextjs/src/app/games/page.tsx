import clientPromise from "../../lib/mongo"
import GameCard from "./Games_Components/GameCard"

type Game = {
  title: string
  genre: string
  releaseYear: number
  rating: number
}

export default async function GamesPage() {
  const client = await clientPromise
  const db = client.db("Practise_Games")

  const games = await db
    .collection<Game>("Games")
    .find()
    .toArray()

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Games</h1>

      {games.map((game) => (
        <GameCard key={game._id.toString()} game={game} />
      ))}
    </div>
  )
}