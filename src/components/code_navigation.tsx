'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/second_level_nav.module.css'
export default function CodeNavigation() {
    const path = usePathname()
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/Projects'>Projects</Link></li>
                <li><Link href='/Code/CodeBlog'>Blog</Link></li>
            </ul>
        </nav>
    )
}