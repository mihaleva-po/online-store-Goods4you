import ReactLoading from 'react-loading';
import styles from './loading.module.css';

const Loading = () => {
    return (
        <section className={styles.container}>
            <ReactLoading type={"spokes"} color={"#F14F4F"} height={'20%'} width={'20%'}/>
        </section>
    );
};

export default Loading;
