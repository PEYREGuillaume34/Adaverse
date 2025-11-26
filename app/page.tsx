
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList";
import { getStudProjectsGroupedByAda } from "./actions/project";


export default async function Home() {
  const projects = await getStudProjectsGroupedByAda()
  return (
    <div>
      <header>
        <h1 className="text-2xl">Adaverse</h1>
        <ProjectForm />
      </header>
      <div>
        <ProjectList projects={projects} />



      </div>
    </div>
  );
}