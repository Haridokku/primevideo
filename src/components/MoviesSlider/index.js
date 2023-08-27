import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {detailsList} = props
  console.log(detailsList)

  return (
    <>
      <div className="slider-container">
        <Slider>
          {detailsList.map(each => (
            <MovieItem key={each.id} movieDetail={each} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
