const button = ({value,setButtonVal}) => {
  return (
    <input type="submit" value={value} 
    onClick={() => setButtonVal(value)}
    />
  )
}

export default button