import {useState} from 'react';
import ReactPlayer from 'react-player';
import './App.css'
import NavBar from './components/NavBar/NavBar';


function App() {
  const [clover, setClover] = useState('active')
  const [map, setMap] = useState('')
  const [play, setPlay] = useState('hidden')
  const [page, setPage] = useState('welcome')

  const handleWelcome = () => {
    handleClover();
  }

  const handleClover = () => {
    setPage('clover')
    setClover('active')
    setMap('')
    setPlay('hidden')
    document.title = '/v/ plays clover';
  }

  const handleMap = () => {
    setPage('map')
    setMap('active')
    setClover('')
    setPlay('')
    document.title = 'play.sneed.city';
  }

  return (
    <>
      <NavBar clover={clover} map={map} play={play} handleClover={handleClover} handleMap={handleMap} />
      <div id="container">
        {page === 'welcome' && <div id="welcome" onClick={handleWelcome}>Enter</div>}
        {page === 'clover' &&
          <div id="clover">
            <h2 id="title">/v/ plays clover</h2>
            <ReactPlayer id="video" url="http://clover.sneed.city/hls/index.m3u8" width="568px" height="536px" playing={true}/>
          </div>}
        {page === 'map' && <iframe src="https://map.sneed.city/"></iframe>}
      </div>
    </>
  )
}

export default App
