import { useEffect, useState } from "react";
import { getProducts } from "../../../shared/api/products";
import { Product } from "../../../entities/Product/Product";

export const useProducts = (pageSize : number) => {
    const [products, setProducts] = useState<Product[]>([])
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    
    useEffect(() => {
        getProducts(pageSize, pageNumber)
            .then(data => { 
               setProducts(data.data)
               setMaxPage(data.pagination.pageSize); 
            });
    }, []);

    const getNextProducts = () => {
        if (pageNumber > maxPage) {
            return;
        }
        setPageNumber(pageNumber+1);
        getProducts(pageSize, pageNumber+1)
            .then(data => setProducts((products) => [...products, ...data.data]));            
      }

    return {
        products,
        getNextProducts
    }
}