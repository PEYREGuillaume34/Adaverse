"use client"

import { useState } from 'react'
import Link from 'next/link'
import type { ProjectWithRelations } from "../types"
import ProjectCardAdmin from "./ProjectCardAdmin"

function getThumbnailUrl(githubUrl: string) {
  return `${githubUrl}/blob/main/thumbnail.png?raw=true`
}

type Props = {
  project: ProjectWithRelations
}

export default function ProjectCard({ project }: Props) {
  const [imageError, setImageError] = useState(false)
  
  // Vérifier si le projet est publié
  const isPublished = !!project.students_projects.published_at
  
  // Si non publié, c'est une div, sinon un Link
  const CardWrapper = isPublished ? Link : 'div'
  
  return (
    <CardWrapper
      {...(isPublished ? { href: `/project/${project.students_projects.slug}` } : {})}
      className={`group block bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 border-2 relative ${
        isPublished 
          ? 'hover:-translate-y-1 border-white cursor-pointer' 
          : 'opacity-50 border-dashed border-yellow-400 cursor-default'
      }`}
    >
      {/* Badge "En attente" si non publié */}
      {!isPublished && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            ⏳ EN ATTENTE DE VALIDATION
          </span>
        </div>
      )}

      {/* Container image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {imageError ? (
          <div className="w-full h-full bg-linear-to-br from-ada-blue to-ada-coral flex items-center justify-center">
            <div className="text-center">
              <span className="text-white text-4xl">🎨</span>
              <p className="text-white text-sm font-semibold mt-2">Aucune image</p>
            </div>
          </div>
        ) : (
          <img
            src={getThumbnailUrl(project.students_projects.github_url)}
            alt={project.students_projects.name}
            className={`w-full h-full object-cover ${isPublished ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Badge promo */}
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-ada-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {project.promotions?.name || "?"}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        {/* Titre */}
        <h3 className={`font-oswald-bold text-3xl mb-3 transition-colors line-clamp-2 ${
          isPublished ? 'text-ada-dark group-hover:text-ada-red' : 'text-gray-600'
        }`}>
          {project.students_projects.name}
        </h3>

        {/* Date */}
        <p className="text-sm font-oswald-medium text-gray-500 flex items-center gap-2">
          <span>📅</span>
          {isPublished 
            ? new Date(project.students_projects.published_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            : 'En attente de publication'}
        </p>

        {/* Si publié : indicateur hover */}
        {isPublished && (
          <div className="mt-4 flex items-center text-ada-red font-oswald-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Voir le projet
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}

        {/* Si NON publié : boutons admin */}
        {!isPublished && (
          <ProjectCardAdmin 
            projectId={project.students_projects.id}
            projectName={project.students_projects.name}
          />
        )}
      </div>
    </CardWrapper>
  )
}