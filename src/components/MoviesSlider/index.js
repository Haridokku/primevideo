import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {detailsList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {detailsList.map(each => (
          <MovieItem key={each.id} movieDetail={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider

