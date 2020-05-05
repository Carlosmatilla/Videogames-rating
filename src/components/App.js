import React, { useEffect } from 'react'
import Game from './Game'
import Header from './Header'
import './App.sass'
import { rateGames, getGames } from '../redux/actions/index'
import { connect } from 'react-redux'


function App({ games, rateGames, getGames }) {

  useEffect(() => {
    (async () => await getGames())()
  }, [getGames])

  function handleRating(game, average) {
    rateGames(game, average)
  }

  return <>


    <div className="app">

      <Header />

      <div className="games">

        {games.sort((a, b) => b.average - a.average)
          .map((game, i) =>

            <div key={game.id} className="games__item">

              <Game i={i} game={game} handleRating={handleRating} />

            </div>

          )}

      </div>

    </div>

  </>
}

const mapStateToProps = state => {
  return {
    games: state.games,
    isLoading: state.isLoading,
    error: state.errorMessage
  }
}

const mapDispatchToProps = {
  rateGames,
  getGames
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
