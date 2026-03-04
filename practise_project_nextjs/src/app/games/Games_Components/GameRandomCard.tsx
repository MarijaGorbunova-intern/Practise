"use client";

import { useState, useEffect } from "react";
import { Game } from "../Games_Components/GameType";
import GameCard from "../Games_Components/GameCard";

export default function RandomCard() {
  const [game, setGame] = useState<Game | null>(null);

  const fetchRandomGame = async () => {
    try {
      const res = await fetch("/api/random");
      if (!res.ok) return;
      const data: Game = await res.json(); 
      setGame(data); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRandomGame();
    const interval = setInterval(fetchRandomGame, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!game) {
    return (
      <div className="bg-black/50 rounded-xl p-4 text-center">
        <p className="text-gray-400">Lo</p>
      </div>
    );
  }

  return <GameCard game={game} />;
}