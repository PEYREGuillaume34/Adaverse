
import { getPublishedProjects, getPromotions, getAdaProjects } from "./actions/project";
import FilterData from "./components/FilterData";


export default async function Home() {
  // Récupérer TOUTES les données nécessaires
  const projects = await getPublishedProjects()
  const promos = await getPromotions()
  const adaProjects = await getAdaProjects()
  
  // Passer tout à FilterData
  return (
    <div>
      <FilterData 
        projects={projects}
        promos={promos}
      />
    </div>
  );
}