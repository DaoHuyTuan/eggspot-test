import { X } from 'lucide-react'
import { useState } from 'react'

interface CreateModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; alias: string }) => void
  role: string
}

export const CreateModal = ({
  isOpen,
  onClose,
  onSubmit,
  role
}: CreateModalProps) => {
  const [name, setName] = useState('')
  const [alias, setAlias] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, alias })
    setName('')
    setAlias('')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="bg-gray-800 p-4 rounded-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-200">
            Create new {role}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300">
            <X size={20} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={alias}
              onChange={e => setAlias(e.target.value)}
              placeholder="Alias (optional)"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}
