import { ObjectId } from "mongodb"

export type Game = {
  _id: ObjectId
  title: string
  genre: string
  releaseYear: number
  rating: number
  img: string
}