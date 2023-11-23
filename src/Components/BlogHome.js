import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'
import PosterSlider from './PosterSlider'
import axios from 'axios';
import CompoLoader from './CompoLoader';
function BlogHome() {
  const [IsLoading, setIsLoading] = useState(false);
  const [bollyWood, setBollyWood] = useState();
  const [hollyWood, setHollyWood] = useState();
  const [technology, setTechnology] = useState();
  const [sports, setSports] = useState();
  const [fitness, setFitness] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://blogbackend-1c53.onrender.com/bollyWood").then((response) => {

      setBollyWood(response.data);
    });

    axios.get("https://blogbackend-1c53.onrender.com/hollyWood").then((response) => {
      setHollyWood(response.data);
    });

    axios.get("https://blogbackend-1c53.onrender.com/technology").then((response) => {
      setTechnology(response.data);
    });

    axios.get("https://blogbackend-1c53.onrender.com/sports").then((response) => {
      setSports(response.data);
    });

    axios.get("https://blogbackend-1c53.onrender.com/fitness").then((response) => {
      setFitness(response.data);
      setIsLoading(false);
    });

  }, []);
  return (
    <section className='HomeblogSection'>

      <div className="Hero-Section">
        <div className="poster poster-1">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00025234-ldmsvbjwpl-landscape.jpg" alt="poster" className='posterImage' />
        </div>
        <div className="poster poster-2">
          <img src='https://img.freepik.com/premium-vector/concept-machine-learning-innovation-technology-graphic-ai-head-with-programming-script_46706-1054.jpg' alt="poster" className='posterImage' />
        </div>
        <div className="poster poster-3">
          <img src="https://m.media-amazon.com/images/I/61RuvWDxo8L._AC_UF1000,1000_QL80_.jpg" alt="poster" className='posterImage' />
        </div>
      </div>
      <PosterSlider />

      {
        IsLoading ? <CompoLoader /> : <>

          <div className="latestBlogContainer">
            <h2 className='blogHeading'>The Latest</h2>
            <div className="latestBlogBox">

              {
                bollyWood?.filter((blog, index) => index === 0).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                hollyWood?.filter((blog, index) => index === 11).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                technology?.filter((blog, index) => index === 4).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                sports?.filter((blog, index) => index === 8).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>

          <section className='blogSection blogSection-2'>
            <div className="blogSection-Left blogSection-Left-2">
              <h2 className='blogHeading'>The Latest Blog</h2>

              {
                bollyWood?.filter((blog, index) => index === 1).map((blog, index) => {
                  return <React.Fragment key={blog.id + index}>
                    <hr className='hrLine' />
                    <div className="BlogBox">
                      <div className="PosterBox">
                        <img
                          src={blog.blogImg}
                          alt="BlogPoster"
                          className="imgBlogPoster"
                        />
                      </div>
                      <div className="BlogDescriptionBox">
                        <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                          {blog.blogTitle.slice(0, 40)} ...
                        </h2></Link>

                        <p className="blogDesc">
                          {blog.blogDesc.slice(0, 180)} ...
                        </p>
                        <p className="categoryWithDateox">
                          {blog.blogCategory} : {blog.blogDate}
                        </p>
                      </div>
                    </div>

                  </React.Fragment>
                })
              }

              {
                technology?.filter((blog, index) => index === 7).map((blog, index) => {
                  return <React.Fragment key={blog.id + index}>
                    <hr className='hrLine' />
                    <div className="BlogBox" >
                      <div className="PosterBox">
                        <img
                          src={blog.blogImg}
                          alt="BlogPoster"
                          className="imgBlogPoster"
                        />
                      </div>
                      <div className="BlogDescriptionBox">
                        <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                          {blog.blogTitle.slice(0, 40)} ...
                        </h2></Link>

                        <p className="blogDesc">
                          {blog.blogDesc.slice(0, 180)} ...
                        </p>
                        <p className="categoryWithDateox">
                          {blog.blogCategory} : {blog.blogDate}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                })
              }

              {
                hollyWood?.filter((blog, index) => index === 14).map((blog, index) => {
                  return <React.Fragment key={blog.id + index}>
                    <hr className='hrLine' />
                    <div className="BlogBox" >
                      <div className="PosterBox">
                        <img
                          src={blog.blogImg}
                          alt="BlogPoster"
                          className="imgBlogPoster"
                        />
                      </div>
                      <div className="BlogDescriptionBox">
                        <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                          {blog.blogTitle.slice(0, 40)} ...
                        </h2></Link>

                        <p className="blogDesc">
                          {blog.blogDesc.slice(0, 180)} ...
                        </p>
                        <p className="categoryWithDateox">
                          {blog.blogCategory} : {blog.blogDate}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                })
              }

              {
                sports?.filter((blog, index) => index === 11).map((blog, index) => {
                  return <React.Fragment key={blog.id + index}>
                    <hr className='hrLine' />
                    <div className="BlogBox" >
                      <div className="PosterBox">
                        <img
                          src={blog.blogImg}
                          alt="BlogPoster"
                          className="imgBlogPoster"
                        />
                      </div>
                      <div className="BlogDescriptionBox">
                        <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                          {blog.blogTitle.slice(0, 40)} ...
                        </h2></Link>

                        <p className="blogDesc">
                          {blog.blogDesc.slice(0, 180)} ...
                        </p>
                        <p className="categoryWithDateox">
                          {blog.blogCategory} : {blog.blogDate}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                })
              }

              {
                fitness?.filter((blog, index) => index === 12).map((blog, index) => {
                  return <React.Fragment key={blog.id + index}>
                    <hr className='hrLine' />
                    <div className="BlogBox" >
                      <div className="PosterBox">
                        <img
                          src={blog.blogImg}
                          alt="BlogPoster"
                          className="imgBlogPoster"
                        />
                      </div>
                      <div className="BlogDescriptionBox">
                        <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                          {blog.blogTitle.slice(0, 40)} ...
                        </h2></Link>

                        <p className="blogDesc">
                          {blog.blogDesc.slice(0, 180)} ...
                        </p>
                        <p className="categoryWithDateox">
                          {blog.blogCategory} : {blog.blogDate}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                })
              }
              <ImageSlider />

            </div>
            <div className="blogSection-Right blogSection-Right-2">
              <div className="advertisementBox advertisementBox-2"><img src="https://gumlet.assettype.com/afaqs/2023-10/1793fdfb-f50a-4b33-8c65-333b8edde7dd/MS_Dhoni_as_JioMart_s_brand_ambassador.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="AdvertiseMent" className='AdvertiseMentPoster' /></div>
              <h3 className='blogHeading'>Top Post</h3>
              {
                <React.Fragment>
                  {
                    bollyWood?.filter((blog, index) => index === 10).map((blog, index) => {
                      return <div className="Top_PostBox FirstTopPost_box" key={blog.id + index}>
                        <div className="FirstTopPost-PosterBox">
                          <img src={blog.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                        </div>
                        <div className=" FirstTopPost-TitleBox">
                          <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {blog.blogTitle.slice(0, 65)}</Link>
                          <p className="categoryWithDateox">
                            {blog.blogCategory}
                          </p>
                          <span className='postNumbering'>1</span>
                        </div>
                      </div>
                    })
                  }

                </React.Fragment>
              }

              {
                <React.Fragment>

                  {
                    hollyWood?.filter((blog, index) => index === 10).map((blog, index) => {
                      return <div className="Top_PostBox" key={blog.id + index}>
                        <div className="FirstTopPost-PosterBox">
                          <img src={blog.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                        </div>
                        <div className=" FirstTopPost-TitleBox">
                          <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {blog.blogTitle.slice(0, 65)}</Link>
                          <p className="categoryWithDateox">
                            {blog.blogCategory}
                          </p>
                          <span className='postNumbering'>2</span>
                        </div>
                      </div>
                    })
                  }

                </React.Fragment>
              }

              {
                <React.Fragment>

                  {
                    sports?.filter((blog, index) => index === 10).map((blog, index) => {
                      return <div className="Top_PostBox" key={blog.id + index}>
                        <div className="FirstTopPost-PosterBox">
                          <img src={blog.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                        </div>
                        <div className=" FirstTopPost-TitleBox">
                          <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {blog.blogTitle.slice(0, 65)}</Link>
                          <p className="categoryWithDateox">
                            {blog.blogCategory}
                          </p>
                          <span className='postNumbering'>3</span>
                        </div>
                      </div>
                    })
                  }

                </React.Fragment>
              }

              {
                <React.Fragment>

                  {
                    technology?.filter((blog, index) => index === 10).map((blog, index) => {
                      return <div className="Top_PostBox" key={blog.id + index}>
                        <div className="FirstTopPost-PosterBox">
                          <img src={blog.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                        </div>
                        <div className=" FirstTopPost-TitleBox">
                          <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {blog.blogTitle.slice(0, 65)}</Link>
                          <p className="categoryWithDateox">
                            {blog.blogCategory}
                          </p>
                          <span className='postNumbering'>4</span>
                        </div>
                      </div>
                    })
                  }

                </React.Fragment>
              }

              {
                <React.Fragment>

                  {
                    fitness?.filter((blog, index) => index === 10).map((blog, index) => {
                      return <div className="Top_PostBox" key={blog.id + index}>
                        <div className="FirstTopPost-PosterBox">
                          <img src={blog.blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                        </div>
                        <div className=" FirstTopPost-TitleBox">
                          <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="topPostTitle FirstTopPostTitle" >  {blog.blogTitle.slice(0, 65)}</Link>
                          <p className="categoryWithDateox">
                            {blog.blogCategory}
                          </p>
                          <span className='postNumbering'>5</span>
                        </div>
                      </div>
                    })
                  }

                </React.Fragment>
              }

            </div>
          </section>

          <div className="latestBlogContainer">
            <h2 className='blogHeading'>Latest Stories</h2>
            <div className="latestBlogBox">
              {
                bollyWood?.filter((blog, index) => index === 2).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                hollyWood?.filter((blog, index) => index === 3).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                technology?.filter((blog, index) => index === 5).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }

              {
                sports?.filter((blog, index) => index === 7).map((blog, index) => {
                  return <div className="latestBlog" key={blog.id + index}>
                    <img src={blog.blogImg} alt="Poster" className='latestBlogPoster' />
                    <div className="latestBlogDescBox">
                      <Link to={`/${blog.blogCategory}/${blog.BlogId}`} className="latestBlogTitle">
                        {blog.blogTitle.slice(0, 70)}...
                      </Link>
                      <p className="categoryWithDateox">
                        {blog.blogCategory} :  {blog.blogDate}
                      </p>
                    </div>
                  </div>
                })
              }
            </div>

          </div>
        </>
      }
    </section>
  )
}

export default BlogHome
