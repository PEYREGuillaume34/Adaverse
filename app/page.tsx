import { getAllProjects, getPromotions } from "./actions/project";
import HomeContent from "./components/HomeContent";

export default async function Home() {
  const projects = await getAllProjects();
  const promos = await getPromotions();
  
  return <HomeContent projects={projects} promos={promos} />
}