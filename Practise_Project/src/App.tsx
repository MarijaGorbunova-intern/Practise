import React, { useState } from "react";
import { NoteInput } from "./components/UI/Inputs/Note_input.tsx";
import { NoteForm } from "./components/NoteForm.tsx";

interface Note {
  id: number;
  text: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const handleAdd = () => {
    if (!text.trim()) return;
    const newNote: Note = { id: Date.now(), text };
    setNotes(prev => [...prev, newNote]);
    setText("");
  };
  const handleDelete = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5">My notes</h1>
      <NoteInput value={text} onChange={e => setText(e.target.value)} onAdd={handleAdd} />
      <NoteForm notes={notes} onDelete={handleDelete} />
    </div>
  );
}

export default App;