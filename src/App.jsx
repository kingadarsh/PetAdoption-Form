import { useState } from 'react'
import './App.css'
import Pet from "./assets/Pet.png"
import landingImg from "./assets/landingImg.jpeg"



const Header=()=>{
  return (
    <>
      <div className='MainDiv'>
        
          <div className='imageDiv'>
            <img id='logoPic' src="https://media.istockphoto.com/id/1005374612/vector/dog-paw-icon-logo.jpg?s=612x612&w=0&k=20&c=Rtyzn4JwMla0IMrbO-6s2GohBpYO9g-N8_B2CDI118E="alt="" />
          </div>

          <div className='webName'>
            <h1 id='headingName'>PawfectHome </h1>
          </div>

          <div className='rightDiv'>
            <img src={Pet} id='imgDiv' alt="" />
          </div>

        
      </div>
    </>
  )
}

// ----------------------------------------------------------------------------
const PetAdoptionForm=({setAddPets})=>{

const [formData,setformData]=useState({
  petname:"",
  petType:"",
  breed:"",
  yourName:"",
  email:"",
  phnNum:""
})

function onChangeHandler(event){
    const {name,value,checked,type}=event.target;

    setformData((prevData)=>{
      return {
        ...prevData,
        [name]:type==="checkbox"?checked:value
      }
    })
}

function petDataSubmit(event){
  event.preventDefault();
  setAddPets(prevData=>[...prevData,formData]);
  setformData({
    petname:"",
    petType:"",
    breed:"",
    yourName:"",
    email:"",
    phnNum:""
  })

}

// console.log(formData);

  return (
    <>
    <div className='FromDiv'>
       <form className='AdoptionForm' onSubmit={petDataSubmit}>  

        <label htmlFor="PetName">Pet Name</label>
        <input  
        id='PetName' 
        type="text" 
        name='petname'
        onChange={onChangeHandler}
        value={formData.petname}
        />

        <label htmlFor="PetType">Pet Type</label>
        <input 
         id='PetType' 
         type="text"
         name='petType'
         onChange={onChangeHandler}
         value={formData.petType}
         />

        <label htmlFor="breed">Breed</label>
        <input
        id='breed' 
        type="text"
        name='breed' 
        onChange={onChangeHandler}
        value={formData.breed}
        />

        <label htmlFor="yourName">Your Name</label>
        <input  
        id='yourName' 
        type="text" 
        name='yourName'
        onChange={onChangeHandler}
        value={formData.yourName}
        />

        <label htmlFor="email">Email</label>
        <input 
        id='email' 
        type="email"
        name='email'
        value={formData.email}
        onChange={onChangeHandler}
        />

        <label htmlFor="PhnNo">Phone Number</label>
        <input 
        id='PhnNo' 
        type="tel"
        name='phnNum'
        value={formData.phnNum}
        onChange={onChangeHandler}
        />

        <button id="setforadoptBtn">Submit</button>
      </form>
    </div>

    </>
  )
}


const  AdoptTable=({addpets})=>{



  console.log("This is a data from table component ")
  console.log(addpets)
  return (
    <>
      <div className="table-container">
          <table className="adoption-table">
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Your Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          <tbody>
            {
              addpets.map((pet,index)=>(
                <tr key={index}>
                <td>{pet.petname}</td>
                <td>{pet.petType}</td>
                <td>{pet.breed}</td>
                <td>{pet.yourName}</td>
                <td>{pet.email}</td>
                <td>{pet.phnNum}</td>
              </tr>                  
              ))
            }
        
          </tbody>  



          </table>

      </div>
    </>
  )
}

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
