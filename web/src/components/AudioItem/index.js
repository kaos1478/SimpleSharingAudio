import React from 'react';
import './styles.css'

function Audio({file}) {
    const srcFile = "http://192.168.15.18:3333/audio/"+file
    return (
        <div id="AudioItem">
            <header>
                {file}
            </header>
            <audio src={srcFile} controls>
            </audio>
        </div>
    )
}

export default Audio;