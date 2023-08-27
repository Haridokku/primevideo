import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetail} = props
  const {thumbnailUrl, videoUrl} = movieDetail
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="closeButton"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
