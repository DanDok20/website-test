import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

const VideoPlayer = ({play_State, setPlayState}) => {

    const player = useRef(null)

    const closePlayer = (e) =>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${play_State ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer