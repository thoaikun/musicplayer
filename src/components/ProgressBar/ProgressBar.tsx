import React from 'react'
import AudioContext, { AudioContextType } from '../../Contexts/AudioContext'
import './ProgressBar.css'

const ProgressBar = () => {
    const { songId, audio, currentTime, handleForward, handleUpdateProgress } = React.useContext(AudioContext) as AudioContextType
    const progressBarRef = React.useRef<HTMLProgressElement>(null)

    const handleClickProgressBar = (e:any) => {
        let cursorPosition = (window.innerWidth - 500)/2 + e.target.offsetLeft
        let x = (e.pageX - cursorPosition) * progressBarRef.current!.max / progressBarRef.current!.offsetWidth
        handleUpdateProgress(x)
    }

    React.useEffect(() => {
        setTimeout(() => {
            if (progressBarRef.current?.value === progressBarRef.current?.max)
                handleForward()
        }, 1000)
    }, [progressBarRef.current?.value])

    return (
        <div className="progress-line">
            <progress 
                value={currentTime} 
                max={audio.duration ? audio.duration : 100}
                ref={progressBarRef}
                onClick={songId !== -1 ? handleClickProgressBar : ()=>{}}
            ></progress>
        </div>
    )
}

export default ProgressBar