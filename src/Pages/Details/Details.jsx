import React from 'react'
import { useLoaderData, useParams } from 'react-router'

export const Details = () => {
  const {id} = useParams('details/:id')
  const cardDetails = useLoaderData();
  
  return (
    <div>
      {cardDetails.map((cardDetail)=>(
        <div>{cardDetail.name}</div>
      ))}
    </div>
  )
}
