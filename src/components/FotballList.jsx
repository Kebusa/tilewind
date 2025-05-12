import React, { useState } from 'react'
import { useEffect } from 'react'

function FotballList() {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [lists, setLists] = useState([])

    // useEffect(() => {

       

    // }, [])
const handleSubmit = () =>{
    if(name.trim() !== '' || age.trim() !== "" ){
        setLists(...lists, {nick: name}, {old: age})
       setName('')
       setAge('') 

    }
 
    
} 
    
  return (<>
        <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}/>
        <button type='submit' onClick={handleSubmit} > Add  </button>
        </div>

        <div>
            {lists.map((item) => (
                <div key={item}>
                    <ul>
                        <li>
                            Name: {item.nick}
                        </li>
                        <li>
                            Age: {item.old}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
  
  </>)
}

export default FotballList;