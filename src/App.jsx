import { useState } from 'react'
import './App.css'
import Header from './Header'
import landingImg from "./assets/landingImg.jpeg"
import PetAdoptionForm from './PetAdoptionForm'
import AdoptTable from './AdoptTable'

const Body=()=>{
  const [addpets,setAddPets]=useState([]);


  const [show,setShow]=useState(false);
  const [adopt,setAdopt]=useState(false);
  function giveAdoption(){
    setShow((show)=>!show);
  }

  function adoptbtn(){
    setAdopt((adopt)=>!adopt);
  }
  return (
    <>
      <div className='bodyDiv'>

        <div className='bodyImg'>
            <img id='dogImg' src={landingImg} alt="" />
        </div>
        

        <div className='adoptionBtn'>
          <button onClick={giveAdoption} id='adoptionBtn' style={show ? {backgroundColor:"#c0392b"} :{}}>{ show? "Close Form": "Find a New Home for Paw"}</button>

          <button onClick={adoptbtn} id='btnDiv' style={adopt?{backgroundColor:"#c0392b"}:{}} >{adopt?"Close ❌":"Adopt Paw"}</button>
        </div>

        {
          show && <PetAdoptionForm setAddPets={setAddPets}/>
        }

        {
          adopt && <AdoptTable addpets={addpets}/>
        }


      </div>
    </>
  )
}


function App() {
  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
