import React, { useEffect, useState } from 'react'

const AsideScore = ({score, highScore, setHighScore}) => {

    useEffect(() =>{
        const storedHighScores = JSON.parse(localStorage.getItem('highScore')) || {};
        setHighScore(storedHighScores);
    },[]);

    useEffect(()=>{
        localStorage.setItem('highScore', JSON.stringify(highScore));
    },[highScore]);

    return (
        <aside className='asidebar'>
            <div className='enter'>
                <h4>Puntuaciónes</h4>

                <h5>HTML</h5>
                <p>{score.HTML || 0}</p>
                <h5>puntación Maxima HTML</h5>
                <p>{highScore.HTML || 0}</p>

            </div>
        </aside>
    )
}

export default AsideScore