import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const RQSuperHerosPage = () => {

  const fetchData = () => {
    return new Promise((resolve) => setTimeout(() => resolve(axios.get('https://jsonplaceholder.typicode.com/posts')), 2000))
  }

  const { data, isLoading, isError, error } = useQuery('super_heros', fetchData)

  if (isLoading) {
    return <h2>Loading...</h2>
  } 
  
  if(isError) {
    return <h2>Error : {error.message}</h2>
  }

  return (
    <>
    <h1>RQSuperHerosPage</h1>
    {
      data.data?.map((superHero)=>(
        <div key={superHero.id}>
          <br/>
          <h3>{superHero.id}. {superHero.title}</h3>
        </div>
      ))
    }
    </>
  )
}

export default RQSuperHerosPage