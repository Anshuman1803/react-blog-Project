import React, { useState } from 'react'
function PosterSlider() {
    const [current, setCurrent] = useState(0);
    const length = 3;

    let imgSlides = [
        {
            slidingImg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00025234-ldmsvbjwpl-landscape.jpg",
        },
        {
            slidingImg: "https://img.freepik.com/premium-vector/concept-machine-learning-innovation-technology-graphic-ai-head-with-programming-script_46706-1054.jpg",
        },
        {
            slidingImg: "https://m.media-amazon.com/images/I/61RuvWDxo8L._AC_UF1000,1000_QL80_.jpg",
        },


    ]

    let prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    let nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }


    return (
        <div className="SliderContainer SliderContainer-2">
            <i className="fa-solid fa-arrow-left arrow LeftArrow" onClick={prevSlide}></i>
            <i className="fa-solid fa-arrow-right arrow RightArrow" onClick={nextSlide}></i>
            {
                imgSlides.map((data, index) => {
                    return <div className={index === current ? "SliderImg-Box active" : "SliderImg-Box"} key={index}>
                        <img src={data.slidingImg} alt="SliderPostereImg" className='SliderPoster' />
                    </div>
                })
            }

        </div>
    )
}

export default PosterSlider
