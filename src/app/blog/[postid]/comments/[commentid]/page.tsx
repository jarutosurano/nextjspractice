import React from 'react'

const page = ({params}:{
    params: {
        postid: string
        commentid: string
    }
}) => {
  return (
    <div>
        <h1>Comment {params.commentid} for blog post {params.postid}</h1>
    </div>
  )
}

export default page