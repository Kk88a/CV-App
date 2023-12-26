const general = ({data,setData}) => {
  return (
    <div >
      <h2>General Information</h2>

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" value={data.name}
      onChange={(e) => setData({...data,name:e.target.value})}
      /> 

      <label htmlFor="phone"> Phone: </label>
      <input type="text" id="phone" name="phone" value={data.phone}
      onChange={(e) => setData({...data,phone:e.target.value})}
      /> 

      <label htmlFor="mail"> Mail: </label>
      <input type="text" id="mail" name="mail" value={data.mail}
      onChange={(e) => setData({...data,mail:e.target.value})}
      /> 
      </div>
  )
}
export default general