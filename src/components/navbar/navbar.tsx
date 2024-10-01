"use client"
import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname(); // Get current pathname

    return (
        <nav className={styles.nav}>
            <Link href="/" passHref legacyBehavior>
                <a className={pathname === '/' ? styles.active : styles.link}>Home</a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
                <a className={pathname === '/about' ? styles.active : styles.link}>About Us</a>
            </Link>
            <Link href="/menu" passHref legacyBehavior>
                <a className={pathname === '/menu' ? styles.active : styles.link}>Gallery & Menu</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
                <a className={pathname === '/contact' ? styles.active : styles.link}>Contact Us</a>
            </Link>
        </nav>
    );
}