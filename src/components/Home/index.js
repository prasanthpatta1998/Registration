import {Component} from 'react'
import MovieDetails from '../MovieDetails'
import './index.css'

class Home extends Component {
  state = {
    moviesList: [],
  }

  componentDidMount() {
    this.getMoviesList()
  }

  getMoviesList = async () => {
    const requestData = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    }
    const url = 'https://hoblist.com/api/movieList'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({moviesList: data.result})
  }

  render() {
    const {moviesList} = this.state
    console.log(moviesList)
    return (
      <div>
        <nav className="nav-container">
          <ul>
            <li className="nav-element">
              <a href="#movies">Movies</a>
            </li>
            <li className="nav-element">
              <a href="#company-info">Company Info</a>
            </li>
          </ul>
        </nav>
        <ul id="movies" className="movie-details-list">
          {moviesList.map(eachMovie => (
            <MovieDetails key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </ul>
        <div id="company-info" className="company-container">
          <h1 className="company-heading">Company Info</h1>
          <p className="company">
            Company:
            <span className="company-name">
              Geeksynergy Technologies Pvt Ltd
            </span>
          </p>
          <p className="company">
            Address:
            <span className="company-name">Sanjayanagar, Bengaluru-56</span>
          </p>
          <p className="company">
            Phone: <span className="company-name">XXXXXXXXX09</span>
          </p>
          <p className="company">
            Email: <span className="company-name">XXXXXX@gmail.com</span>
          </p>
        </div>
      </div>
    )
  }
}
export default Home
