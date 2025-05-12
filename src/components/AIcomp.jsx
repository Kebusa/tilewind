import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../index.css"

function AIcomp() {
    const [data, setData] = useState([])

    const fetchData = async () =>{
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        setData(response.data)
    }
    useEffect(() => {
        fetchData()
    },[])

  return (<>
        <div className='flex gap-5'>
            {data.map((item) =>(
                <div className='flex-block border-2 pl-20 p-5' key={item}>
                    <h1>Name: {item.name}</h1>
                    <h2>UserName: {item.username}</h2>
                    <h2>Email: {item.email}</h2>
                    <p>Street: {item.address.street}</p>
                    <p>Suit: {item.address.suit}</p>
                    <p>ZCode: {item.address.zipcode}</p>
                    <p>GEO: {item.address.geo.lat},{item.address.geo.lng}</p>
                    <b> City:{item.address.city}</b>
                    <h4>Number: {item.phone}</h4>
                    <p>webSite: {item.website}</p>
                    <p>company: {item.company.name}, {item.company.bs},{item.company.catchPhrase}</p>
                </div>
            ))}
        </div>
  </>)
}

export default AIcomp