'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function CodeBlogNavigation() {
    const path = usePathname()
    return (
        <nav>
            <ul>
                <li>Django First step</li>
                <li>Django connecting to Database</li>
            </ul>
        </nav>
    )
}