import { useRouteError } from "react-router-dom";
import styles from './errorPage.module.css';
import error404 from '../../assets/images/error/error404.svg';
import {Helmet} from "react-helmet-async";


interface errorFace {
    status: number,
    statusText: string,
}


const ErrorPage = () => {
    const errorRoute = useRouteError();

    const error = errorRoute as errorFace;

    return (
        <section className={styles.errorPage}>
            <Helmet>
                <title>Error | Goods4you</title>
            </Helmet>
            <div className={styles.container}>
                {
                    error?.status === 404 || error === null
                    ?
                        <figure>
                            <img src={error404} alt="error404"/>
                        </figure>
                        :
                        <div className={styles.blockError}>
                            <h1>{error?.status}</h1>
                            <p>{error?.statusText || "Произошла ошибка"} </p>
                        </div>
                }
            </div>
        </section>
    )
}

export default ErrorPage;
