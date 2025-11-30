
import { getProjectBySlug } from "../../actions/project"
import Link from "next/link"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
    
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-ada-dark mb-4">
                        Projet non trouvé 😕
                    </h1>
                    <Link 
                        href="/"
                        className="inline-block bg-ada-red hover:bg-ada-coral text-white font-semibold px-6 py-3 rounded-lg transition-all"
                    >
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-5xl mx-auto px-4 py-6">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 text-ada-red hover:text-ada-coral font-semibold transition-colors mb-4"
                    >
                        ← Retour à l'accueil
                    </Link>
                    
                    <h1 className="text-4xl font-futura font-bold text-ada-dark mt-4">
                        {project.students_projects.name}
                    </h1>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-12">
                
                {/* Image */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <img 
                        src={`${project.students_projects.github_url}/blob/main/thumbnail.png?raw=true`}
                        alt={project.students_projects.name}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Infos */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-ada-dark mb-6">
                        ℹ️ Informations du projet
                    </h2>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500 font-semibold mb-1">🎓 Promotion</p>
                            <p className="text-lg font-bold text-ada-dark">
                                {project.promotions?.name || "Non spécifiée"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 font-semibold mb-1">📚 Projet Ada</p>
                            <p className="text-lg font-bold text-ada-dark">
                                {project.ada_projects?.name || "Non spécifié"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 font-semibold mb-1">📅 Publié le</p>
                            <p className="text-lg font-bold text-ada-dark">
                                {project.students_projects.published_at 
                                    ? new Date(project.students_projects.published_at).toLocaleDateString('fr-FR')
                                    : 'Date non disponible'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href={project.students_projects.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-ada-dark hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                    >
                        📂 Voir sur GitHub
                    </a>
                    
                    {project.students_projects.demo_url && (
                        <a 
                            href={project.students_projects.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-ada-red hover:bg-ada-coral text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                        >
                            🚀 Voir la démo
                        </a>
                    )}
                </div>
            </main>
        </div>
    )
}