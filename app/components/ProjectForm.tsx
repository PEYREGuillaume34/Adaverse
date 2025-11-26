"use client"

import { addProject, getPromotions, getAdaProjects } from "../actions/project";
import { useState } from "react";
import { useEffect } from "react";



export default function ProjectForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [promos, setPromos] = useState([])
    const [adaProjects, setAdaProjects] = useState([])

    useEffect(() => {
        if (isOpen) {
            // Appeler vos fonctions depuis actions/project.ts
            getPromotions().then(setPromos)
            getAdaProjects().then(setAdaProjects)
        }
    }, [isOpen])


    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Proposez un projet</button>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4">
                        <h2 className="text-xl font-bold mb-4">Proposer un projet</h2>
                        
                        <form action={addProject} className="space-y-4">
                            <input 
                                name="name" 
                                placeholder="Nom du projet" 
                                required 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input 
                                name="github_url" 
                                placeholder="GitHub URL" 
                                required 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input 
                                name="demo_url" 
                                placeholder="Demo URL" 
                                required 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            
                            <select 
                                name="promoId" 
                                required 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Sélectionner une promo</option>
                                {promos.map((promo) => (
                                    <option key={promo.id} value={promo.id}>
                                        {promo.name}
                                    </option>
                                ))}
                            </select>
                            
                            <select 
                                name="adaProjectId" 
                                required 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Sélectionner un projet</option>
                                {adaProjects.map((ada) => (
                                    <option key={ada.id} value={ada.id}>
                                        {ada.name}
                                    </option>
                                ))}
                            </select>
                            
                            <div className="flex gap-2">
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Envoyer
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
}

