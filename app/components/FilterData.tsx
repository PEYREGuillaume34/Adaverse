"use client";

import { useState } from "react";
import FormModal from "./Formulaire/FormModal";
import ProjectList from "./ProjectList";

export default function FilterData({ projects, promos}) {
  const [selectedPromo, setSelectedPromo] = useState("");

  
  const filteredProjects = projects.filter((project) => {
    if (selectedPromo === "") return true;

    // Sinon, garder seulement les projets de cette promo
    return project.promotions?.id === parseInt(selectedPromo);
  });

  return (
    <div>
      
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl">Adaverse</h1>

        
        <select
          value={selectedPromo}
          onChange={(e) => setSelectedPromo(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">Toutes les promos</option>
          {promos.map((promo) => (
            <option key={promo.id} value={promo.id}>
              {promo.name}
            </option>
          ))}
        </select>

        <FormModal />
      </header>

      {/* Afficher les projets filtrés */}
      <ProjectList projects={filteredProjects} />
    </div>
  );
}






