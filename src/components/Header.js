
import { useState } from 'react'



const Header = () => {
 

const [firstName, setFirstName] = useState('')
const [lastName, setLastName ] = useState('')
const [people, setPeople] = useState([])

const onFormSubmit = (e) => {
  e.preventDefault()
  //console.log(firstName, email)
  if(firstName && lastName) {
    const person = {id: new Date().getTime().toString(),firstName:firstName, lastName:lastName}
    console.log(person)
    setPeople((people)=>{
      return [...people, person]
    })
    setFirstName('')
    setLastName('')
  } else {
    alert('Please insert valid data!')
  }
 
} 


  return (

    <section className='header'>
      
      <h1>Add Person</h1>

      <form onSubmit={onFormSubmit}>
          
          <input 
                type="text"
                placeholder='First Name'
                className='input'
                id='firstName'
                value={firstName}
                required
                onChange={(e)=>setFirstName(e.target.value)}
               />

          <input 
                type="text"
                placeholder='Last Name'
                className='input'
                value={lastName}
                id='lastName'
                required
                onChange={(e)=>setLastName(e.target.value)}
               />      

          <button 
                className='btn'
                type='submit' > Add </button>      
      </form>
      <br /><br />
       <ul className='output'>
            {people.map((person, index) => {
              const {id, firstName, lastName } = person
              return (
                <div className='todo-list' key={id}>
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                  <button className='delete'>Delete</button>
                </div>
                
              )
            })}

       
       </ul>

    </section>
  )
  
};

export default Header;
