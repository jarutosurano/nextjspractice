import React from 'react'

const page = ({params}:{
    params:{postid: string}
}) => {
  return (
    <div>
        <h1>Details Page{params.postid}</h1>
    </div>
  )
}

export default page