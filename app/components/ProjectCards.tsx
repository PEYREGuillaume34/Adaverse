"use client"
import { useState } from 'react'
import Link from 'next/link'

function getThumbnailUrl(githubUrl) {
  return `${githubUrl}/blob/main/thumbnail.png?raw=true`
}

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <Link
      href={`/project/${project.students_projects.slug}`}
      className="border p-4 rounded shadow hover:shadow-lg transition"
    >
      {/* Image avec fallback */}
      {imageError ? (
        <div className="w-full h-48 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">
          Aucune image
        </div>
      ) : (
        <img
          src={getThumbnailUrl(project.students_projects.github_url)}
          alt={project.students_projects.name}
          className="w-full h-48 object-cover rounded mb-3"
          onError={() => setImageError(true)}
        />
      )}

      {/* Nom du projet */}
      <h3 className="font-semibold text-lg">
        {project.students_projects.name}
      </h3>

      {/* Badge promo */}
      <span className="inline-block bg-gray-200 rounded px-2 py-1 text-sm mt-2">
        {project.promotions?.name || "Promo inconnue"}
      </span>

      {/* Date */}
      <p className="text-xs text-gray-500 mt-2">
        le {new Date(project.students_projects.published_at).toLocaleDateString('fr-FR')}
      </p>
    </Link>
  )
}