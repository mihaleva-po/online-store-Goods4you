import styles from './oneProduct.module.css';
import Gallery from "./gallery/gallery.tsx";
import DescProduct from "./descProduct/descProduct.tsx";
import {Helmet} from "react-helmet-async";
import { useParams} from "react-router-dom";
import {useSingleProductQuery} from "../../redux/services/singleProduct.ts";
// import {useEffect} from "react";
import ErrorPage from "../../routes/errorPage/errorPage.tsx";
// import {useEffect} from "react";
// import {useState} from "react";
// import {useSearchProductsQuery} from "../../redux/services/searchProducts.ts";


const OneProduct = () => {

    const { id } = useParams<{ id: string }>();

    // Преобразуем param в число
    // const idProduct = id ? Number(param) : undefined;





    const { data, error, isLoading } =
        useSingleProductQuery({
            id: Number(id)
        }, {
            refetchOnMountOrArgChange: true,
        });


    // useEffect(()=> {
    //     console.log('data', data);
    // }, [data]);



    return (
        <section className={styles.oneProduct}>

            {
                data &&
                (
                    <Helmet>
                        <title> {data?.title} | Goods4you</title>
                    </Helmet>
                )
            }

            {
                isLoading && <p>Loading...</p>
            }

            {
                error && <ErrorPage/>
            }

            {
                data &&
                    <article className={styles.container}>
                        <Gallery images={data.images}/>
                        <DescProduct data={data}/>
                    </article>
            }

        </section>
    );
};

export default OneProduct;
