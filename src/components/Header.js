import React from 'react'
import Button from '@material-ui/core/Button'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import './Header.sass'


const Header = () => {

    return <>

        <header className="header">

            <h2>VideoGames Rating</h2>

            <Button
                variant="contained"
                color="primary"
                endIcon={<PlayCircleOutlineIcon />}
            >
                RANDOM RATING
            </Button>

        </header>

    </>
}

export default Header
