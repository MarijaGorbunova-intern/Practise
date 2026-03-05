import clientPromise from "../../lib/mongo"
import GameCard from "./Games_Components/GameCard"
import { Game } from "./Games_Components/GameType"
import ClassicButton from "../../components/UI/buttons/ClassicButton"
 
type Props = {
  searchParams: Promise<{ search?: string }>
}

export default async function GamesPage({ searchParams }: Props) {
  const { search } = await searchParams 

  const client = await clientPromise
  const db = client.db("Practise_Games")

  const games = await db
    .collection<Game>("Games")
    .find(
      search
        ? { title: { $regex: search, $options: "i" } }
        : {}
    )
    .toArray()

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-50">Games</h1>
      <form method="get" className="mb-8 flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Search games..."
          defaultValue={search}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-black/60 text-amber-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"/>
        <ClassicButton type="submit">Search</ClassicButton>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game._id.toString()} game={game}/>
        ))}
      </div>

      {games.length === 0 && (
        <p className="text-gray-400 mt-6">No games found.</p>
      )}
    </div>
  )
}