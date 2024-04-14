'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from '../styles/navbar.module.css';
export default function Navigation() {
    const path = usePathname()
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={path === '/' ? styles.selected : ''}><Link href="/">🏠 Home</Link></li>
                <li className={path === '/Tech' ? styles.selected : ''}><Link href="/Tech">💻 Tech</Link></li>
                <li className={path === '/BoardGames' ? styles.selected : ''}><Link href="/BoardGames">🎲 Board Games</Link></li>
                <li className={path === '/Baseball' ? styles.selected : ''}><Link href="/Baseball">⚾ Baseball</Link></li>
            </ul>
        </nav>
    )
}