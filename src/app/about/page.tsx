import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <h1>About Bella Italia</h1>
                <p>Discover our story, vision, and mission.</p>
            </header>

            <section className={styles.intro}>
                <h2>Our Story</h2>
                <p>
                    Bella Italia was born from a passion for authentic Italian cuisine, crafted with love and tradition. Our journey started in 1995, with a small, cozy restaurant in the heart of the city. Over the years, we’ve grown into multiple locations while keeping our family spirit alive in every dish we serve.
                </p>
            </section>

            <section className={styles.mission}>
                <h2>Vision & Mission</h2>
                <p>
                    <strong>Vision:</strong> To bring the authentic flavors of Italy to the world, one dish at a time.
                    <br />
                    <strong>Mission:</strong> We are committed to delivering fresh, high-quality ingredients in every meal while providing a warm and welcoming atmosphere for all our guests.
                </p>
            </section>

            <section className={styles.services}>
                <h2>Our Services</h2>
                <ul>
                    <li>Dine-in</li>
                    <li>Takeaway</li>
                    <li>Home Delivery</li>
                </ul>
            </section>

            <section className={styles.locations}>
                <h2>Our Locations</h2>
                <p>Find us at multiple locations across the city for your convenience:</p>
                <ul>
                    <li>Downtown Branch</li>
                    <li>Northside Branch</li>
                    <li>Eastside Branch</li>
                </ul>
            </section>

            <section className={styles.management}>
                <h2>Our Management</h2>
                <p>
                    Bella Italia is run by a team of passionate individuals, led by our founder and head chef, Giovanni Rossi. Giovanni has spent over 30 years perfecting his craft, creating unique dishes inspired by his Italian roots.
                </p>
            </section>
        </div>
    );
}
