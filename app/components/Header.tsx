// components/Header.tsx
import ProjectDialog from './ProjectDialog'

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Adaverse</h1>
      <ProjectDialog />
    </header>
  )
}