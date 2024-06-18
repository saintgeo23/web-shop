import React from "react";
import styles from './Quantity.module.scss';
import classNames from "classnames/bind";
import {QuantityButton} from "../../../types";

function Quantity({ count = 0, addCount, removeCount }: QuantityButton) {
    const cx = classNames.bind(styles);

    return (
        <div className={styles.quantity}>
            <div
                className={cx(`quantity__button btn btn-light fw-medium`)}
                onClick={removeCount}
            >-</div>

            <div className={cx(`quantity__count px-4 fw-medium`)}>{ count }</div>

            <div
                className={cx(`quantity__button btn btn-light fw-medium`)}
                onClick={addCount}
            >+</div>
        </div>
    )
}

export default Quantity;
