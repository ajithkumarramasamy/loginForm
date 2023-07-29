import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'
import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {
    title,
    director,
    genre,
    language,
    pageViews,
    poster,
    releasedDate,
    runTime,
    totalVoted,
    stars,
  } = movieData

  return (
    <li className="movie-item">
      <div className="movie-des">
        <div>
          <BsFillCaretUpFill className="bs-up" />
          <h1 className="vote">{totalVoted}</h1>
          <BsFillCaretDownFill className="bs-down" />
          <p className="vote-para">votes</p>
        </div>
        <img src={poster} alt="movies" className="thumbnail" />
        <div>
          <div>
            <h1 className="title">{title}</h1>
            <p>
              <span className="span-item">Genre: </span>
              {genre}
            </p>
            <p>
              <span className="span-item">Director: </span>
              {director}
            </p>
            <p>
              <span className="span-item">Starring: </span>
              {stars}
            </p>
            <div>
              <p>
                {runTime}Mins | {language} | {releasedDate}
              </p>
            </div>
            <div>
              <p className="view-color">
                {pageViews} views | Voted by {totalVoted} People
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="trailer-button" type="button">
        Watch Trailer
      </button>
      <hr />
    </li>
  )
}
export default MovieCard
