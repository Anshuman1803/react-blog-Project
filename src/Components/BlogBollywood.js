import React from 'react'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'

function BlogBollywood() {
  let BollywoodData = useContext(BlogData);
  let blogNumbering = 1;

  let getData = (data, index) => {
    if (index < 6) {
      return <React.Fragment key={data.BlogId}>

        <div className="BlogBox">
          <div className="PosterBox">
            <img
              src={data.blogImg}
              alt="BlogPoster"
              className="imgBlogPoster"
            />
          </div>
          <div className="BlogDescriptionBox">
            <h2 className="blogTitle">
              {data.blogTitle.slice(0, 65)} ...
            </h2>
            <p className="blogDesc">
              {data.blogDesc.slice(0, 180)} ...
            </p>
          </div>
        </div>
        <hr className='hrLine' />
      </React.Fragment>
    }


  }

  let getTopPost = (data, index) => {
    if (index === 6) {
      return <React.Fragment key={data.BlogId}>

        <div className="Top_PostBox FirstTopPost_box">
          <div className="FirstTopPost-PosterBox">
            <img src={data.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
          </div>
          <div className=" FirstTopPost-TitleBox">
            <p className="topPostTitle FirstTopPostTitle"> {data.blogTitle.slice(0, 65)} <span className='postNumbering'>{blogNumbering}</span></p>
          </div>
        </div>

      </React.Fragment>
    }
    if (index > 6) {
      return <React.Fragment key={data.BlogId}>

        <div className="Top_PostBox">
          <div className="TopPost-PosterBox">
            <img src={data.blogImg} alt="TopPostPoster" className='TopPostPoster' />
          </div>
          <div className="TopPost-TitleBox">
            <p className="topPostTitle"> {data.blogTitle.slice(0, 65)} <span className='postNumbering'>{++blogNumbering}</span></p>
          </div>
        </div>

      </React.Fragment>
    }
  }


  return (
    <section className='blogSection bollyWoodSection'>
      <div className="blogSection-Left">
        <h2 className='blogHeading'>Bollywood</h2>
        {
          BollywoodData.bollyWoodBlog.map(getData)
        }

      </div>
      <div className="blogSection-Right">
        <h3 className='blogHeading'>Top Post</h3>
        {
          BollywoodData.bollyWoodBlog.map(getTopPost)
        }
        <div className="advertisementBox"><img src="https://i.pinimg.com/originals/bc/43/e6/bc43e61877c6395a820553b094469909.jpg" alt="AdvertiseMent" className='AdvertiseMentPoster' /></div>
      </div>
    </section>
  )
}

export default BlogBollywood
