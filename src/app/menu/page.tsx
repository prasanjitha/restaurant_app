import Image from "next/image";
import styles from './menu.module.css';
import MenuGallery from "@/components/menu-gallery/menuGallery";

export default function Page() {
    return (
        <div className={styles.container}>
            <section className={styles.menuSection}>
                <h1 className={styles.title}>Our Delicious Menu</h1>
                <p className={styles.description}>
                    Explore our carefully crafted menu, featuring a delightful array of flavors that cater to every palate.
                    From hearty entrees to light appetizers, each dish is made with fresh, locally sourced ingredients.
                </p>

                <div className={styles.category}>
                    <h2>Appetizers</h2>
                    <Image
                        src="https://cdn.pixabay.com/photo/2015/07/08/07/11/salad-835441_960_720.jpg"
                        alt="Restaurant background"
                        height={80}
                        width={350}
                        quality={100}
                        className={styles.image}
                    />
                    <p>Start your meal with our tempting appetizers, perfect for sharing or savoring alone.</p>
                </div>

                <div className={styles.category}>
                    <h2>Main Courses</h2>
                    <Image
                        src="https://cdn.pixabay.com/photo/2022/06/07/21/09/tofu-7249299_1280.jpg"
                        alt="Restaurant background"
                        height={80}
                        width={350}
                        quality={100}
                        className={styles.image}
                    />
                    <p>Savor our main courses that highlight bold flavors and exquisite presentation.</p>
                </div>

                <div className={styles.category}>
                    <h2>Desserts</h2>
                    <Image
                        src="https://cdn.pixabay.com/photo/2020/07/27/10/06/cupcakes-5441972_960_720.jpg"
                        alt="Restaurant background"
                        height={80}
                        width={350}
                        quality={100}
                        className={styles.image}
                    />
                    <p>Indulge in our mouthwatering desserts, crafted to satisfy your sweet tooth.</p>
                </div>

                <div className={styles.category}>
                    <h2>Beverages</h2>
                    <Image
                        src="https://cdn.pixabay.com/photo/2017/03/01/05/12/tea-cup-2107599_1280.jpg"
                        alt="Restaurant background"
                        height={80}
                        width={350}
                        quality={100}
                        className={styles.image}
                    />
                    <p>Quench your thirst with our carefully curated beverage menu.</p>
                </div>

                <div className={styles.sampleMenu}>
                    <h2>Sample Menu Items</h2>
                    <div className={styles.menuItem}>
                        <h3>Grilled Salmon</h3>
                        <Image
                            src="https://cdn.pixabay.com/photo/2018/11/16/18/00/salmon-3819966_1280.jpg"
                            alt="Restaurant background"
                            height={80}
                            width={350}
                            quality={100}
                            className={styles.image}
                        />
                        <p>Perfectly grilled salmon served with seasonal vegetables and a lemon butter sauce. A must-try for seafood lovers! <strong>$25</strong></p>
                    </div>

                    <div className={styles.menuItem}>
                        <h3>Vegetarian Lasagna</h3>
                        <Image
                            src="https://cdn.pixabay.com/photo/2019/05/27/18/42/polska-food-4233326_1280.jpg"
                            alt="Restaurant background"
                            height={80}
                            width={350}
                            quality={100}
                            className={styles.image}
                        />
                        <p>A hearty vegetarian lasagna layered with fresh vegetables, marinara sauce, and melted cheese. Comfort food at its finest! <strong>$18</strong></p>
                    </div>
                </div>
            </section>

            <MenuGallery />
        </div>
    );
}
