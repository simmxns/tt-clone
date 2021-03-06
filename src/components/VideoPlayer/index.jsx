import clsx from 'clsx'
import { useRef, useState } from 'react'
import VideoDescription from '../VideoDescription/index'
import Actions from './Actions'
import styles from './styles.module.css'

export default function VideoPlayer ({ author, description, albumCover, songName, src, srcPhoto }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoElement } = video
    playing ? videoElement.pause() : videoElement.play()
    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <Actions 
        author={author}
        srcPhoto={srcPhoto}
      />
      <VideoDescription 
        albumCover={albumCover}
        author={author}
        description={description}
        songName={songName}
        animate={playing}
      />
    </div>
  )
}
