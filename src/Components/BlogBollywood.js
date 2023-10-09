import React from 'react'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'

function BlogBollywood() {
  let BollywoodData = useContext(BlogData);

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
              {data.blogTitle}
            </h2>
            <p className="blogDesc">
              {data.blogDesc.slice(0, 180)}...
            </p>
          </div>
        </div>
        <hr className='hrLine' />
      </React.Fragment>
    }


  }
  return (
    <section className='blogSection bollyWoodSection'>
      <div className="blogSection-Left">
        {
          BollywoodData.bollyWoodBlog.map(getData)
        }

      </div>
      <div className="blogSection-Right"></div>
    </section>
  )
}

export default BlogBollywood
