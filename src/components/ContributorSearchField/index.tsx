import { Search } from 'lucide-react'
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
        {/* <input
          type="text"
          placeholder="Typing name or id of artist here"
          className="w-full bg-[#09090b] text-gray-300 border border-gray-700 rounded p-2 pl-8 focus:outline-none focus:border-blue-500"
        /> */}
        <Select
          data={props.data}
          onSelectFilter={props.setSelectedContributors}
        />
        {/* <div className="absolute left-2 top-[13px] w-[16px] h-[16px]">
          <Search
            className="text-gray-500"
            size={16}
          />
        </div> */}
        {/* {props.selectedContributors[props.role].length === 0 && (
          <div className="text-gray-500 text-sm pt-[10px] flex flex-start w-full">
            No {props.label.toLowerCase()} selected
          </div>
        )} */}
      </div>
    </div>
  )
}
