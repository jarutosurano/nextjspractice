import React from 'react'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const page = ({params}:{
    params: {
        postid: string
        commentid: string
    }
}) => {

  const random = getRandomInt(2);
  console.log('Random value:', random);
  if(random === 1) {
    throw new Error('There is an error loading your comment.');
  }

  return (
    <div>
        <h1>Comment {params.commentid} for blog post {params.postid}</h1>
    </div>
  )
}

export default page