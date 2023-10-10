import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'

function ReadBlogCompo() {
  let paramData = useParams();
  let allBlogs = useContext(BlogData);

  let getClickedData = (data) => {
    if (data.BlogId === Number(paramData.ID)) {
      console.log(data)
      return <p key={data.BlogId}>Data SHow HO jauega {data.BlogId}</p>
    }

  }
  return (
    <div>
      {
        allBlogs[paramData.Blog].map(getClickedData)
      }
    </div>
  )
}

export default ReadBlogCompo
