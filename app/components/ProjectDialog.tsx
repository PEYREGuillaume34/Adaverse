"use client"
import { useState, useEffect } from 'react'
import { addProject, getPromotions, getAdaProjects } from '../actions/project'

type Promo = { id: number; name: string }
type AdaProject = { id: number; name: string }

export default function ProjectDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [promos, setPromos] = useState<Promo[]>([])
  const [adaProjects, setAdaProjects] = useState<AdaProject[]>([])

  useEffect(() => {
    if (isOpen) {
      // Charger les données quand on ouvre
      getPromotions().then(setPromos)
      getAdaProjects().then(setAdaProjects)
    
    }
  }, [isOpen])

  const handleSubmit = async (formData: FormData) => {
    await addProject(formData)
    setIsOpen(false) // Fermer le modal après soumission
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Proposer un projet
      </button>
      
      {isOpen && (
        <dialog 
          open 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Proposer un projet</h2>
            <form action={handleSubmit} className="space-y-4">
              <input 
                name="name" 
                placeholder="Titre du projet" 
                required 
                className="w-full border px-3 py-2 rounded"
              />
              <input 
                name="github_url" 
                placeholder="URL GitHub" 
                required 
                type="url"
                className="w-full border px-3 py-2 rounded"
              />
              <input 
                name="demo_url" 
                placeholder="URL de la démo" 
                required 
                type="url"
                className="w-full border px-3 py-2 rounded"
              />
              
              <select name="promoId" required className="w-full border px-3 py-2 rounded">
                <option value="">Sélectionnez une promotion</option>
                {promos.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              
              <select name="adaProjectId" required className="w-full border px-3 py-2 rounded">
                <option value="">Sélectionnez un projet Ada</option>
                {adaProjects.map(a => (
                  <option key={a.id} value={a.id}>{a.name}</option>
                ))}
              </select>
              
              <div className="flex gap-2">
                <button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex-1"
                >
                  Ajouter
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  )
}