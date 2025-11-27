import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList";
import { getPublishedProjects } from "./actions/project";
import Link from "next/link";


export default async function Home() {
  const projects = await getPublishedProjects()

    console.log("Nombre de projets:", projects.length) // ← AJOUTEZ CECI
  console.log("Premier projet:", projects[0])  

  
  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl">Adaverse</h1> <ProjectForm />
      </header>
      <div>
        <ProjectList projects={projects} />


      </div>
    </div>
  );
}