import React from 'react';
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
import './Game.sass'
const { round } = Math


function Game({ game, handleRating, i }) {

    return <>

        <div className="game__img">
            <img src={game.url} alt="" />
        </div>

        <div className="game__info">

            <div className="game__title">
                <h3><span>{i + 1 + '.  '}</span>{game.name}</h3>
            </div>

            <div className="game__stars">
                <Rate className="rate" style={{width: `80%`}} value={round(game.average * 2)/2} allowClear={false} allowHalf onChange={(value) => handleRating(game, value)} />
                <p>( {game.reviews.length} )</p>
            </div>

        </div>

        <div className="game__average">
            {game.average + '  '}
            <StarFilled color="#FADB13" />
        </div>
    </>
}

export default Game