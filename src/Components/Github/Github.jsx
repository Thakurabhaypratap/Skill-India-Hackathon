import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div>
        Github Followers is : {data.followers}
    </div>
  )
}

export default Github;


export const  LoaderPr = async () =>{
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
  return response.json() 
}