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


  export default AdoptTable;