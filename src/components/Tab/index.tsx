interface Props {
  active: boolean
  label: string
  onChangeTab: React.Dispatch<React.SetStateAction<string>>
}
export const Tab = (props: Props) => {
  return (
    <button
      className={`bg-[#09090b] text-gray-300 border-[1px] rounded p-2 border ${
        props.active ? 'border-tabActive' : 'border-[#262629]'
      }`}
      onClick={() => props.onChangeTab(props.label.toLowerCase())}>
      {props.label}
    </button>
  )
}
