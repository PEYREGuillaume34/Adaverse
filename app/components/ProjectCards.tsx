"use client"

import { useState } from 'react'
import Link from 'next/link'
import type { ProjectWithRelations } from "../types"

function getThumbnailUrl(githubUrl: string) {
  return `${githubUrl}/blob/main/thumbnail.png?raw=true`
}

type Props = {
  project: ProjectWithRelations
}

export default function ProjectCard({ project }: Props) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <Link
      href={`/project/${project.students_projects.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border-2 border-white"
    >
      {/* Container image avec effet zoom */}
      <div className="relative h-48 overflow-hidden bg-gray-100 ">
        {imageError ? (
          // Gradient coloré si pas d'image
          <div className="w-full h-full bg-gradient-to-br from-ada-blue to-ada-coral flex items-center justify-center">
            <div className="text-center">
              <span className="text-white text-4xl">🎨</span>
              <p className="text-white text-sm font-semibold mt-2">Aucune image</p>
            </div>
          </div>
        ) : (
          <img
            src={getThumbnailUrl(project.students_projects.github_url)}
            alt={project.students_projects.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Badge promo en overlay */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-ada-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {project.promotions?.name || "?"}
          </span>
        </div>
      </div>

      {/* Contenu de la card */}
      <div className="p-5">
        {/* Titre avec effet hover */}
        <h3 className="text-xl font-bold text-ada-dark mb-3 group-hover:text-ada-red transition-colors line-clamp-2">
          {project.students_projects.name}
        </h3>

        {/* Date avec icône */}
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <span>📅</span>
          {project.students_projects.published_at 
            ? new Date(project.students_projects.published_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            : 'Non publié'}
        </p>

        {/* Indicateur hover */}
        <div className="mt-4 flex items-center text-ada-red font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Voir le projet
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}