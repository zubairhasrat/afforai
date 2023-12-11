import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './review.module.css';
import { reviews } from './constants'

export const Review = () => {

  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="container my-40">
      <div className="flex flex-col content-center">
        <div className="flex flex-col items-center container">
          <a
            href="https://www.producthunt.com/products/afforai/" 
            className='mb-2' 
            target="_blank"
          >
            <img src="https://afforai.com/img/graphics/ph-review.webp" alt=""  width={170}/>
          </a>
          <div className='text-center mb-2 rgb-34-34-34 font-semibold text-4xl'>
            See what our users say
          </div>
          <div className="text-center mb-2 text-base rgb-82-82-82">Loved by thousands, all around the World</div>
        </div>
      </div>
      <div className={`mt-20`}>
        <Slider {...settings}>
          {
            reviews.map(review => (
              <div key={review.id}>
                <div className={`flex flex-col rounded-md ${styles['card-wrraper']} mr-6`}>
                  <div className='whitespace-normal flex-grow text-gray-700 text-base border-b border-gray-300'>
                    { review.content }
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <div className="flex items-center gap-2">
                      <img src="https://afforai.com/img/testimonials/0-2.webp" alt="profile" height={32} width={32} />
                      <div className="rgb-82-82-82 text-sm">{ review.user }</div>
                    </div>
                    <a 
                      href="https://www.producthunt.com/products/afforai/" 
                      target="_blank"
                      className="hidden md:inline-flex items-center rounded-md px-3 md:px-2 py-1" 
                    >
                      <div className='flex items-center justify-between gap-1'>
                        <img src="https://afforai.com/img/icons/producthunt.svg" alt="Product hunt logo" height={16} />
                        <span className="text-orange-500 text-base font-semibold">View on Product Hunt</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}