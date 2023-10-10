import { useState, useEffect, createContext } from 'react'
import { chartTracksGet, trackSearch } from '../../constants/index'

// paso °1: Crear una propiedad que tenga la capacidad de manejar un contexto
export const SongsContext = createContext()

// paso °2: Creación de un Component Provider
const SongsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState()
  const [currentQTrack, setCurrentQTrack] = useState('')
  const [text, setText] = useState('Top Songs')
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTopTracks()
  }, [])


  // paso °3: Generar la lógica para la página de Songs
  const getTopTracks = () => {
    fetch(chartTracksGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true)
        setTracks(data.message.body.track_list)
      })
      .catch((err) => console.log(err))
  }

  const getTracks = (q_track) => {
    fetch(trackSearch(q_track))
      .then((res) => res.json())
      .then((data) => {
        const { track_list } = data.message.body
        setDoneFetch(true)
        setText(track_list.length ? 'Results' : 'No Results')
        setTracks(track_list)
      })
      .catch((err) => console.log(err))
  }

  const validateQTrack = (
    e,
    q_track = document.querySelector('#q_track').value.toLowerCase().trim(),
  ) => {
    if (e.type === 'keypress' && e.key !== 'Enter') return
    const words = q_track.match(/\w+/g)
    q_track = words && words.join(' ')
    if (q_track && q_track !== currentQTrack) {
      setCurrentQTrack(q_track)
      setDoneFetch(false)
      getTracks(q_track)
    }
  }

  // paso °4: retornar las propiedades a disponibilizar
  return (
    <SongsContext.Provider value={{ doneFetch, text, tracks, validateQTrack }}>
      {children}
    </SongsContext.Provider>
  )
}

export default SongsContextProvider

