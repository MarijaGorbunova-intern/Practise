import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongo";
import { Game } from "../../games/Games_Components/GameType";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Practise_Games");
    const result = await db
      .collection<Game>("Games")
      .aggregate([{ $sample: { size: 1 } }])
      .toArray()

    const game = result[0] ?? null;
    const serializedGame = game
      ? { ...game, _id: game._id.toString() }
      : null;

    return NextResponse.json(serializedGame);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}