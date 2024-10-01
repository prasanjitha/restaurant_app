import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h2 className={styles.footerTitle}>Bella Italia</h2>
                    <p>Authentic Italian dining experience.</p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <p>123 Bella St, Food City</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@bellaitalia.com</p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/menu">Gallery</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Yelp"><FaYelp /></a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© 2024 Bella Italia. All rights reserved.</p>
            </div>
        </footer>
    );
}
