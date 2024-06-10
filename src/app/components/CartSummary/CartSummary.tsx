import React from "react";
import styles from './CartSummary.module.scss';
import classNames from "classnames/bind";

function CartSummary() {
    const cx = classNames.bind(styles);

    return (
        <div className="cart-summary py-4 d-flex justify-content-end">
            <div className={cx(`${styles['cart-summary__wrapper']} d-grid`)}>
                <ul className={cx('cart-summary__list p-0')}>
                    <li className={cx('cart-summary__item border-bottom d-flex justify-content-between fs-5 pb-4')}>
                        <strong>Сумма:</strong>

                        <span>1500$</span>
                    </li>

                    <li className={cx('cart-summary__item border-bottom d-flex justify-content-between fs-5 mt-4 pb-4')}>
                        <strong>Скидка:</strong>

                        <span>50$</span>
                    </li>

                    <li className={cx('cart-summary__item d-flex justify-content-between fs-5 mt-4 pb-4')}>
                        <strong>К Оплате:</strong>

                        <span className="fs-3">1450$</span>
                    </li>
                </ul>

                <button
                    type="button"
                    className="btn btn-primary d-block"
                >Оплатить</button>
            </div>
        </div>
    )
}

export default CartSummary;
