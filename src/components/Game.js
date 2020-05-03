import React from 'react';
import Rating from '@material-ui/lab/Rating'
import StarIcon from '@material-ui/icons/Star';
import './Game.sass'


function Post({ game, handleRating, i }) {

    return <>

        <div className="game__img">
            <img src={game.url} alt="" />
        </div>

        <div className="game__info">

            <div className="game__title">
                <h3>{i + 1 + '. '}{game.name}</h3>
            </div>

            <div className="game__stars">
                <Rating value={game.average / 2} size={"medium"} precision={0.5} max={5} onChange={(_, number) => handleRating(game, number)} />
            </div>

        </div>

        <div className="game__average">
            {game.average + '  '}
            <StarIcon fontSize="large" className="star-icon" />
        </div>
    </>
}

export default Post