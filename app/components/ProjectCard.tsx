type Project = {
  id: number
  name: string
  github_url: string
  demo_url: string | null
  promotion_id: number | null
  ada_project_id: number | null
  published_at: Date | null
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <p>Publié le: {project.published_at?.toLocaleDateString('fr-FR')}</p>
        <div className="flex gap-2">
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          {project.demo_url && (
            <a 
              href={project.demo_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}