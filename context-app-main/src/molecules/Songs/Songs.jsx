import { useContext } from 'react'
import SearchTracks from '../../atoms/SearchTracks/SearchTracks'
import Tracks from '../../atoms/Tracks/Tracks'
import Message from '../../atoms/Message/Message'
import ProgressBar from '../../atoms/ProgressBar/ProgressBar'
import { SongsContext } from './../../contexts/Songs/SongsContext'

const Songs = () => {
  const { validateQTrack, doneFetch, text, tracks } = useContext(SongsContext)
  return (
    <>
      <SearchTracks validateQTrack={validateQTrack} />
      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </>
  )
}

export default Songs
