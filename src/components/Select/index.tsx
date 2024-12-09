import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { MoreVertical, Search, X, Plus } from 'lucide-react'
import { Contributor } from '../../utils/data'
import { CreateModal } from '../ModalCreate'

interface Props {
  data: Contributor[]
  onSelectFilter: any
}

export const Select = ({ data, onSelectFilter }: Props) => {
  const [selectedItems, setSelectedItems] = useState<Contributor[]>([])
  const [inputValue, setInputValue] = useState('')
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [createModal, setCreateModal] = useState<{
    isOpen: boolean
    role: string
  }>({
    isOpen: false,
    role: ''
  })
  const [createdItems, setCreatedItems] = useState<Contributor[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  const roles = useMemo(() => {
    return [...new Set(data.map(item => item.contributorRole))]
  }, [data])

  const allItems = useMemo(() => {
    return [...data, ...createdItems]
  }, [data, createdItems])

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const isNotSelected = !selectedItems.some(
        selected => selected.contributorId === item.contributorId
      )
      const matchesSearch =
        item.contributorName
          ?.toLowerCase()
          .includes(inputValue.toLowerCase()) ||
        item.contributorAlias?.toLowerCase().includes(inputValue.toLowerCase())
      return isNotSelected && matchesSearch
    })
  }, [allItems, selectedItems, inputValue])

  const handleRemoveItem = useCallback((itemToRemove: Contributor) => {
    setSelectedItems(prev =>
      prev.filter(item => item.contributorId !== itemToRemove.contributorId)
    )
    setOpenMenuId(null)
    onSelectFilter((prev: any) => {
      return {
        ...prev,
        [itemToRemove.contributorRole]: [
          ...prev[itemToRemove.contributorRole].filter(
            (item: Contributor) =>
              item.contributorAlias == itemToRemove.contributorAlias
          )
        ]
      }
    })
  }, [])

  const handleCreateNew = (role: string) => {
    setCreateModal({ isOpen: true, role })
    setIsOpen(false)
  }

  const handleCreateSubmit = useCallback(
    ({ name, alias }: { name: string; alias: string }) => {
      const newId = Math.max(...allItems.map(item => item.contributorId)) + 1
      const newContributor: Contributor = {
        contributorId: newId,
        contributorName: name,
        contributorAlias: alias || null,
        contributorRole: createModal.role as any,
        contributorAvatarUrl: 'https://via.placeholder.com/150'
      }
      setCreatedItems(prev => [...prev, newContributor])
      setSelectedItems(prev => [...prev, newContributor])
    },
    [allItems, createModal]
  )

  const handleSelectItem = useCallback((item: Contributor) => {
    setSelectedItems(prev => [...prev, item])
    setInputValue('')
    setIsOpen(true)
    onSelectFilter((prev: any) => {
      return {
        ...prev,
        [item.contributorRole]: [
          ...prev[item.contributorRole],
          item.contributorAlias
        ]
      }
    })
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }

      if (
        openMenuId !== null &&
        !(event.target as Element).closest('.menu-container')
      ) {
        setOpenMenuId(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openMenuId])

  return (
    <div className="relative w-full max-w-md bg-[#09090b]">
      <div className="relative">
        <div className="mb-4 flex w-full gap-[10px] flex-wrap">
          {selectedItems.map(item => (
            <div
              key={item.contributorId}
              className="relative menu-container">
              <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2 w-[200px]">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full flex items-center justify-center">
                    {item.contributorAvatarUrl && item.contributorName ? (
                      <img
                        src={item.contributorAvatarUrl}
                        className="rounded-[30px] w-[24px] h-[24px]"
                        alt={item.contributorName}
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-200 text-[12px]">
                      {item.contributorName} (ID:{item.contributorId})
                    </span>
                    {item.contributorAlias && (
                      <span className="text-blue-400 text-[10px]">
                        Alias: {item.contributorAlias}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="text-gray-400 hover:text-gray-300"
                  onClick={() =>
                    setOpenMenuId(
                      openMenuId === item.contributorId
                        ? null
                        : item.contributorId
                    )
                  }>
                  <MoreVertical size={20} />
                </button>
              </div>

              {openMenuId === item.contributorId && (
                <div className="absolute right-0 mt-1 w-36 bg-gray-800 rounded-md shadow-lg z-20">
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 rounded-md">
                    <X
                      size={16}
                      className="mr-2"
                    />
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search
            className="absolute left-3 text-gray-400"
            size={18}
          />
          <input
            ref={inputRef}
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full bg-[#09090b] py-2 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200"
            placeholder="Search contributors..."
          />
        </div>
      </div>

      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-[#09090b] border rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredItems.map(item => (
            <li
              key={item.contributorId}
              onClick={() => handleSelectItem(item)}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
              {item.contributorAvatarUrl && item.contributorName ? (
                <img
                  src={item.contributorAvatarUrl}
                  alt={item.contributorName}
                  className="w-8 h-8 rounded-full mr-3"
                />
              ) : null}
              <div className="flex flex-col">
                <span className="font-medium text-gray-300">
                  {item.contributorName}
                </span>
                <span className="text-sm text-gray-400">
                  {item.contributorRole}
                </span>
              </div>
            </li>
          ))}

          {(filteredItems.length > 0 || roles.length > 0) && (
            <li className="border-t border-gray-700 my-2" />
          )}

          {roles.map(role => (
            <li
              key={`create-${role}`}
              onClick={() => handleCreateNew(role)}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700 text-gray-300">
              <Plus
                size={16}
                className="mr-2"
              />
              Create new {role.toLowerCase()}
            </li>
          ))}

          {!filteredItems.length && !roles.length && (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}

      <CreateModal
        isOpen={createModal.isOpen}
        onClose={() => setCreateModal({ isOpen: false, role: '' })}
        onSubmit={handleCreateSubmit}
        role={createModal.role}
      />
    </div>
  )
}

export default Select
