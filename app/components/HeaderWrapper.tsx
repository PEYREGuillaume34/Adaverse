"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from './Header'
import { getPromotions } from '../actions/project'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isHomePage = pathname === '/'
  
  const [promos, setPromos] = useState<{ id: number; name: string; created_at: Date; }[]>([])
  
  // Lire le filtre depuis l'URL
  const selectedPromo = searchParams.get('promo') || ''

  // Charger les promos seulement sur la page d'accueil
  useEffect(() => {
    if (isHomePage) {
      getPromotions().then(setPromos)
    }
  }, [isHomePage])

  // Fonction pour changer le filtre et mettre à jour l'URL
  const handlePromoChange = (promoId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (promoId === '') {
      params.delete('promo')
    } else {
      params.set('promo', promoId)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <Header 
      promos={promos}
      selectedPromo={selectedPromo}
      onPromoChange={handlePromoChange}
      showFilter={isHomePage}
    />
  )
}