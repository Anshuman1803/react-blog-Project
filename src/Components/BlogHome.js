import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'
function BlogHome() {
  let AllBlogData = useContext(BlogData);

  console.log(AllBlogData)
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

      <div className="latestBlogContainer">
        <h2 className='blogHeading'>The Latest</h2>
        <div className="latestBlogBox">

          <div className="latestBlog">
            <img src={AllBlogData.bollyWood[0].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.bollyWood[0].blogCategory}/${AllBlogData.bollyWood[0].BlogId}`} className="latestBlogTitle">
                {AllBlogData.bollyWood[0].blogTitle.slice(0,70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.bollyWood[0].blogCategory} :  {AllBlogData.bollyWood[0].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.hollyWood[11].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.hollyWood[11].blogCategory}/${AllBlogData.hollyWood[11].BlogId}`} className="latestBlogTitle">
                {AllBlogData.hollyWood[11].blogTitle.slice(0,70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.hollyWood[11].blogCategory} :  {AllBlogData.hollyWood[11].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.technology[4].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.technology[4].blogCategory}/${AllBlogData.technology[4].BlogId}`} className="latestBlogTitle">
                {AllBlogData.technology[4].blogTitle.slice(0,70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.technology[4].blogCategory} :  {AllBlogData.technology[4].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.sports[8].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.sports[8].blogCategory}/${AllBlogData.sports[8].BlogId}`} className="latestBlogTitle">
                {AllBlogData.sports[8].blogTitle.slice(0,70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.sports[8].blogCategory} :  {AllBlogData.sports[8].blogDate}
              </p>
            </div>
          </div>

        </div>
      </div>



    </section>
  )
}

export default BlogHome
