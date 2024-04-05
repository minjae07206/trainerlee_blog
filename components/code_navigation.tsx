'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function CodeNavigation() {
    const path = usePathname()
    return (
        <nav>
            <ul>
                <li><Link href='/Projects'>Projects</Link></li>
                <li><Link href='/Code/CodeBlog'>Blog</Link></li>
            </ul>
        </nav>
    )
}