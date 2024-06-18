import React from "react";
import styles from './CartCard.module.scss';
import {CartCardProps} from "../../../types";
import classNames from "classnames/bind";
import Quantity from "../Quantity/Quantity";

function CartCard({ name, image, mutateCount, quantity }: CartCardProps) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('cart-card d-flex gap-4')}>
            <figure className={cx(`${styles['cart-card__image']} mb-0`)}>
                <img src={image} className="img-thumbnail img-fluid" alt="" />
            </figure>

            <div className={cx('cart-card__wrapper')}>
                <div className={cx('cart-card__name fs-4 fw-medium')}>{ name }</div>

                <div className={cx('cart-card__price fs-5 my-4')}>500$</div>

                <Quantity
                    count={quantity}
                    addCount={() => mutateCount('add')}
                    removeCount={() => mutateCount('remove')}
                />
            </div>
        </div>
    )
}

export default CartCard;
