import React, { FC } from 'react';
import { ShortProductInfoProps } from './types';
import './ShortProductInfo.scss'

export const ShortProductInfo: FC<ShortProductInfoProps> = ({ price, photo, title, description, oldPrice, style}) => {
  return (
    <div className="card col-md-2" style={style}>
      <div className='product__imageContainer'>
        {photo && <img src={photo} className='product__image'></img> }
      </div>
      
      <div className="card-body margin-left">
        <h5 className="card-title shortProductInfo__title">
          {title}
        </h5>
        <div className="card-text">
          <p className='shortProductInfo__description'>
            {description}
          </p>
          <div className='shortProductInfo__cost'>
            {price > 0 && <span className='text-success'><span className='fw-bold'>{price}</span>₽</span>}
            {oldPrice && <span className="text-decoration-line-through fw-light text-muted"><small>{oldPrice}</small></span>}
          </div>
        </div>
      </div>
  </div>
  );
}