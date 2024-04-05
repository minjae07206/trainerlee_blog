'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navigation() {
    const path = usePathname()
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path === '/' ? "I'm here": ""}</li>
                <li><Link href="/Code">Code</Link>{path === '/Code' ? "I'm here": ""}</li>
                <li><Link href="/BoardGames">Board Games</Link>{path === '/BoardGames' ? "I'm here": ""}</li>
                <li><Link href="/Baseball">Baseball</Link>{path === '/Baseball' ? "I'm here": ""}</li>
            </ul>
        </nav>
    )
}