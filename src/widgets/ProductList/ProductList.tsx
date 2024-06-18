import { FC } from "react"
import { ProductListProps } from "./types"
import { ShortProductInfo } from "../../features/ShortProductInfo/ShortProductInfo"

export const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
    <div className="container-fluid">
        <div className="row">
            {products.map((product) => {
                return <ShortProductInfo style={{margin: "5px"}} key={product.id} price={product.price} description={product.description} 
                photo={product.photo} title={product.name} oldPrice={product.oldPrice}/>     
            })}
        </div>
    </div>
   )
}