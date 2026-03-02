"use server"
import clientPromise from "../../../lib/mongo"
import { ObjectId } from "mongodb"
import { Game } from "../Games_Components/GameType"

type Props = {
 params: Promise<{id: string}>
}
export default async function GamePage({ params }: Props) {
 const {id} = await params  
  
  const client = await clientPromise
  const db = client.db("Practise_Games")

  const game = await db
    .collection<Game>("Games")
    .findOne({ _id: new ObjectId(id) }) 

  if (!game) return <p className="text-amber-50 text-center mt-8">Game not found</p>


  return (
    <div className="max-w-3xl mx-auto p-8 bg-black/50 rounded-xl text-amber-50 mt-8">
      <img src={game.img} alt={game.title} className="w-48 h-48 object-cover mb-4 rounded-lg mx-auto"/>
      <h1 className="text-3xl font-bold mb-2 text-center">{game.title}</h1>
      <p><span className="font-medium">Genre:</span> {game.genre}</p>
      <p><span className="font-medium">Release Year:</span> {game.releaseYear}</p>
      <p><span className="font-medium">Rating:</span> {game.rating}</p>
    </div>
  )
}