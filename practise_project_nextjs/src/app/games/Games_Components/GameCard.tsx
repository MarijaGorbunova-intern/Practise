import { ObjectId } from "mongodb"
import {Game} from "../Games_Components/GameType"
import Link from "next/link"
export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game._id.toString()}`} className="block">
      <div className="bg-black/50 border border-black rounded-xl p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow">
        <img src={game.img} alt={game.title} className="w-24 h-24 object-cover mb-2 rounded text-amber-50"  />
        <h2 className="text-lg font-bold text-amber-50">{game.title}</h2> 
        <p className="text-amber-50">Genre: {game.genre}</p>
        <p className="text-amber-50">Release Year: {game.releaseYear}</p>
        <p className="text-amber-50">Rating: {game.rating}</p> 
      </div>
    </Link>
  )
}