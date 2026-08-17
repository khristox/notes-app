// app/notes/[id]/page.tsx
import { getNoteById } from '../../services/notes'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { toggleNoteImportance } from "../../actions/notes"


interface NotePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function NotePage({ params }: NotePageProps) {
  // Get the id from params
  const { id } = await params
  
  // Convert string id to number
  const noteId = parseInt(id)
  
  // Get the note
  const note =await getNoteById(noteId)
  // If note doesn't exist, show 404
  if (!note) {
    notFound()
  }
  
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link 
        href="/notes" 
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to all notes
      </Link>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Note #{note.id}
          </h1>
          {note.important && (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ Important
            </span>
          )}
        </div>
        
        <div className="mt-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            {note.content}
          </p>
        </div>
        <form action={toggleNoteImportance}>
          <input type="hidden" name="id" value={note.id} />
          <button type="submit">
            {note.important ? "Mark as not important" : "Mark as important"}
          </button>
        </form>
      </div>    
    </div>
  )
}