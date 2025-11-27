export default function SelectPromo({ promos }: { promos: { id: number; name: string }[] }) {
    return (
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

                            
    )
}