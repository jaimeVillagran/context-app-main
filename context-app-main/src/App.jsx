import { Routes, Route } from 'react-router-dom'
import Header from './atoms/Header/Header'
import Songs from './molecules/Songs/Songs'
import Lyrics from './molecules/Lyrics/Lyrics'
import NotFound from './molecules/NotFound/NotFound'
import './assets/css/styles.css'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Songs />} />
      <Route path="/lyrics/track/:commontrack_id" element={<Lyrics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)

export default App
