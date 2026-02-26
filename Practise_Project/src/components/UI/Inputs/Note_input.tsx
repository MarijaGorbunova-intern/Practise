import React from "react";

interface NoteInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export const NoteInput: React.FC<NoteInputProps> = ({ value, onChange, onAdd }) => {
  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="notes"
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      <button
        onClick={onAdd}
        className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-blue-600 transition-colors"> Add
      </button>
    </div>
  );
};