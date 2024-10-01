import Image from 'next/image';
import styles from './menuGallery.module.css';

const images = [
    {
        src: "https://cdn.pixabay.com/photo/2024/08/03/04/04/charming-8941100_960_720.jpg",
        alt: "Charming Restaurant Background"
    },
    {
        src: "https://cdn.pixabay.com/photo/2014/10/15/15/52/restaurant-489845_960_720.jpg",
        alt: "Cozy Restaurant Atmosphere"
    },
    {
        src: "https://cdn.pixabay.com/photo/2020/05/28/18/51/eat-5232255_1280.jpg",
        alt: "Delicious Food"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg",
        alt: "Strawberry Dessert"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/03/16/21/11/noodles-2150272_1280.jpg",
        alt: "Charming Restaurant Background"
    },
    {
        src: "https://cdn.pixabay.com/photo/2019/11/14/11/23/pasta-4625962_960_720.jpg",
        alt: "Cozy Restaurant Atmosphere"
    },
    {
        src: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg",
        alt: "Delicious Food"
    },
    {
        src: "https://cdn.pixabay.com/photo/2018/01/27/21/04/oil-3112195_1280.jpg",
        alt: "Strawberry Dessert"
    }
];

export default function MenuGallery() {
    return (
        <div className={styles.container}>
            <section className={styles.gallerySection}>
                <h1 className={styles.title}>Gallery</h1>
                <p className={styles.description}>
                    Take a peek into our restaurant and discover the warm, inviting atmosphere that awaits you.
                    Our gallery captures the essence of dining with us.
                </p>

                <div className={styles.images}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            height={80}
                            width={350}
                            quality={100}
                            className={styles.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
