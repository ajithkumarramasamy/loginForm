import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'
import './index.css'

class AllMoviesSection extends Component {
  state = {
    moviesList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://hoblist.com/api/movieList'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData.result)
      this.setState({
        moviesList: fetchedData.result,
        isLoading: false,
      })
    }
  }

  renderMoviesList = () => {
    const {moviesList} = this.state
    return (
      <>
        <ul className="movies-list">
          {moviesList.map(movie => (
            <MovieCard movieData={movie} key={movie.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="movies-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderMoviesList()}</>
  }
}

export default AllMoviesSection
