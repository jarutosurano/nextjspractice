import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog List Page"
}

const page = () => {
  return (
    <div>
        <h1>Blog Post 1</h1>
        <h1>Blog Post 2</h1>
        <h1>Blog Post 3</h1>
        <h1>Blog Post 4</h1>
        <h1>Blog Post 5</h1>
        <h1>Blog Post 6</h1>
        <h1>Blog Post 7</h1>
        <h1>Blog Post 8</h1>
    </div>
  )
}

export default page