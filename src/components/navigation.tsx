'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from '../styles/navbar.module.css';
import React from "react";
import { LoginButton } from './auth/login-button';
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from './auth/logout-button';
import { RoleGate } from './auth/role-gate';
import { UserRole } from '@prisma/client';
import { NewPostButton } from './new-post-button';

export default function Navigation() {
    const path = usePathname();
    const user = useCurrentUser();
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={path === '/' ? styles.selected : ''}><Link href="/">🏠 Home</Link></li>
                <li className={path === '/Tech' ? styles.selected : ''}><Link href="/Tech">💻 Tech</Link></li>
                <li className={path === '/BoardGames' ? styles.selected : ''}><Link href="/BoardGames">🎲 Board Games</Link></li>
                <li className={path === '/Baseball' ? styles.selected : ''}><Link href="/Baseball">⚾ Baseball</Link></li>
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <li><NewPostButton>New Post</NewPostButton></li>
                </RoleGate>
                { !user && 
                    <li><LoginButton>Login</LoginButton></li>
                }
                {
                    user && 
                    <li><LogoutButton>Logout</LogoutButton></li>
                }
                
            </ul>
        </nav>
    )
}