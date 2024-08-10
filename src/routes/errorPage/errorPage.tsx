import { useRouteError } from "react-router-dom";
import styles from './errorPage.module.css';
import error404 from '../../assets/images/error/error404.svg';


interface errorFace {
    status: number,
    statusText: string,
}


const ErrorPage = () => {
    const errorRoute = useRouteError();
    console.log(errorRoute);

    const error = errorRoute as errorFace;

    return (
        <section className={styles.errorPage}>
            <div className={styles.container}>
                {
                    error.status === 404
                    ?
                        <img src={error404} alt="error404"/>
                        :
                        <div className={styles.blockError}>
                            <h1>{error.status}</h1>
                            <p>{error.statusText} </p>
                        </div>
                }
            </div>
        </section>
    )
}

export default ErrorPage;
