import React, { useEffect } from 'react'
import Game from './Game'
import Header from './Header'
import { rateGames, getGames, callRandom, resetDb } from '../redux/actions/index'
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import './App.sass'


function App({ games, rateGames, getGames, callRandom, random, resetDb }) {

  useEffect(() => {
    (async () => await getGames())()
  }, [getGames])

  function handleRating(game, average) {
    rateGames(game, average)
  }

  function handleRandom() {
    callRandom()
  }

  function handleReset(){
    resetDb(games)
  }

  return <>
    <div className="app">

      <Header handleRandom={handleRandom} handleReset={handleReset} random={random} />

      <div className="games">
        <AnimatePresence>
          {games.sort((a, b) => b.average - a.average)
            .map((game, i) =>
              <motion.div key={game.id} layoutTransition={{ type: "tween", duration: 0.5 }} className="games__item">
                <Game i={i} game={game} handleRating={handleRating} />
              </motion.div>
            )}
        </AnimatePresence>
      </div>

    </div>
  </>
}

const mapStateToProps = state => {
  console.log(state)
  return {
    games: state.games,
    isLoading: state.loading,
    error: state.error,
    random: state.random
  }
}

const mapDispatchToProps = {
  rateGames,
  getGames,
  callRandom,
  resetDb
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
