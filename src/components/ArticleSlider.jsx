import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import { useRef, useState } from 'react'

const data = [
  {
    id: 1,
    imageUrl: '/s1.jpg',
    Title: 'Grilled  Tomatoes at Home',
  },
  {
    id: 2,
    imageUrl: '/s3.jpg',
    Title: 'Snacks for Travel',
  },
  {
    id: 3,
    imageUrl: '/s4.jpg',
    Title: 'Post-workout Recipes',
  },
  {
    id: 4,
    imageUrl: '/s2.jpg',
    Title: 'How To Grill Corn',
  },
  {
    id: 5,
    imageUrl: '/s5.jpg',
    Title: 'Crunchwrap Supreme',
  },
  {
    id: 6,
    imageUrl: '/s6.jpg',
    Title: 'Broccoli Cheese Soup',
  },
]

const ArticleSlider = () => {
  const [counter, setCounter] = useState(1)
  const slidesToShow = 3
  const total = data.length / slidesToShow
  const slider = useRef(null)
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    accessibility: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          vertical: true,
        },
      },
    ],
  }

  function prevSlide() {
    slider.current.slickPrev()
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  function nextSlide() {
    slider.current.slickNext()
    if (counter < total) {
      setCounter(counter + 1)
    }
  }
  return (
    <div>
      <Slider className='sm:h-fit' ref={slider} {...settings}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='p-[27px] border-[#93A2D361] border-[1.37px] rounded-[20.94px] w-[381px] h-[590px] max-w-[381px] max-h-[590px] sm:p-[33px] sm:rounded-[26px] sm:w-[271px] sm:h-[470px] sm:max-w-[271px] sm:max-h-[470px] sm:mb-[61px]'
            >
              <img src={item.imageUrl} alt='' />
              <div className='p-[16px] sm:p-0 sm:mt-[39px]'>
                <p className='text-theme-blue font-bold text-[21px] leading-7 mt-[19.51px] sm:text-[16px] sm:leading-[35px]'>
                  {item.Title}
                </p>
                <p className='text-theme-text text-[15px] leading-7 mt-[14px] sm:text-[12px] sm:leading-[22px] sm:text-left'>
                  PLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <button className='mt-[30px] flex items-center rounded-[34px] p-[14px_34px] w-[auto] h-[45px] border-[#424961] border-[1.5px] sm:mx-auto sm:rounded-[26.7px] sm:p-[0px] sm:w-[118px] sm:h-[26px]'>
                  <p className='text-theme-text font-semibold text-[16px] leading-9 align-top sm:text-[11px] sm:leading-[46px] sm:mx-auto'>
                    Read More
                  </p>
                </button>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className='flex items-center justify-center mt-[64px] sm:mt-[52px]'>
        <button
          className={counter == 1 ? 'px-[14px] opacity-50' : 'px-[14px]'}
          onClick={prevSlide}
        >
          <img className='rotate-180 sm:w-4 sm:h-4' src='/arrow.png' alt='' />
        </button>
        <p className='sm:text-[12px]'>
          {counter}/{total}
        </p>
        <button
          className={counter == total ? 'px-[14px] opacity-50' : 'px-[14px]'}
          onClick={nextSlide}
        >
          <img className='sm:w-4 sm:h-4' src='/arrow.png' alt='' />
        </button>
      </div>
    </div>
  )
}

export default ArticleSlider
