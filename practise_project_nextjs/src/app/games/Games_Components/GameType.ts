import { ObjectId } from "mongodb"

export interface Game {
  _id: ObjectId | string
  title: string
  genre: string
  releaseYear: number
  rating: number
  img: string
  description:string
}