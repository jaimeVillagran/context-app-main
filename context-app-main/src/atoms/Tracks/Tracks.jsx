import Grid from '@material-ui/core/Grid'
import Track from '../Track/Track'
import Message from '../Message/Message'

const Tracks = ({ tracks, text }) => (
  <>
    <Message text={text} />
    <div className="root">
      <Grid>
        {tracks.map((track) => {
          const {
            commontrack_id,
            track_name,
            album_name,
            artist_name,
          } = track.track
          return (
            <Track
              key={commontrack_id}
              commontrack_id={commontrack_id}
              track_name={track_name}
              album_name={album_name}
              artist_name={artist_name}
            />
          )
        })}
      </Grid>
    </div>
  </>
)

export default Tracks
