import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SuperHerosPage = () => {
    const [loading, setLoading] = useState(true)
    const [superHeros, setSuperHeros] = useState([])

    const getData = async ()=> {
        return new Promise((resolve) => setTimeout(() => resolve(axios.get('https://jsonplaceholder.typicode.com/posts')), 2000))
            .then(data => {
                setSuperHeros(data)
                setLoading(false)
            }
        )
    }

    useEffect(()=>{
        getData()
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <>
        <h1>SuperHerosPage</h1>
        {
            superHeros.data?.map((superHero)=>(
                <div key={superHero.id}>
                    <br/>
                    <h3>{superHero.id}. {superHero.title}</h3>
                </div>
            ))
        }
    </>
  )
}

export default SuperHerosPage