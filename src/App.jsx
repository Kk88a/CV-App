import { useState } from 'react'
import General from './components/general'
import Education from './components/education'
import Practical from './components/practical'
import Show from './components/show'
import Button from './components/button'
import './App.css'

function App() {
  const [buttonVal,setButtonVal]=useState('edit');
  const [data,setData]=useState(
  {
    name:'',
    phone:'',
    mail:'',
    SchoolName:'',
    title:'',
    from:'',
    to:'',
    companyName:'',
    position:'',
    companyFrom:'',
    companyTo:'',
  });

  if(buttonVal==='edit'){
  return (
    <section>
      <h1>CV Application</h1>
      <General data={data} setData={setData}/>
      <Education data={data} setData={setData}/>
      <Practical data={data} setData={setData}/>
      <Button value={'submit'} setButtonVal={setButtonVal}/>
    </section>
  )}
  else {
    return (
      <section >
        <h1>CV Application</h1>
        <Show data={data} />
        <Button value={'edit'} setButtonVal={setButtonVal}/>
      </section>
    )
  }
}

export default App
