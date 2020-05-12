import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined, PauseCircleOutlined, UndoOutlined } from '@ant-design/icons';
import { Alert } from 'antd'
import './Header.sass'


const Header = ({ handleRandom, handleReset, random, error }) => {

    return <>

        {error && <Alert message={error} type="error" />}

        <header className="header">

            <div className="header__logo">
                <h2>Top VideoGames</h2>
            </div>

            <div className="header__buttons">

                <Button type="primary" shape="round" icon={random ?
                    <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    size={'large'} onClick={() => handleRandom()
                    }>
                    {random ? 'STOP RANDOM' : 'RANDOM RATING'}
                </Button>

                <Button type="primary" shape="circle" icon={<UndoOutlined />} size={'large'} 
                onClick={() => handleReset()} />

            </div>

        </header>

    </>
}

export default Header
