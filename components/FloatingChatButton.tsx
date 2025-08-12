// components/FloatingChatButton.tsx
'use client';
import { useState } from "react";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-lg p-4">
          <h3 className="font-bold mb-2">AI Assistant</h3>
          <p className="text-sm text-gray-500">Chatbot coming soon...</p>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 text-sm text-red-500"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
