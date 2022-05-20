import React from 'react'
import AudioContext from '../../Contexts/AudioContext' 
import { AudioContextType } from '../../Contexts/AudioContext'
import './MusicCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

const MusicCard = (props:any) => {
    const { songs, handlePlay, handleAddToQueue } = React.useContext(AudioContext) as AudioContextType
    const [openMore, setOpenMore] = React.useState(false)

    React.useEffect(() => {
        const handleCloseMore = () => setOpenMore(false)
        document.addEventListener('click', handleCloseMore)

        return () => {
            document.removeEventListener('click', handleCloseMore)
        }
    }, [openMore])

    return (
        <div 
            className='playlist-element'
            onClick={() => {
                handlePlay(props.id)
            }}
        >
            <div className="playlist-element__thum">
                <div 
                    style={{
                        backgroundImage: `url(${props.thumbnail})`
                    }}
                ></div>
            </div>
            <div className="playlist-element__info">
                <h5>{props.name}</h5>
                <p>{props.artist}</p>
            </div>
            <div 
                className={clsx("playlist-element__more", {
                    'disappear': !props.more
                })}
                onClick={(e:any) => {
                    e.stopPropagation()
                    setOpenMore(!openMore)
                }}
            >
                <FontAwesomeIcon icon={faEllipsisH} />
                <div 
                    className={clsx('more__option', {
                        'disappear': !openMore
                    })}
                >
                    <div
                        onClick={() => handlePlay(props.id)}
                    >
                        Play
                    </div>
                    <div
                        onClick={() => handleAddToQueue(props.id)}
                    >
                        Add to queue
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicCard