// import React, { useState } from 'react'
// import AdopterData from './AdopterData';
// import { validation } from "../utils/validation"


// const PetAdoptionForm = () => {
//     const [formData, setFormData] = useState([]);
//     const [values, setValues] = useState({
//         petName: "",
//         petType: "Dog",
//         breed: "",
//         adopterName: "",
//         email: "",
//         phone: ""
//     });

//     const [showTable, setShowTable] = useState(false);

//     // ------------------------------------------------------------------------------------
//     const { petName, petType, breed, adopterName, email, phone } = values;
    
//     // ------------------------------------------------------------------------------------

    
//     const handleChange = (event) => {

//         const { name, value } = event.target;
//         setValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     }


//     const handleSubmit = () => {

//         if (!petName
//             || !breed || !adopterName
//             || !email || !phone) {
//             alert("Please fill out all fields");
//             return;
//         }

        
     

//         const data = { petName, petType, breed, adopterName, email, phone };
//         setFormData((prevData) => [...prevData, data]);
//         setShowTable(true);
//         setValues({
//             petName: "",
//             petType: "Dog",
//             breed: "",
//             adopterName: "",
//             email: "",
//             phone: ""
//         })
//     }

//     /**
//      * The handleGoBack function toggles the value of showTable.
//      */
//     const handleGoBack = () => setShowTable(!showTable);

//     if (!showTable) {
//         return (
//             <div className='form'>
//                 <div>
//                     <label htmlFor="petName">Pet Name</label>
//                     <input
//                         type="text"
//                         name="petName"
//                         placeholder="Pet Name"
//                         value={petName}
//                         onChange={handleChange}
//                     />
//                     <small>{errors.petName}</small>
//                 </div>
//                 <div>
//                     <label htmlFor="petType">Pet Type</label>
//                     <select value={petType} name="petType" onChange={handleChange}>
//                         <option value="Dog">Dog</option>
//                         <option value="Cat">Cat</option>
//                         <option value="Rabbit">Rabbit</option>
//                         <option value="Bird">Bird</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="breed">Breed</label>
//                     <input
//                         type="text"
//                         name="breed"
//                         placeholder="Breed"
//                         value={breed}
//                         onChange={handleChange}
//                     />
//                     <small>{errors.breed}</small>
//                 </div>
//                 <div>
//                     <label htmlFor='adopterName'>Your Name</label>
//                     <input type="text"
//                         name="adopterName"
//                         placeholder='Your Name'
//                         value={adopterName}
//                         onChange={handleChange} />
//                     <small>{errors.adopterName}</small>
//                 </div>
//                 <div>
//                     <label htmlFor='email'>
//                         Email
//                     </label>
//                     <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
//                     <small>{errors.email}</small>
//                 </div>
//                 <div>
//                     <label htmlFor='phone'>
//                         Phone
//                     </label>
//                     <input type="text"
//                         name="phone"
//                         placeholder='Phone'
//                         value={phone}
//                         onChange={handleChange} />
//                     <small>{errors.phone}</small>

//                 </div>
//                 <div>
//                     <button type="submit" onClick={handleSubmit}>
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         )
//     }
//     /* The line `return <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>` is
//     rendering the `AdopterData` component with the `formData` and `handleGoBack` props passed to it. */
//     return <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>
// }

// export default PetAdoptionForm