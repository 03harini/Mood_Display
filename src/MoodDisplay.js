import React from 'react'

function MoodDisplay({value}) {
    
    //moods in key value pair in js it ids known as object notation
    const moods={
        Happy:"Keep Smiling ! 😊",
        Sad:"It's okay to be sad sometimes 😞",
        Excited:"Super!Let's celebrate 🤗",
        Angry:"Take a deep breath and become cool! 😎",
    };
    return (
        <div className='box'>
            {value? <p>{moods[value]}</p> :<p> Select your mood</p>}
        </div>
    )
}

export default MoodDisplay