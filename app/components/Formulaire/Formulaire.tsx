import { addProject } from "../../actions/project"
import type { Promotion, AdaProject } from "../../types"

type Props = {
  promos: Promotion[]
  adaProjects: AdaProject[]
  setIsOpen: (value: boolean) => void
}

export default function Formulaire({ promos, adaProjects, setIsOpen }: Props) {
    return (
        // Overlay avec flou
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in">
            {/* Carte du formulaire */}
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
                
                {/* Titre */}
                <h2 className="text-3xl font-bold mb-6 text-center">
                    <span className="text-ada-dark">Proposer un </span>
                    <span className="text-ada-red">projet ✨</span>
                </h2>

                <form 
                    action={async (formData) => {
                        await addProject(formData)
                        setIsOpen(false)
                    }} 
                    className="space-y-5"
                >
                    {/* Input Nom */}
                    <div>
                        <label className="block text-sm font-semibold text-ada-dark mb-2">
                            Nom du projet
                        </label>
                        <input
                            name="name"
                            placeholder="Ex: Mon super quiz"
                            required
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all"
                        />
                    </div>

                    {/* Input GitHub */}
                    <div>
                        <label className="block text-sm font-semibold text-ada-dark mb-2">
                            URL GitHub
                        </label>
                        <input
                            name="github_url"
                            placeholder="https://github.com/..."
                            required
                            type="url"
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all"
                        />
                    </div>

                    {/* Input Demo */}
                    <div>
                        <label className="block text-sm font-semibold text-ada-dark mb-2">
                            URL de la démo
                        </label>
                        <input
                            name="demo_url"
                            placeholder="https://..."
                            required
                            type="url"
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all"
                        />
                    </div>

                    {/* Select Promo */}
                    <div>
                        <label className="block text-sm font-semibold text-ada-dark mb-2">
                            Promotion
                        </label>
                        <select
                            name="promoId"
                            required
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all cursor-pointer"
                        >
                            <option value="">Sélectionner une promo</option>
                            {promos.map((promo) => (
                                <option key={promo.id} value={promo.id}>
                                    {promo.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Select Projet Ada */}
                    <div>
                        <label className="block text-sm font-semibold text-ada-dark mb-2">
                            Projet Ada
                        </label>
                        <select
                            name="adaProjectId"
                            required
                            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-ada-red focus:ring-2 focus:ring-ada-red/20 transition-all cursor-pointer"
                        >
                            <option value="">Sélectionner un projet</option>
                            {adaProjects.map((ada) => (
                                <option key={ada.id} value={ada.id}>
                                    {ada.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3 mt-8">
                        <button
                            type="submit"
                            className="flex-1 bg-ada-red hover:bg-ada-coral text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                        >
                            Envoyer 🚀
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-6 bg-gray-200 hover:bg-gray-300 text-ada-dark font-semibold py-3 rounded-lg transition-all"
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
