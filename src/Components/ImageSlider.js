import React, { useState } from 'react'
import { useContext } from 'react'
import { BlogData } from '../Data/BlogDataBase'
import { Link } from 'react-router-dom';
function ImageSlider() {
    let AllBlogData = useContext(BlogData);
    const [current, setCurrent] = useState(0);
    const length = 5;

    let imgSlides = [
        {
            sliderID: AllBlogData.bollyWood[12].BlogId,
            slidingTitle: AllBlogData.bollyWood[12].blogTitle,
            slidingCat: AllBlogData.bollyWood[12].blogCategory,
            slidingImg: AllBlogData.bollyWood[12].blogImg,
        },

        {
            sliderID: AllBlogData.hollyWood[6].BlogId,
            slidingImg: AllBlogData.hollyWood[6].blogImg,
            slidingTitle: AllBlogData.hollyWood[6].blogTitle,
            slidingCat: AllBlogData.hollyWood[6].blogCategory,
        },

        {
            sliderID: AllBlogData.fiteness[8].BlogId,
            slidingImg: AllBlogData.fiteness[8].blogImg,
            slidingTitle: AllBlogData.fiteness[8].blogTitle,
            slidingCat: AllBlogData.fiteness[8].blogCategory,
        },

        {
            sliderID: AllBlogData.technology[14].BlogId,
            slidingImg: AllBlogData.technology[14].blogImg,
            slidingTitle: AllBlogData.technology[14].blogTitle,
            slidingCat: AllBlogData.technology[14].blogCategory,
        },

        {

            sliderID: AllBlogData.sports[12].BlogId,
            slidingImg: AllBlogData.sports[12].blogImg,
            slidingTitle: AllBlogData.sports[12].blogTitle,
            slidingCat: AllBlogData.sports[12].blogCategory,
        },
    ]

    let prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    let nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }


    return (
        <div className="SliderContainer">
            <i className="fa-solid fa-arrow-left arrow LeftArrow" onClick={prevSlide}></i>
            <i className="fa-solid fa-arrow-right arrow RightArrow" onClick={nextSlide}></i>
            {
                imgSlides.map((data, index) => {
                    return <div className={index === current ? "SliderImg-Box active" : "SliderImg-Box"} key={index}>
                        <img src={data.slidingImg} alt="SliderPostereImg" className='SliderPoster' />
                        <Link to={`/${data.slidingCat}/${data.sliderID}`} className="slidingTitle">
                            {data.slidingTitle.slice(0, 60)}...
                        </Link>
                        <span className="slidingCategory">{data.slidingCat}</span>
                    </div>
                })
            }

        </div>
    )
}

export default ImageSlider
