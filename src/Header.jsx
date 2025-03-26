import Pet from "./assets/Pet.png"

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



export default Header;