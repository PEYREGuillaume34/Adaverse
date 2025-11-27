
type Project = {
    students_projects: {
        id: number
        name: string
        github_url: string
        demo_url: string | null
        published_at: Date | null
    }
    promotions: {
        id: number
        name: string
    } | null
    ada_projects: {
        id: number
        name: string
    } | null
}

export default function ProjectList({ projects }: { projects: Project[] }) {
    const grouped = {}
    for (let item of projects) {
        const adaName = item.ada_projects?.name || "Sans catégorie"
        if (!grouped[adaName]) { grouped[adaName] = [] }
        grouped[adaName].push(item)
        console.log(adaName)
    }

    // Fonction pour générer l'URL de l'image depuis l'URL GitHub
    function getThumbnailUrl(githubUrl) {
        return `${githubUrl}/blob/main/thumbnail.png?raw=true`
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
                            <a
                                href={`/project/${project.students_projects.id}`}
                                key={project.students_projects.id}
                                className="border p-4 rounded shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={getThumbnailUrl(project.students_projects.github_url)}
                                    alt={project.students_projects.name}
                                    className="w-full h-48 object-cover rounded mb-3 bg-gray-200"
                                />

                                {/* Nom du projet */}
                                <h3 className="font-semibold text-lg">{project.students_projects.name}</h3>

                                {/* Badge avec le nom de la promo */}
                                <span className="inline-block bg-gray-200 rounded px-2 py-1 text-sm mt-2">
                                    {project.promotions?.name || "Promo inconnue"}
                                </span>

                                {/* Date de publication */}
                                <p className="text-xs text-gray-500 mt-2">
                                    le {new Date(project.students_projects.published_at).toLocaleDateString('fr-FR')}
                                </p>

                                {/* Liens GitHub et Démo */}
                                <div className="flex gap-2 mt-3">
                                    <span
                                        className="text-blue-500 text-sm hover:underline"
                                    >
                                        GitHub
                                    </span>
                                    {project.students_projects.demo_url && (
                                        <span
                                            className="text-blue-500 text-sm hover:underline"
                                        >
                                            Démo
                                        </span>
                                    )}


                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}