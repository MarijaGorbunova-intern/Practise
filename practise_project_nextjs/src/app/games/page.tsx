import clientPromise from "../../lib/mongo"
import GameCard from "./Games_Components/GameCard"
import {Game} from "./Games_Components/GameType"

export default async function GamesPage() {
  const client = await clientPromise
  const db = client.db("Practise_Games")

  const games = await db
    .collection<Game>("Games")
    .find()
    .toArray()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-amber-50">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game._id.toString()} game={game} />
        ))}
      </div>
    </div>
  )
}