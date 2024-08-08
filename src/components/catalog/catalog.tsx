import styles from './catalog.module.css';
import ItemsCards from "./itemsCards/itemsCards.tsx";
import DefaultButton from "../ui-components/button/defaultButton.tsx";

const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <div className={styles.container}>
                <h1>Catalog</h1>
                <input className={styles.search} type="search" placeholder={"Search by title"}/>
                <ItemsCards/>
                <div className={styles.containerBtn}>
                    <DefaultButton text={"Show more"}/>
                </div>

            </div>
        </section>
    );
};

export default Catalog;
