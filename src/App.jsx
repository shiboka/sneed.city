import './index.css';
import styles from './App.module.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [page, setPage] = useState('welcome');
  const [cloverBtn, setCloverBtn] = useState('active')
  const [mapBtn, setMapBtn] = useState('');
  const [serverAddr, setServerAddr] = useState('hidden');

  function handleWelcome() {
    handleCloverBtn();
  }

  function handleCloverBtn() {
    setCloverBtn('active');
    setMapBtn('');
    setServerAddr('hidden');
    setPage('clover');
    document.title = '/v/ plays clover';
  }

  function handleMapBtn() {
    setMapBtn('active');
    setCloverBtn('');
    setServerAddr('');
    setPage('map');
    document.title = 'play.sneed.city';
  }

  return (
    <>
      {page === 'welcome' && <div id='welcome' className={styles.welcome} onClick={handleWelcome}>Enter</div>}
      {page !== 'welcome' &&
        <>
          <NavBar cloverBtn={cloverBtn} mapBtn={mapBtn} serverAddr={serverAddr} handleCloverBtn={handleCloverBtn} handleMapBtn={handleMapBtn} />
          <div className={styles.content}>
            {page === 'clover' &&
              <div>
                <h2 className={styles.title}>/v/ plays clover</h2>
                <ReactPlayer className={styles.video} url="https://clover.sneed.city/hls/index.m3u8" width="568px" height="536px" playing={true} />
              </div>}
            {page === 'map' && <iframe className={styles.map} src="https://map.sneed.city/"></iframe>}
          </div>
        </>}
    </>
  );
}

export default App;