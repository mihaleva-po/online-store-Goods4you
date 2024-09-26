import styles from './catalog.module.css';
import DefaultButton from "../ui-components/button/defaultButton.tsx";
import React, {useEffect, useState} from "react";
import {useDebounce} from 'use-debounce';
import {useSearchProductsQuery} from '../../redux/services/searchProducts.ts';
import ItemsCards from "./itemsCards/itemsCards.tsx";
import {ProductCatalog} from "../../types/type.ts";

const Catalog = () => {

    const LIMIT = 12;

    const [searchTerm, setSearchTerm] = useState('');
    const [skip, setSkip] = useState(0);
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

    const [allProducts, setAllProducts] = useState<ProductCatalog[]>([]);

    const {data, error, isLoading} =
        useSearchProductsQuery({
            q: debouncedSearchTerm,
            limit: LIMIT,
            skip,
        }, {
            refetchOnMountOrArgChange: true,
        });

    useEffect(() => {
        setSkip(0);
        setAllProducts([]);
        if (data) {
            setAllProducts(prevProducts => [...prevProducts, ...data.products]);
        }
    }, [data]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleShowMore = () => {
        if (data && skip + LIMIT < data?.total) {
            setSkip((prevSkip) => prevSkip + LIMIT);
        }
    };

    return (
        <section id="catalog" className={styles.catalog}>
            <div className={styles.container}>
                <h2>Catalog</h2>
                <input className={styles.search} type="search" placeholder={"Search by title"}
                       value={searchTerm} onChange={handleSearchChange}/>

                <div className={styles.isLoading}>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error fetching products</p>}
                </div>

                {
                    allProducts !== undefined ?
                        <ItemsCards data={allProducts}/>
                        : null
                }

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
