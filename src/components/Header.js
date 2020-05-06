import React from 'react'
import './Header.sass'
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';


const Header = ({ handleRandom, random }) => {

    return <>

        <header className="header">
            <div className="header__logo">
                <img src="https://hexad.de/wp-content/themes/hexad/img/hexad-small-logo.png" alt="logo" />
                <h2>Top VideoGames</h2>
            </div>

            <Button type="primary" shape="round" icon={random ?
                <PauseCircleOutlined /> : <PlayCircleOutlined />}
                size={'large'} onClick={() => handleRandom()
                }>
                {random ? 'STOP RANDOM' : 'RANDOM RATING'}
            </Button>

        </header>

    </>
}

export default Header
