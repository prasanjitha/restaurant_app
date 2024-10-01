"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './home.module.css';

const images = [
    "https://cdn.pixabay.com/photo/2022/09/24/07/31/pasta-7475756_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/14/11/23/pasta-4625962_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_1280.jpg"
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    // Function to switch images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    src={images[currentImage]}
                    alt="Restaurant background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className={styles.backgroundImage}
                />
            </div>
            <header className={styles.header}>
                <h1>Welcome to Bella Italia</h1>
                <p>Experience the authentic taste of Italy.</p>
            </header>
        </div>
    );
}
