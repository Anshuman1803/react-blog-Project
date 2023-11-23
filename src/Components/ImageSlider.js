import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const length = 5;


    let imgSlides = [
        {
            "slidingCat": 'bollyWood',
            "sliderID": 13,
            "slidingTitle": "Timeless charisma of Amitabh Bachchan: Why Big B remains a fan favourite even at 81",
            "slidingImg": 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Amitabh-Bachchan.png?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            "slidingCat": 'hollyWood',
            "sliderID": 6,
            "slidingTitle": "Joe Jones, Sophie Turner officially confirm separation; the singer caught the actress on 'ring camera'?",
            "slidingImg": 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-06T213150.819.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
    
        },

        {
            "slidingCat": 'fitness',
            "sliderID": 8,
            "slidingTitle": "WHAT TO EXPECT IN THE GYM WHEN YOU’RE EXPECTING",
            "slidingImg": "https://tonygentilcore.com/wp-content/uploads/2016/10/128857154_l_normal_none-1536x1057.jpg"
    
        },

        {
            "slidingCat": "technology",
            "sliderID": 15,
            "slidingTitle": "How AI-powered patch management protects remote and hybrid workers",
            "slidingImg": "https://venturebeat.com/wp-content/uploads/2022/02/GettyImages-1367729442-e1645556694932.jpg?fit=750%2C490&strip=all",
        },
    
        {
            "slidingCat": 'sports',
            "sliderID": 13,
            "slidingTitle": "Exclusive: Rohan Bopanna opens up winning Asian Games mixed doubles gold with Rutuja Bhosale on First Sports",
            "slidingImg": 'https://images.firstpost.com/wp-content/uploads/2023/10/Rohan-Bopanna-mixed-doubles-gold-Asian-Games-PTI-640.jpg?impolicy=website&width=640&height=363'
    
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
