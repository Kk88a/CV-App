const education = ({data,setData}) => {
  return (
    <div >
      <h2>Educational Experience</h2>

      <label htmlFor="SchoolName">School Name: </label>
      <input type="text" id="SchoolName" name="SchoolName" value={data.SchoolName}
      onChange={(e) => setData({...data,SchoolName:e.target.value})}
      /> 

      <label htmlFor="title"> Title of Study: </label>
      <input type="text" id="title" name="title" value={data.title}
      onChange={(e) => setData({...data,title:e.target.value})}
      /> 

      <label htmlFor="From"> From: </label>
      <input type="text" id="from" name="from" value={data.from}
      onChange={(e) => setData({...data,from:e.target.value})}
      /> 
      
      <label htmlFor="to"> To: </label>
      <input type="text" id="to" name="to" value={data.to}
      onChange={(e) => setData({...data,to:e.target.value})}
      />
      </div>
  )
}
export default education