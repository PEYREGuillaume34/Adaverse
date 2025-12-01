import Link from "next/link"
import FormModal from "./Formulaire/FormModal"
import { getPromotions } from "../actions/project"

export default async function Header() {
  // Récupérer les promos côté serveur
  const promos = await getPromotions()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between gap-4">
        
        {/* Logo cliquable vers l'accueil */}
        <Link href="/" className="text-3xl sm:text-4xl font-futura font-bold hover:opacity-80 transition-opacity">
          <span className="text-ada-dark">ada</span>
          <span className="text-ada-red">verse</span>
        </Link>

        {/* Groupe filtre + bouton à droite */}
        <div className="flex items-center gap-3">
          {/* Note: Le filtre sera ajouté après si besoin */}
          <FormModal />
        </div>
      </div>
    </header>
  )
}