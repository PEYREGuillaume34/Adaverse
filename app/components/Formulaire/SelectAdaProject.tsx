export default function SelectAdaProject({ adaProjects }: { adaProjects: { id: number; name: string }[] }) {
    return (
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
    )
}