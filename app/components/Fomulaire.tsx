import { useState } from "react";
import { addProject } from "../actions/project";
import SelectPromo from "./SelectPromo";
import SelectAdaProject from "./SelectAdaProject";

export default function Formulaire({ promos, adaProjects, setIsOpen }: { promos: { id: number; name: string }[], adaProjects: { id: number; name: string }[], setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <div>
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4">
                        <h2 className="text-xl font-bold mb-4">Proposer un projet</h2>

                        <form action={async (formData) => {
                            await addProject(formData) // 1. Envoie au serveur
                            setIsOpen(false) // // 2. Ferme le modal
                        }} className="space-y-4">
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

                            <SelectPromo promos={promos} />
                            <SelectAdaProject adaProjects={adaProjects} />


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
       
        </div>
    )
}
