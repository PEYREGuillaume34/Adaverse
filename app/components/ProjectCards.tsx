"use client"

import { useState } from 'react'
import Link from 'next/link'
import type { ProjectWithRelations } from "../types"
import ProjectCardAdmin from "./ProjectCardAdmin"
import ProjectImage from "./ProjectImage"  // ← Import

type Props = {
  project: ProjectWithRelations
}

export default function ProjectCard({ project }: Props) {
  const isPublished = !!project.students_projects.published_at
  const CardWrapper = isPublished ? Link : 'div'
  
  return (
    <CardWrapper
      {...(isPublished ? { href: `/project/${project.students_projects.slug}` } : {})}
      className={`group block bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 border-2 relative ${
        isPublished 
          ? 'hover:-translate-y-1 border-white cursor-pointer' 
          : 'opacity-60 border-dashed border-yellow-400 cursor-default'
      }`}
    >
      {/* Badge "En attente" si non publié */}
      {!isPublished && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            ⏳ En attente de validation
          </span>
        </div>
      )}

      {/* Image - UTILISE LE COMPOSANT */}
      <div className={isPublished ? 'group-hover:scale-110 transition-transform duration-500' : ''}>
        <ProjectImage 
          githubUrl={project.students_projects.github_url}
          projectName={project.students_projects.name}
          height="h-48"
        />
      </div>
      
      {/* Badge promo en overlay */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-block bg-ada-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {project.promotions?.name || "?"}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${
          isPublished ? 'text-ada-dark group-hover:text-ada-red' : 'text-gray-600'
        }`}>
          {project.students_projects.name}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <span>📅</span>
          {isPublished 
            ? new Date(project.students_projects.published_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            : 'En attente de publication'}
        </p>

        {isPublished && (
          <div className="mt-4 flex items-center text-ada-red font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Voir le projet
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}

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