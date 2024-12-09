import { Contributor, ContributorRole } from '../../utils/data'
import { Select } from '../Select'

interface Props {
  role: ContributorRole
  label: string
  data: Contributor[]
  setSelectedContributors: any
}

export const ContributorSearchField = (props: Props) => {
  return (
    <div className="mb-6 bg-[#09090b] p-[20px]">
      <label className="block text-[#8c8c98] text-sm mb-2">{props.label}</label>
      <div className="relative flex items-start flex-col">
        <Select
          data={props.data}
          onSelectFilter={props.setSelectedContributors}
        />
      </div>
    </div>
  )
}
