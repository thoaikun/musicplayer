import React from 'react'
import Controller from '../Controller/Controller'
import MusicQueue from '../MusicQueue/MusicQueue'
import ProgressBar from '../ProgressBar/ProgressBar'
import SongName from '../SongName/SongName'
import SongThumnail from '../SongThumnail/SongThumnail'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <MusicQueue/>
      <SongName />
      <SongThumnail />
      <Controller />
      <ProgressBar />
    </div>
  )
}

export default Header