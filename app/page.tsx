import { getPublishedProjects } from './actions/project'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

export default async function Home() {
  const projects = await getPublishedProjects()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Projets publiés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  )
}