import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'

function ReadBlogCompo() {
  let paramData = useParams();
  let allBlogs = useContext(BlogData);

  let getClickedData = (data) => {
    if (data.BlogId === Number(paramData.ID)) {
      return <article className="ReadBlog" key={data.BlogId}>
        <h2 className="ReadBlog-Title">{data.blogTitle}</h2>
        <div className="PublisehrBox">
          <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="ProfilePhoto" className='profileImg' />

          <div className="NameBox">
            <span className="PublisherName">Anshuman</span>
            <span className='BlogTime'>1 Day Ago</span>
          </div>
          <div className="socialSites">
            <i className="fa-brands fa-facebook socialIcons"></i>
            <i className="fa-brands fa-instagram socialIcons"></i>
            <i className="fa-brands fa-twitter socialIcons"></i>
            <i className="fa-brands fa-youtube socialIcons"></i>
          </div>
        </div>
        <img src={data.blogImg} alt="BlogPoster" className='ReadBlogPoster' />
        <p className="readBlog-Desc">{data.blogDesc}</p>
        <div className="PublisehrBox">
          <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="ProfilePhoto" className='profileImg' />

          <div className="NameBox">
            <span className="PublisherName">Anshuman</span>
            <span className='BlogTime'>1 Day Ago</span>
          </div>
        </div>
      </article>
    }

  }

  let getMoreBlogsData = (data, index) => {
    if (data.BlogId !== Number(paramData.ID) && index < 4) {
      return <div className="MoreBlogs">
        <img src={data.blogImg} alt="blogPoster" className='moreBolgsPosters' />
        <Link to={`/${data.blogCategory}/${data.BlogId}`} className="blogTitle " >   <h2 className="blogTitle moreBolgsTitle">
          {data.blogTitle.slice(0, 58)} ...
        </h2></Link>
        <div className="PublisehrBox PublisehrBox2">
          <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="ProfilePhoto" className='profileImg moreBlogProfile' />

          <div className="NameBox">
            <span className="PublisherName">Anshuman</span>
            <span className='BlogTime'>1 Day Ago</span>
          </div>
        </div>
      </div>
    }

  }
  return (
    <section className="ReadBlog-Section">
      <p className="clapCount fixedIcon"><i className="fa-solid fa-hands-clapping"></i> <span>{"12.8k"}</span></p>
      <p className="Share fixedIcon"><i className="fa-solid fa-share-nodes"></i> <span>Share This Blog</span></p>
      {
        allBlogs[paramData.Blog].map(getClickedData)
      }
      <div className="moreBlogContainer">
        <h3 className='moreBlogHeading'>More From The Siren</h3>

        <div className="moreBlogBox">

          {
            allBlogs[paramData.Blog].map(getMoreBlogsData)
          }
        </div>


      </div>
    </section>
  )
}

export default ReadBlogCompo
