const show = ({data}) => {
  return (
    <div className="box">
        <div >
        <h2>General Information</h2>
          <p> <b>Name:</b>  {data.name}</p> 
          <p> <b>Phone:</b>  {data.phone}</p> 
          <p> <b>Mail:</b>  {data.mail}</p>
        </div>

        <div >
          <h2>Educational Experience</h2>
          <p><b>School Name:</b> {data.SchoolName}</p> 
          <p><b>Title of Study:</b> {data.title}</p> 
          <p><b>From:</b> {data.from}</p> 
          <p><b>To:</b> {data.to}</p>
        </div>

        <div >
        <h2>Educational Experience</h2>
        
          <p><b>Company Name:</b> {data.companyName}</p> 
          <p><b>Position:</b> {data.position}</p> 
          <p><b>From:</b> {data.companyFrom}</p> 
          <p><b>To:</b> {data.companyTo}</p>
        </div>
        </div>
  )
}
export default show