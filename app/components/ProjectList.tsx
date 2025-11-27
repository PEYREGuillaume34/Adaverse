import ProjectCard from "./ProjectCards"


export default function ProjectList({ projects }: { projects: Project[] }) {
    const grouped = {}
    for (let item of projects) {
        const adaName = item.ada_projects?.name || "Sans catégorie"
        if (!grouped[adaName]) { grouped[adaName] = [] }
        grouped[adaName].push(item)
        console.log(adaName)
    }

    console.log("Tous les projets:", projects)
    console.log("Premier projet:", projects[0])

    return (
        <div className="p-4">
            {/* Parcourir chaque catégorie */}
            {Object.entries(grouped).map(([adaName, projectsList]) => (
                <div key={adaName} className="mb-8">
                    {/* Nom de la catégorie (Ada Quiz, Ada Check Events...) */}
                    <h2 className="text-2xl font-bold mb-4">{adaName}</h2>

                    {/* Liste des projets de cette catégorie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projectsList.map((project) => (
                           <ProjectCard key={project.students_projects.id} project={project} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}