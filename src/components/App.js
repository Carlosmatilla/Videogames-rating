import React, { useEffect } from 'react'
import Game from './Game'
import Header from './Header'
import './App.sass'
import { rateGames, getGames } from '../redux/actions/index'
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"



function App({ games, rateGames, getGames }) {

  const animation = {
    type: "tween",
    damping: 20,
    stiffness: 300,
    duration: 0.5
  };

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
        <AnimatePresence>
          {games.sort((a, b) => b.average - a.average)
            .map((game, i) =>

              <motion.div key={game.id} layoutTransition={animation} className="games__item">

                <Game i={i} game={game} handleRating={handleRating} />

              </motion.div>

            )}
        </AnimatePresence>
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
