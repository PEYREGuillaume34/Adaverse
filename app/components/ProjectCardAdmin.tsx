"use client"

import { publishProject, deleteProject } from "../actions/project"
import { useState } from "react"

type Props = {
  projectId: number
  projectName: string
}

export default function ProjectCardAdmin({ projectId }: Props) {
  const [loading, setLoading] = useState(false)

  const handlePublish = async () => {
    
    setLoading(true)
    await publishProject(projectId)
    setLoading(false)
  }

  const handleDelete = async () => {
    
    await deleteProject(projectId)
    setLoading(false)
  }

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={handlePublish}
        disabled={loading}
        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 rounded-lg transition-all disabled:opacity-50"
      >
        ✓ Publier
      </button>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded-lg transition-all disabled:opacity-50"
      >
        ✗ Refuser
      </button>
    </div>
  )
}