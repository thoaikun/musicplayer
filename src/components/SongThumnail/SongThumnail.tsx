import React from 'react'
import AudioContext from '../../Contexts/AudioContext'
import { AudioContextType } from '../../Contexts/AudioContext'
import './SongThumnail.css'

const SongThumnail = () => {
    const { songs, songId } = React.useContext(AudioContext) as AudioContextType

    return (
        <div className='song-thumnail'>
            <img 
                src={songId >= 0 ? songs[songId].thumbnail : '/images/turntable.png'} 
                className="song-thumnail__row song-thumnail--rotation"
            >
            </img>
        </div>
    )
}

export default SongThumnail