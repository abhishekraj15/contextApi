import React from 'react'
import Spinner from './Spinner'

const Blogs = ({posts,loading}) => {
  return (
    <div>
      {
        loading ? (<Spinner></Spinner>) :
         (posts.map( (post) => {
            return <div>
                <p>{post.title}</p>
                <p>
                    By <span>{post.author}</span> or <span>{post.category}</span>
                </p>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <div>
                    {
                        post.tags.map( (tag) => {
                            return <span>{`#${tag}`}</span>
                        })
                    }
                </div>
            </div>
         }))
      }
    </div>
  )
}

export default Blogs
