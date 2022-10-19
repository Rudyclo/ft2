import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="https://t3-4.vercel.app/profile">
          <a>Profile</a>
        </Link>
        <Link href="/coins">
          <a>coins</a>
        </Link>
      </div>
    </div>
  );
}
