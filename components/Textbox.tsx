const Textbox = ({...rest}) => {
  return <label>
      <input {...rest} className="pl-[10px] h-[40px] !text-gray-800 border border-gray-400 w-full rounded-[5px]"/>
  </label>
}

export default Textbox