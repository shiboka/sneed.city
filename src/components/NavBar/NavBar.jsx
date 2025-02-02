import styles from './NavBar.module.css';

export default function NavBar({ cloverBtn, mapBtn, serverAddr, handleCloverBtn, handleMapBtn }) {
  return(
    <ul className={styles.navbar}>
      <li className={styles.navbarItem}>
        <a className={cloverBtn} onClick={handleCloverBtn}>clover</a>
      </li>
      <li className={styles.navbarItem}>
        <a className={mapBtn} onClick={handleMapBtn}>minecraft</a>
      </li>
      <li className={`${styles.navbarItem} ${styles.serverAddr} ${serverAddr}`}>
        <span>play.sneed.city</span>
      </li>
    </ul>
  );
}