import React from 'react'
import { Link } from 'react-router-dom';
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'
function BlogSports() {
  let SportsData = useContext(BlogData);
  let blogNumbering = 1;

  let getData = (data, index) => {
    if (index < 8) {
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
          <Link to={`/${data.blogCategory}/${data.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
              {data.blogTitle.slice(0, 65)} ...
            </h2></Link>
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
    if (index === 8) {
      return <React.Fragment key={data.BlogId}>

        <div className="Top_PostBox FirstTopPost_box">
          <div className="FirstTopPost-PosterBox">
            <img src={data.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
          </div>
          <div className=" FirstTopPost-TitleBox">
          <Link to={`/${data.blogCategory}/${data.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {data.blogTitle.slice(0, 65)}</Link>
          <span className='postNumbering'>{blogNumbering}</span>
          </div>
        </div>

      </React.Fragment>
    }
    if (index > 8) {
      return <React.Fragment key={data.BlogId}>

        <div className="Top_PostBox">
          <div className="TopPost-PosterBox">
            <img src={data.blogImg} alt="TopPostPoster" className='TopPostPoster' />
          </div>
          <div className="TopPost-TitleBox">
          <Link to={`/${data.blogCategory}/${data.BlogId}`} className="topPostTitle" >  {data.blogTitle.slice(0, 65)}</Link>
            <span className='postNumbering'>{++blogNumbering}</span>
          </div>
        </div>

      </React.Fragment>
    }
  }


  return (
    <section className='blogSection'>
      <div className="blogSection-Left">
        <h2 className='blogHeading'>Sports</h2>
        {
          SportsData.sportBlog.map(getData)
        }

      </div>
      <div className="blogSection-Right">
        <h3 className='blogHeading'>Top Post</h3>
        {
          SportsData.sportBlog.map(getTopPost)
        }
        <div className="advertisementBox"><img src="https://www.exchange4media.com/news-photo/1520242401_g7vXNC_MSDPressReleaseImage_03_(1).jpg" alt="AdvertiseMent" className='AdvertiseMentPoster' /></div>
      </div>
    </section>
  )
}

export default BlogSports
