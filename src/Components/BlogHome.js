import React from 'react'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'
import { BlogData } from '../Data/BlogDataBase'
import { useContext } from 'react'
function BlogHome() {
  let AllBlogData = useContext(BlogData);
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
                {AllBlogData.bollyWood[0].blogTitle.slice(0, 70)}...
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
                {AllBlogData.hollyWood[11].blogTitle.slice(0, 70)}...
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
                {AllBlogData.technology[4].blogTitle.slice(0, 70)}...
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
                {AllBlogData.sports[8].blogTitle.slice(0, 70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.sports[8].blogCategory} :  {AllBlogData.sports[8].blogDate}
              </p>
            </div>
          </div>

        </div>
      </div>

      <section className='blogSection blogSection-2'>
        <div className="blogSection-Left blogSection-Left-2">
          <h2 className='blogHeading'>The Latest Blog</h2>

          {
            <React.Fragment>
              <hr className='hrLine' />

              <div className="BlogBox">
                <div className="PosterBox">
                  <img
                    src={AllBlogData.bollyWood[11].blogImg}
                    alt="BlogPoster"
                    className="imgBlogPoster"
                  />
                </div>
                <div className="BlogDescriptionBox">
                  <Link to={`/${AllBlogData.bollyWood[11].blogCategory}/${AllBlogData.bollyWood[11].BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                    {AllBlogData.bollyWood[11].blogTitle.slice(0, 40)} ...
                  </h2></Link>

                  <p className="blogDesc">
                    {AllBlogData.bollyWood[11].blogDesc.slice(0, 180)} ...
                  </p>
                  <p className="categoryWithDateox">
                    {AllBlogData.bollyWood[11].blogCategory} : {AllBlogData.bollyWood[11].blogDate}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }

          {
            <React.Fragment>
              <hr className='hrLine' />

              <div className="BlogBox">
                <div className="PosterBox">
                  <img
                    src={AllBlogData.technology[7].blogImg}
                    alt="BlogPoster"
                    className="imgBlogPoster"
                  />
                </div>
                <div className="BlogDescriptionBox">
                  <Link to={`/${AllBlogData.technology[7].blogCategory}/${AllBlogData.technology[7].BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                    {AllBlogData.technology[7].blogTitle.slice(0, 40)} ...
                  </h2></Link>

                  <p className="blogDesc">
                    {AllBlogData.technology[7].blogDesc.slice(0, 180)} ...
                  </p>
                  <p className="categoryWithDateox">
                    {AllBlogData.technology[7].blogCategory} : {AllBlogData.technology[7].blogDate}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }

          {
            <React.Fragment>
              <hr className='hrLine' />

              <div className="BlogBox">
                <div className="PosterBox">
                  <img
                    src={AllBlogData.hollyWood[14].blogImg}
                    alt="BlogPoster"
                    className="imgBlogPoster"
                  />
                </div>
                <div className="BlogDescriptionBox">
                  <Link to={`/${AllBlogData.hollyWood[14].blogCategory}/${AllBlogData.hollyWood[14].BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                    {AllBlogData.hollyWood[14].blogTitle.slice(0, 40)} ...
                  </h2></Link>

                  <p className="blogDesc">
                    {AllBlogData.hollyWood[14].blogDesc.slice(0, 180)} ...
                  </p>
                  <p className="categoryWithDateox">
                    {AllBlogData.hollyWood[14].blogCategory} : {AllBlogData.hollyWood[14].blogDate}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }

          {
            <React.Fragment>
              <hr className='hrLine' />

              <div className="BlogBox">
                <div className="PosterBox">
                  <img
                    src={AllBlogData.sports[11].blogImg}
                    alt="BlogPoster"
                    className="imgBlogPoster"
                  />
                </div>
                <div className="BlogDescriptionBox">
                  <Link to={`/${AllBlogData.sports[11].blogCategory}/${AllBlogData.sports[11].BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                    {AllBlogData.sports[11].blogTitle.slice(0, 40)} ...
                  </h2></Link>

                  <p className="blogDesc">
                    {AllBlogData.sports[11].blogDesc.slice(0, 180)} ...
                  </p>
                  <p className="categoryWithDateox">
                    {AllBlogData.sports[11].blogCategory} : {AllBlogData.sports[11].blogDate}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }

          {
            <React.Fragment>
              <hr className='hrLine' />

              <div className="BlogBox">
                <div className="PosterBox">
                  <img
                    src={AllBlogData.fiteness[12].blogImg}
                    alt="BlogPoster"
                    className="imgBlogPoster"
                  />
                </div>
                <div className="BlogDescriptionBox">
                  <Link to={`/${AllBlogData.fiteness[12].blogCategory}/${AllBlogData.fiteness[12].BlogId}`} className="blogTitle" >   <h2 className="blogTitle">
                    {AllBlogData.fiteness[12].blogTitle.slice(0, 40)} ...
                  </h2></Link>

                  <p className="blogDesc">
                    {AllBlogData.fiteness[12].blogDesc.slice(0, 180)} ...
                  </p>
                  <p className="categoryWithDateox">
                    {AllBlogData.fiteness[12].blogCategory} : {AllBlogData.fiteness[12].blogDate}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }

          <ImageSlider />

        </div>
        <div className="blogSection-Right blogSection-Right-2">
          <div className="advertisementBox advertisementBox-2"><img src="https://gumlet.assettype.com/afaqs/2023-10/1793fdfb-f50a-4b33-8c65-333b8edde7dd/MS_Dhoni_as_JioMart_s_brand_ambassador.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="AdvertiseMent" className='AdvertiseMentPoster' /></div>
          <h3 className='blogHeading'>Top Post</h3>
          {
            <React.Fragment>

              <div className="Top_PostBox FirstTopPost_box">
                <div className="FirstTopPost-PosterBox">
                  <img src={AllBlogData.bollyWood[10].blogImg} alt="TopPostPoster" className='FirstTopPostPoster' />
                </div>
                <div className=" FirstTopPost-TitleBox">
                  <Link to={`/${AllBlogData.bollyWood[10].blogCategory}/${AllBlogData.bollyWood[10].BlogId}`} className="topPostTitle FirstTopPostTitle" >  {AllBlogData.bollyWood[10].blogTitle.slice(0, 65)}</Link>
                  <p className="categoryWithDateox">
                    {AllBlogData.bollyWood[10].blogCategory}
                  </p>
                  <span className='postNumbering'>1</span>
                </div>
              </div>

            </React.Fragment>
          }

          {
            <React.Fragment>

              <div className="Top_PostBox">
                <div className="TopPost-PosterBox">
                  <img src={AllBlogData.hollyWood[10].blogImg} alt="TopPostPoster" className='TopPostPoster' />
                </div>
                <div className="TopPost-TitleBox">
                  <Link to={`/${AllBlogData.hollyWood[10].blogCategory}/${AllBlogData.hollyWood[10].BlogId}`} className="topPostTitle" >  {AllBlogData.hollyWood[10].blogTitle.slice(0, 55)}...</Link>
                  <p className="categoryWithDateox">
                    {AllBlogData.hollyWood[10].blogCategory}
                  </p>
                  <span className='postNumbering'>2</span>
                </div>
              </div>

            </React.Fragment>
          }

          {
            <React.Fragment>

              <div className="Top_PostBox">
                <div className="TopPost-PosterBox">
                  <img src={AllBlogData.sports[10].blogImg} alt="TopPostPoster" className='TopPostPoster' />
                </div>
                <div className="TopPost-TitleBox">
                  <Link to={`/${AllBlogData.sports[10].blogCategory}/${AllBlogData.sports[10].BlogId}`} className="topPostTitle" >  {AllBlogData.sports[10].blogTitle.slice(0, 55)}...</Link>
                  <p className="categoryWithDateox">
                    {AllBlogData.sports[10].blogCategory}
                  </p>
                  <span className='postNumbering'>3</span>
                </div>
              </div>

            </React.Fragment>
          }

          {
            <React.Fragment>

              <div className="Top_PostBox">
                <div className="TopPost-PosterBox">
                  <img src={AllBlogData.technology[10].blogImg} alt="TopPostPoster" className='TopPostPoster' />
                </div>
                <div className="TopPost-TitleBox">
                  <Link to={`/${AllBlogData.technology[10].blogCategory}/${AllBlogData.technology[10].BlogId}`} className="topPostTitle" >  {AllBlogData.technology[10].blogTitle.slice(0, 55)}...</Link>
                  <p className="categoryWithDateox">
                    {AllBlogData.technology[10].blogCategory}
                  </p>
                  <span className='postNumbering'>4</span>
                </div>
              </div>

            </React.Fragment>
          }

          {
            <React.Fragment>

              <div className="Top_PostBox">
                <div className="TopPost-PosterBox">
                  <img src={AllBlogData.fiteness[14].blogImg} alt="TopPostPoster" className='TopPostPoster' />
                </div>
                <div className="TopPost-TitleBox">
                  <Link to={`/${AllBlogData.fiteness[14].blogCategory}/${AllBlogData.fiteness[14].BlogId}`} className="topPostTitle" >  {AllBlogData.fiteness[14].blogTitle.slice(0, 55)}...</Link>
                  <p className="categoryWithDateox">
                    {AllBlogData.fiteness[14].blogCategory}
                  </p>
                  <span className='postNumbering'>5</span>
                </div>
              </div>

            </React.Fragment>
          }

        </div>
      </section>
      <div className="latestBlogContainer">
        <h2 className='blogHeading'>Latest Stories</h2>
        <div className="latestBlogBox">

          <div className="latestBlog">
            <img src={AllBlogData.bollyWood[2].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.bollyWood[2].blogCategory}/${AllBlogData.bollyWood[2].BlogId}`} className="latestBlogTitle">
                {AllBlogData.bollyWood[2].blogTitle.slice(0, 70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.bollyWood[2].blogCategory} :  {AllBlogData.bollyWood[2].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.hollyWood[3].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.hollyWood[3].blogCategory}/${AllBlogData.hollyWood[3].BlogId}`} className="latestBlogTitle">
                {AllBlogData.hollyWood[3].blogTitle.slice(0, 70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.hollyWood[3].blogCategory} :  {AllBlogData.hollyWood[11].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.technology[5].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.technology[5].blogCategory}/${AllBlogData.technology[5].BlogId}`} className="latestBlogTitle">
                {AllBlogData.technology[5].blogTitle.slice(0, 70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.technology[5].blogCategory} :  {AllBlogData.technology[5].blogDate}
              </p>
            </div>
          </div>

          <div className="latestBlog">
            <img src={AllBlogData.sports[7].blogImg} alt="Poster" className='latestBlogPoster' />
            <div className="latestBlogDescBox">
              <Link to={`/${AllBlogData.sports[8].blogCategory}/${AllBlogData.sports[7].BlogId}`} className="latestBlogTitle">
                {AllBlogData.sports[7].blogTitle.slice(0, 70)}...
              </Link>
              <p className="categoryWithDateox">
                {AllBlogData.sports[7].blogCategory} :  {AllBlogData.sports[7].blogDate}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlogHome
