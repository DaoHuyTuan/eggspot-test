import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { Contributor } from '../../utils/data'

interface Props {
  setParseData: Dispatch<SetStateAction<Contributor[]>>
  data: Contributor[]
}

export const ContributorList = (props: Props) => {
  const [contributors, setContributors] = useState(props.data)
  const [editingIndex, setEditingIndex] = useState(-1)
  // @ts-ignore
  const [selectedItem, setSelectedItem] = useState<Contributor>()
  const [editForm, setEditForm] = useState({
    contributorName: '',
    contributorRole: ''
  })

  const handleContributorEdit = (index: number, selectedItem: Contributor) => {
    setEditingIndex(index)
    setEditForm({
      contributorName: contributors[index].contributorName || '',
      contributorRole: contributors[index].contributorRole
    })
    setSelectedItem(selectedItem)
  }

  const handleContributorSave = useCallback(() => {
    const newContributors: Contributor[] = [...contributors]
    newContributors[editingIndex] = {
      ...newContributors[editingIndex],
      contributorName: editForm.contributorName,
      contributorRole: editForm.contributorRole || ''
    }
    setContributors(newContributors)
    setEditingIndex(-1)
    props.setParseData(newContributors)
  }, [editingIndex, editForm, contributors])

  const handleContributorCancel = () => {
    setEditingIndex(-1)
  }

  const handleContributorDelete = useCallback(() => {
    const newContributors = contributors.filter(
      el => el.contributorId !== selectedItem?.contributorId
    )
    debugger
    props.setParseData(newContributors)
    setEditingIndex(-1)
  }, [contributors, selectedItem])

  useEffect(() => {
    setContributors(props.data)
  }, [props.data])

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contributor Table
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                ID
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Alias
              </th>

              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Role
              </th>
              <th className="py-3 px-4 text-right font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((contributor, index) => (
              <tr
                key={contributor.contributorId}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-gray-800">
                  {contributor.contributorId}
                </td>
                <td className="py-3 px-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editForm.contributorName}
                      onChange={e =>
                        setEditForm({
                          ...editForm,
                          contributorName: e.target.value
                        })
                      }
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <span className="text-gray-800">
                      {contributor.contributorName}
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-gray-800">
                  {contributor.contributorAlias}
                </td>

                <td className="py-3 px-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editForm.contributorRole}
                      onChange={e =>
                        setEditForm({
                          ...editForm,
                          contributorRole: e.target.value
                        })
                      }
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <span className="text-gray-800">
                      {contributor.contributorRole}
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-right">
                  {editingIndex === index ? (
                    <div className="space-x-2">
                      <button
                        onClick={handleContributorCancel}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Cancel
                      </button>
                      <button
                        onClick={handleContributorSave}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Save
                      </button>
                      <button
                        onClick={handleContributorDelete}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleContributorEdit(index, contributor)}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
