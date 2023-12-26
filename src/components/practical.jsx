const practical = ({data,setData}) => {
  return (
    <div >
      <h2>Practical Experience</h2>

      <label htmlFor="companyName">company Name: </label>
      <input type="text" id="companyName" name="companyName" value={data.companyName}
      onChange={(e) => setData({...data,companyName:e.target.value})}
      /> 

      <label htmlFor="position"> Position: </label>
      <input type="text" id="position" name="position" value={data.position}
      onChange={(e) => setData({...data,position:e.target.value})}
      /> 

      <label htmlFor="companyFrom"> From: </label>
      <input type="text" id="companyFrom" name="companyFrom" value={data.companyFrom}
      onChange={(e) => setData({...data,companyFrom:e.target.value})}
      /> 
      
      <label htmlFor="companyTo"> To: </label>
      <input type="text" id="companyTo" name="companyTo" value={data.companyTo}
      onChange={(e) => setData({...data,companyTo:e.target.value})}
      />
      </div>
  )
}
export default practical