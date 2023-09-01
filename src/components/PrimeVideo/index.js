import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const getActionsMovies = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  console.log(getActionsMovies)

  const getComedyMovies = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  console.log(getComedyMovies)

  return (
    <>
      <div className="primeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime"
        />
        <div className="bottomContainer">
          <h1 className="head">Action Movies</h1>
          <MoviesSlider detailsList={getActionsMovies} />
          <h1 className="head">Comedy Movies</h1>
          <MoviesSlider detailsList={getComedyMovies} />
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
