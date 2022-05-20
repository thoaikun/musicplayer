import React from 'react'
import clsx from 'clsx'
import './Controller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedoAlt, faBackward, faForward, faRandom } from '@fortawesome/free-solid-svg-icons'
import AudioContext, { AudioContextType } from '../../Contexts/AudioContext'

const Controller = () => {
  const { 
    isPlay, 
    repeat, 
    random,
    handleMusicToggle, 
    handleForward, 
    handleBackward,
    handleRepeat,
    handleRandom
  } = React.useContext(AudioContext) as AudioContextType

  return (
    <div className="control">
      <div 
        className='repeat'
        onClick={handleRepeat}
      >
        <FontAwesomeIcon 
          icon={faRedoAlt} 
          className={clsx({
            'btn--on': repeat
          })}
        />
      </div>
      
      <div className="backward">
        <FontAwesomeIcon 
          icon={faBackward} 
          onClick={() => {
            handleBackward()
          }}
        />
      </div>

      <div 
        className="play"
        onClick={handleMusicToggle}
      >
            <FontAwesomeIcon 
              icon={faPlay} 
              className={clsx('play-btn', {
                'btn--show' : !isPlay
              })}
            />
          <FontAwesomeIcon 
            icon={faPause} 
            className={clsx('pause-btn', {
              'btn--show' : isPlay
            })}
          />
      </div>

      <div 
        className="forward"
        onClick={() => {
          handleForward()
        }}
      >
        <FontAwesomeIcon icon={faForward} />
      </div>

      <div 
        className="random"
        onClick={handleRandom}
      >
        <FontAwesomeIcon 
          icon={faRandom}
          className={clsx('random-btn', {
            'btn--on': random
          })}
        />
      </div>
    </div>
  )
}

export default Controller