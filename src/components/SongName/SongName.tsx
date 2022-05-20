import React from 'react'
import AudioContext, { AudioContextType } from '../../Contexts/AudioContext'
import './SongName.css'

const SongName = () => {
  const { songs, songId } = React.useContext(AudioContext) as AudioContextType

  return (
    <div className='song-name'>
      <h6 
        style={{
          marginBottom: '0.3rem'
        }}
      >Now playing:</h6>
      <p>{songId >= 0 ? songs[songId].name : "Choose a song"}</p>
    </div>
  )
}

export default SongName