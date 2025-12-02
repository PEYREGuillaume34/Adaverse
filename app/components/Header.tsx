"use client"

import Link from "next/link"
import FormModal from "./Formulaire/FormModal"

type Props = {
  promos?: { id: number; name: string }[]
  selectedPromo?: string
  onPromoChange?: (value: string) => void
  showFilter?: boolean
}

export default function Header({ promos = [], selectedPromo = "", onPromoChange, showFilter = false }: Props) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between gap-4">
        
        {/* Logo à gauche */}
        <Link href="/">
          <h1 className="text-3xl sm:text-4xl font-futura font-bold hover:opacity-80 transition-opacity cursor-pointer">
            <span className="text-ada-dark">ada</span>
            <span className="text-ada-red">verse</span>
          </h1>
        </Link>

        {/* Filtre + Bouton à droite */}
        <div className="flex items-center gap-3">
          {/* Filtre (affiché seulement sur la page d'accueil) */}
          {showFilter && (
            <select
              value={selectedPromo}
              onChange={(e) => onPromoChange?.(e.target.value)}
              className="border-2 border-gray-300 rounded-lg px-4 py-2.5 bg-white text-ada-dark font-medium focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all cursor-pointer"
            >
              <option value="">Toutes les promos ⭐</option>
              {promos.map((promo) => (
                <option key={promo.id} value={promo.id}>
                  {promo.name}
                </option>
              ))}
            </select>
          )}

          {/* Bouton Proposer */}
          <FormModal />
        </div>
      </div>
    </header>
  )
}