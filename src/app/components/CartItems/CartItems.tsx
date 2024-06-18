import React, {useState} from "react";
import styles from './CartItems.module.scss';
import classNames from "classnames/bind";
import CartCard from "../CartCard/CartCard";

function CartItems() {
    const cx = classNames.bind(styles);

    const [items, setItems] = useState([
        {
            name: 'Электрический чайник Monsher MK 301 Argent',
            image: 'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7026252520.jpg',
            quantity: 1,
        },

        {
            name: 'Электрический чайник Monsher MK 301 Argent',
            image: 'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7026252520.jpg',
            quantity: 1,
        },

        {
            name: 'Электрический чайник Monsher MK 301 Argent',
            image: 'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7026252520.jpg',
            quantity: 1,
        },

        {
            name: 'Электрический чайник Monsher MK 301 Argent',
            image: 'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7026252520.jpg',
            quantity: 1,
        }
    ]);

    function mutateCount(index: number, action: string) {
        setItems((items) => {
            const nItems = JSON.parse(JSON.stringify(items));

            if (nItems[index].quantity === 1 && action === 'remove') {
                nItems.splice(index, 1);

                return nItems;
            }

            if (action === 'add') nItems[index].quantity += 1;
            else nItems[index].quantity -= 1;

            return nItems;
        })
    }

    return (
        <div className={styles.cartItems}>
            <span className="fw-medium fs-5">Товар</span>

            { items.length ?

                <ul className={cx(`${styles['cart-items__list']} list-group mt-4`)}>
                    { items.map((item, i) => (
                        <li
                            className="list-group-item"
                            key={i}
                        >
                            <CartCard
                                name={item.name}
                                image={item.image}
                                mutateCount={mutateCount.bind(null, i)}
                                quantity={item.quantity}
                            />
                        </li>
                    )) }
                </ul>

                :

                <div className={`${styles['cart-items__no-items']} fs-2 my-4 text-center`}>Корзина пуста</div>
            }
        </div>
    )
}

export default CartItems;
