import React from 'react'
import Game from './Game'
import Header from './Header'
import './App.sass'
import { games } from '../data'


function App() {

  return <>

    <div className="app">

        <Header />

        <div className="games">

            {games.sort((a, b) => b.average - a.average)
            .map((game, i) =>

                <div key={game.name} className="games__item">

                  <Game i={i} game={game} />

                </div>

            )}

        </div>

    </div>

  </>
}

export default App
