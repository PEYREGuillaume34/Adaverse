import { getProjectBySlug } from "../../actions/project"

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    
    // Convertir le slug en nombre (pour l'instant on utilise l'ID)
    const projectId = parseInt(slug)
    
    // Récupérer le projet
    const project = await getProjectBySlug(slug)
    
    // Si le projet n'existe pas
    if (!project) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Projet non trouvé</h1>
            </div>
        )
    }
    
    return (
        <div className="p-4 max-w-4xl mx-auto">
            {/* Retour à l'accueil */}
            <a href="/" className="text-blue-500 hover:underline mb-4 inline-block">
                ← Retour à l'accueil
            </a>
            
            {/* Nom du projet */}
            <h1 className="text-3xl font-bold mb-4">
                {project.students_projects.name}
            </h1>
            
            {/* Image */}
            <img 
                src={`${project.students_projects.github_url}/blob/main/thumbnail.png?raw=true`}
                alt={project.students_projects.name}
                className="w-full h-96 object-cover rounded mb-6"
            />
            
            {/* Infos */}
            <div className="space-y-2 mb-6">
                <p><strong>Promotion :</strong> {project.promotions?.name}</p>
                <p><strong>Projet Ada :</strong> {project.ada_projects?.name}</p>
                <p><strong>Publié le :</strong> {project.students_projects.published_at ? new Date(project.students_projects.published_at).toLocaleDateString('fr-FR') : 'Date non disponible'}</p>
            </div>
            
            {/* Liens */}
            <div className="flex gap-4">
                <a 
                    href={project.students_projects.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
                >
                    Voir sur GitHub
                </a>
                {project.students_projects.demo_url && (
                    <a 
                        href={project.students_projects.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Voir la démo
                    </a>
                )}
            </div>
        </div>
    )
}