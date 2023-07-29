import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'
import './index.css'

const MovieDetails = props => {
  const {movieDetails} = props
  const {
    genre,
    director,
    poster,
    stars,
    pageViews,
    title,
    voting,
    releasedDate,
  } = movieDetails

  const starring = stars.join(',')
  const directors = director.join(',')
  const releaseDate = new Date(releasedDate * 1000)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const movieReleasedDate = `${releaseDate.getDay()} ${
    months[releaseDate.getMonth()]
  }`

  return (
    <li className="list-element">
      <div className="movie-container">
        <div className="votes-container">
          <div>
            <BiSolidUpArrow className="icons" />
            <p className="votes">{voting}</p>
            <BiSolidDownArrow className="icons" />
          </div>
          <p className="votes">Votes</p>
        </div>
        <img src={poster} alt="poster" className="poster" />
        <div className="cast-container">
          <h1 className="title">{title}</h1>
          <p className="genre">
            Genre: <span className="genre-names">{genre}</span>
          </p>
          <p className="genre">
            Director: <span className="genre-names">{directors}</span>
          </p>
          <p className="genre">
            Starring: <span className="genre-names">{starring}</span>
          </p>
          <p className="genre-names">
            Mins |English | <span>{movieReleasedDate}</span>
          </p>
          <p className="views">{`${pageViews} views | Voted by ${voting} people`}</p>
        </div>
      </div>
      <button type="button">Wathc Trailer</button>
    </li>
  )
}

export default MovieDetails
