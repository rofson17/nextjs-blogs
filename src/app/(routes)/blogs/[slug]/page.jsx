"use client"
import React from 'react'

const SingleBlog = ({ params }) => {
    const { slug } = React.use(params)


    return (
        <div>SingleBlog {slug}</div>
    )
}

export default SingleBlog