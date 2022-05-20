import React from 'react'
import useAudio from '../hooks/useAudio'

export interface Song {
    id : number,
    name : string,
    artist: string,
    link : string,
    thumbnail: string
}

export interface AudioContextType {
    songs: Song[],
    queue: Song[],
    songId: number,
    audio: any,
    isPlay: boolean,
    repeat: boolean,
    random: boolean,
    currentTime: any,
    handlePlay: (id:number) => void,
    handleMusicToggle: () => void
    handleForward: () => void,
    handleBackward: () => void,
    handleUpdateProgress: (x:number) => void
    handleRepeat: () => void
    handleRandom: () => void
    handleAddToQueue: (id:number) => void 
}

let data : Song[] = [
    {
        id : 0,
        name: 'Beyone Summer',
        artist: 'Hoang Dung',
        link: './Music/Mua\ He\ Bat\ Tan\ -\ Hoang\ Dung.mp3',
        thumbnail: './images/muahebattan.jpg'
    },
    {
        id  : 1,
        name: 'Drawer',
        artist: '10cm',
        link: './Music/Drawer\ -\ 10cm.mp3',
        thumbnail: './images/drawer.jpg'
    },
    {
        id : 2,
        name: 'Bring Money Home',
        artist: 'Den',
        link: '/Music/Mang\ Tien\ Ve\ Cho\ Me\ -\ Den_\ Nguyen\ Thao.mp3',
        thumbnail: './images/mangtienvechome.jpg'
    },
    {
        id : 3,
        name: 'Happy For You',
        artist: 'Vu, Lukas Graham',
        link: './Music/Happy\ For\ You\ -\ Lukas\ Graham_\ Vu.mp3',
        thumbnail: './images/happyforyou.jpg'
    },
    {
        id : 4,
        name: 'Christmas Tree',
        artist: 'V',
        link: './Music/Christmas\ Tree\ -\ V\ BTS_.mp3',
        thumbnail: './images/christmasTree.jpg'
    },
    {
        id : 5,
        name: 'You',
        artist: 'IU',
        link: './Music/You\ -\ IU.mp3',
        thumbnail: '/images/pieces.jpg'
    },
    {
        id : 6,
        name: 'Nghe Noi',
        artist: 'V',
        link: './Music/Nghe\ -\ Noi\ -\ Obito_\ Pjpo.mp3',
        thumbnail: './images/rapviet.jpg'
    }
]

const audio = new Audio()
const AudioContext = React.createContext({})

export const AudioProvider : React.FC<React.ReactNode> = ({children}) => {
    const [songs, setSongs] = React.useState<Song[]>([])
    const [queue, setQueue] = React.useState<Song[]>([])
    const [isPlay, setIsPlay] = React.useState(false)
    const [songId, setSongId] = React.useState(-1)
    const [currentTime, setCurrentTime] = React.useState(0)
    const [repeat, setRepeat] = React.useState(false)
    const [random, setRandom] = React.useState(false)

    // get all song
    React.useEffect(() => {
        setSongs(data)
    }, [data])

    React.useEffect(() => {
        if (songId !== -1) {
            audio.src = songs[songId].link
            audio.load()
            audio.play()
            setIsPlay(true)
            
        }
    }, [songId])

    // set the currentTime equal to audio current time
    setInterval(() => {
        setCurrentTime(audio.currentTime)
    }, 1000)

    // handle when click on a song
    const handlePlay = (id:number) => {
        setSongId(id)
    }

    // handle when pause or play music
    const handleMusicToggle = () => {
        if (isPlay) {
            audio.pause()
        }
        else 
            audio.play()
        setIsPlay(!isPlay)
    }

    // handle next song
    const handleForward = () => {
        if (!repeat) {
            if (random && queue.length === 0) {
                setSongId(Math.floor(Math.random() * 10000) % songs.length)
                audio.src = songs[songId].link
            }
            else if (queue.length !== 0) {
                let nextSong = queue[0]
                if (nextSong) {
                    setSongId(nextSong.id)
                    let newQueue = queue.filter(item => item.id !== nextSong.id)
                    setQueue(newQueue)
                }
                audio.src = songs[nextSong.id].link
            }
            else {
                if (songId === songs.length - 1)
                    setSongId(0)
                else 
                    setSongId(songId+1)
                audio.src = songs[songId].link
            }
        }
    }

    // handle previous song
    const handleBackward = () => {
        if (!repeat) {
            if (random) {
                setSongId(Math.floor(Math.random() * 10000) % songs.length)
            }
            else {
                if (songId === 0)
                    setSongId(songs.length-1)
                else
                    setSongId(songId-1)
            }
            audio.src = songs[songId].link
        }
    }

    //handle timeline of the progress bar
    const handleUpdateProgress = (x:number) => {
        audio.currentTime = x
        setCurrentTime(x)
    }

    const handleRepeat = () => {
        if (random)
            setRandom(false)
        setRepeat(!repeat)
        audio.loop = !audio.loop
    }

    const handleRandom = () => {
        if (repeat)
            setRepeat(false)
        setRandom(!random)
    }

    const handleAddToQueue = (id:number) => {
        if (queue.filter(item => item.id === id).length === 0) {
            const newQueue = [...queue, songs[id]]
            setQueue(newQueue)
        }
    }

    return (
        <AudioContext.Provider value={{
            songs,
            queue,
            songId,
            audio,
            isPlay,
            repeat,
            random,
            currentTime,
            handlePlay,
            handleMusicToggle,
            handleForward,
            handleBackward,
            handleUpdateProgress,
            handleRepeat,
            handleRandom,
            handleAddToQueue
        }}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioContext