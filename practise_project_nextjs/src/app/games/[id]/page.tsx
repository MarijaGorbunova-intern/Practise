"use server"
import clientPromise from "../../../lib/mongo"
import { ObjectId } from "mongodb"
import { Game } from "../Games_Components/GameType"
import PageWrapper from "../../../components/animation/PageWrapper"
import Link from "next/link"
type Props = {
  params: Promise<{ id: string }>
}

export default async function GamePage({ params }: Props) {
  const { id } = await params  

  const client = await clientPromise
  const db = client.db("Practise_Games")

  const game = await db
    .collection<Game>("Games")
    .findOne({ _id: new ObjectId(id) }) 

  if (!game) return <p className="text-amber-50 text-center mt-8">Game not found</p>

  return (
    <PageWrapper>
      <Link href="/games" className="block">
        <div className="max-w-6xl mx-auto p-10 bg-black/60 rounded-2xl text-amber-50 mt-8 shadow-lg hover:shadow-2xl">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <img
              src={game.img}
              alt={game.title}
              className="w-64 h-64 object-cover rounded-xl shadow-2xl"/>

            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold">{game.title}</h1>
              <p><span className="font-semibold">Genre:</span> {game.genre}</p>
              <p><span className="font-semibold">Release Year:</span> {game.releaseYear}</p>
              <p><span className="font-semibold">Rating:</span> {game.rating}</p>
            </div>
          </div>
          <div className="border-t border-gray-600 my-10"></div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold">Description</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {game.description}
            </p>
          </div>
        </div>
      </Link>
    </PageWrapper>
  )
}