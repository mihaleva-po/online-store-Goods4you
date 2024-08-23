import styles from './errorPage.module.css';
import error404 from '../../assets/images/error/error404.svg';
import {Helmet} from "react-helmet-async";

const ErrorPage = () => {
    return (
        <section className={styles.errorPage}>
            <Helmet>
                <title>Error | Goods4you</title>
            </Helmet>
            <div className={styles.container}>
                <figure>
                    <img src={error404} alt="error404"/>
                </figure>
            </div>
        </section>
    )
}

export default ErrorPage;
