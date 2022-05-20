import React from 'react'
import useAudio from '../../hooks/useAudio'
import MusicCard from '../MusicCard/MusicCard'
import AudioContext, { AudioContextType } from '../../Contexts/AudioContext'
import './Playlist.css'


const Playlist = () => {
  const { songs } = React.useContext(AudioContext) as AudioContextType

  return (
    <div className='playlist'>
      {songs.map((song) => (
        <MusicCard
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          thumbnail={song.thumbnail}
          path={song.link}
          more
        />
      ))}
    </div>
  )
}

export default Playlist