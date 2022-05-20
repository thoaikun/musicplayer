import React from 'react'
import clsx from 'clsx'
import MusicCard from '../MusicCard/MusicCard'
import AudioContext from '../../Contexts/AudioContext'
import { AudioContextType } from '../../Contexts/AudioContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import './MusicQueue.css'
import 'animate.css'

const MusicQueue = () => {
    const { queue } = React.useContext(AudioContext) as AudioContextType
    const [open, setOpen] = React.useState(false)

    return (
        <div className='music-queue'>
            <FontAwesomeIcon 
                icon={faBarsStaggered}
                onClick={() => {
                    setOpen(!open)
                }}
                className='queue-btn'
            ></FontAwesomeIcon>
            <div 
                className={clsx('queue', 'animate__animated', {
                    'disappear': open,
                    'animate__fadeInLeft': open === false
                })}
            >
                <h3>Your queue</h3>
                <div className='queue__list'>
                    {queue && queue.length !== 0 ? queue.map((song, id) => (
                        <MusicCard
                            key={song.id}
                            id={song.id}
                            name={song.name}
                            artist={song.artist}
                            thumbnail={song.thumbnail}
                            path={song.link}
                        ></MusicCard>
                    )) :
                        <p
                            style={{
                                width: '100%',
                                height: '450px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}       
                        >
                            Queue is empty
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default MusicQueue