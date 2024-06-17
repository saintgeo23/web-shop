import { FC, useEffect, useRef } from "react";
import { ProductList } from '../../widgets/ProductList/ProductList';
import { useProducts } from "./lib/useProducts";
import './Products.scss';

export const Products : FC = () => {
    const pagesize = 15;
    const ref = useRef(null);
    const { products, getNextProducts } = useProducts(pagesize);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                getNextProducts();
            }
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => observer.disconnect();
    }, [getNextProducts]);

    return (
        <>
            <ProductList products={products}/>
            <hr ref={ref} className="products__intersector"/>
        </>
    );
}