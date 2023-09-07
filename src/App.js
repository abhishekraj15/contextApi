import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'


const App = () => {

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  const [page,setPage] = useState(1)
  const [posts,setPost] = useState([])
  const [totalPage, setTotalPage] = useState(null)
  const [loading, setloading] = useState(false)

  async function fetchPost(page = 1) {
    setloading(true)
    let url = `${baseUrl}?page=${page}`
    try{
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setPage(data.page)
      setTotalPage(data.totalPage)
      setPost(data.posts)
    }
    catch(error)
    {
      console.log("error hai...")
    }
  }

  // useEffect( () => {
  //   fetchPost()
  // },[])

  function handleChange(page){
    setPage(page)
    fetchPost(page)
  }

  return (
    <div>
      <Header/>
      <Blogs posts={posts} loading={loading} />
      <Pagination page={page} totalPages={totalPage} handleChange={handleChange} />
    </div>
  )
}

export default App
