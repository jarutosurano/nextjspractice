import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog List Page"
}

const page = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
        <h1><Link href='/blog/1'>Blog Post 1</Link></h1>
        <h1><Link href='/blog/2'>Blog Post 2</Link></h1>
        <h1><Link href='/blog/3' replace>Blog Post 3</Link></h1>
        <h1>Blog Post 4</h1>
        <h1>Blog Post 5</h1>
        <h1>Blog Post 6</h1>
        <h1>Blog Post 7</h1>
        <h1>Blog Post 8</h1>
    </div>
  )
}

export default page