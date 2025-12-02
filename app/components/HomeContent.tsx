"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from 'next/navigation'
import ProjectList from "./ProjectList"
import type { ProjectWithRelations, Promotion } from "../types"

type Props = {
  projects: ProjectWithRelations[]
  promos: Promotion[]
}

export default function HomeContent({ projects, promos }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Récupérer le filtre depuis l'URL
  const selectedPromo = searchParams.get('promo') || ''
  
  const filteredProjects = projects.filter((project) => {
    if (selectedPromo === "") return true
    return project.promotions?.id === Number(selectedPromo)
  })

  return <ProjectList projects={filteredProjects} />
}