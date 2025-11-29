import ProjectCard from "./ProjectCards"
import type { ProjectWithRelations } from "../types"

type Props = {
  projects: ProjectWithRelations[]
}

export default function ProjectList({ projects }: Props) {
    const grouped: Record<string, ProjectWithRelations[]> = {}
    
    for (let item of projects) {
        const adaName = item.ada_projects?.name || "Sans catégorie"
        if (!grouped[adaName]) { 
            grouped[adaName] = [] 
        }
        grouped[adaName].push(item)
    }

    return (
        // Fond gris clair
        <div className="bg-ada-bg min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {Object.entries(grouped).map(([adaName, projectsList]) => (
                    <div key={adaName} className="mb-16">
                        
                        {/* Titre de catégorie avec ligne décorative */}
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-4xl font-bold">
                                <span className="text-white">Projets </span>
                                <span className="text-ada-red">{adaName}</span>
                            </h2>
                            <div className="flex-1 h-1 bg-gradient-to-r from-ada-red to-transparent rounded"></div>
                        </div>

                        {/* Grille responsive des cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsList.map((project) => (
                               <ProjectCard key={project.students_projects.id} project={project} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}