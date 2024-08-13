import styles from './catalog.module.css';
import DefaultButton from "../ui-components/button/defaultButton.tsx";
import React, {useEffect, useState} from "react";
import { useDebounce } from 'use-debounce';
import {Product, useSearchProductsQuery} from '../../redux/services/searchProducts.ts';
import ItemsCards from "./itemsCards/itemsCards.tsx";
const Catalog = () => {

    const LIMIT = 12;

    const [searchTerm, setSearchTerm] = useState('');
    const [skip, setSkip] = useState(0);
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

    const [allProducts, setAllProducts] = useState<Product[]>([]);


    const { data, error, isLoading, isFetching } =
        useSearchProductsQuery({
        q: debouncedSearchTerm,
        limit: LIMIT,
        skip,
    }, {
        refetchOnMountOrArgChange: true,
    });


    useEffect(() => {
        if (data) {
            setAllProducts(prevProducts => [...prevProducts, ...data.products]);
        }
    }, [data]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setSkip(0);
        setAllProducts([]);  // Сброс списка товаров при новом поиске
    };

    const handleShowMore = () => {
        if (data && skip + LIMIT < data.total) {
            setSkip((prevSkip) => prevSkip + LIMIT);
        }
    };

    return (
        <section id={"catalog"} className={styles.catalog}>
            <div className={styles.container}>
                <h1>Catalog</h1>
                <input className={styles.search} type="search" placeholder={"Search by title"}
                       value={searchTerm} onChange={handleSearchChange}/>

                {isLoading && <p>Loading...</p>}
                {error && <p>Error fetching products</p>}

                {
                    allProducts !== undefined ?
                        <ItemsCards data={allProducts}/>
                        : null
                }

                {isFetching && <p>Loading more...</p>}
                {data && skip + LIMIT < data.total &&
                    (
                    <div onClick={handleShowMore} className={styles.containerBtn}>
                        <DefaultButton text={"Show more"}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Catalog;
