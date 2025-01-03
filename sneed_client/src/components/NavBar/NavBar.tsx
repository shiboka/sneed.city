import './NavBar.css';

export default function NavBar({ clover, map, play, handleClover, handleMap }:
  { clover: string, map: string, play: string, handleClover: () => void, handleMap: () => void }) {
    return(
      <ul>
        <li>
          <a className={clover} onClick={handleClover}>clover</a>
        </li>
        <li>
          <a className={map} onClick={handleMap}>minecraft</a>
        </li>
        <li id="play" className={play}>
          <span>play.sneed.city</span>
        </li>
    </ul>
    );
}