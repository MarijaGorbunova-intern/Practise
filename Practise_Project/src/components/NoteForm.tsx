import React from "react";
import { Button } from "./UI/buttons/Button";

interface Note {
  id: number;
  text: string;
}

interface NoteFormProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ notes, onDelete }) => (
  <div>
    {notes.map(note => (
      <div
        key={note.id}
        className="flex justify-between items-center p-2 border-b border-gray-300">
        <span>{note.text}</span>
        <Button onClick={() => onDelete(note.id)}>Delete</Button>
      </div>
    ))}
  </div>
);