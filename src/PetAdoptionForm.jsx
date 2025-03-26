import { useState } from 'react'

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
            maxLength={20}
            minLength={3}
            name='petname'
            onChange={onChangeHandler}
            value={formData.petname}
            />
    
            <label htmlFor="PetType">Pet Type</label>
            <input 
             id='PetType' 
             type="text"
             name='petType'
             maxLength={20}
             minLength={3}
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
            maxLength={25}
            minLength={3}
            />
    
            <label htmlFor="yourName">Your Name</label>
            <input  
            id='yourName' 
            type="text" 
            name='yourName'
            maxLength={30}
            minLength={3}
            onChange={onChangeHandler}
            value={formData.yourName}
            />
    
            <label htmlFor="email">Email</label>
            <input 
            id='email' 
            type="email"
            name='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}'
            value={formData.email}
            onChange={onChangeHandler}
            />
    
            <label htmlFor="PhnNo">Phone Number</label>
            <input 
            id='PhnNo' 
            type="tel"
            name='phnNum'
            value={formData.phnNum}
            pattern="[0-9]{10}"
            title='Enter a 10-digit phone number'
            onChange={onChangeHandler}
            />
    
            <button id="setforadoptBtn">Submit</button>
          </form>
        </div>
    
        </>
      )
    }



export default PetAdoptionForm;