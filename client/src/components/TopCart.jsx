import { useEffect, useState } from 'react';
import { MdAdd, MdClose, MdRemove } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  decreaseQuantity,
  increseQuantity,
  removeItem,
  resetItems,
} from '../redux/cartSlice';
import './topCart.scss';

const TopCart = ({ onClose }) => {
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    try {
      const _subtotal = items.reduce((acc, val) => {
        const total = acc + val.quantity * val.product.attributes.price;
        return total;
      }, 0);
      setSubtotal(_subtotal);
    } catch (error) {
      debugger;
    }
  }, [items]);

  return (
    <div className="topCart">
      <div className="wrapper">
        <div className="head">
          <div className="title">SHOPPING BAG( {items.length} )</div>
          <div className="close">
            <MdClose onClick={() => onClose()} />
          </div>
        </div>
        <div className="lists">
          {items.map((it, idx) => (
            <div className="list" key={idx}>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  it.product.attributes.image.data.attributes.formats.thumbnail
                    .url
                }
                alt=""
              />
              <div className="details">
                <div className="title">
                  <div className="text">{it.product.attributes.name}</div>
                  <div
                    className="remove"
                    onClick={() => dispatch(removeItem(it))}
                  >
                    <MdClose />
                  </div>
                </div>
                <div className="desc">
                  {it.product.attributes.shortDescription}
                </div>
                <div className="total">
                  <div className="quantity">
                    <button
                      onClick={() => dispatch(decreaseQuantity(it.product))}
                    >
                      -
                    </button>
                    <span>{it.quantity}</span>
                    <button
                      onClick={() => dispatch(increseQuantity(it.product))}
                    >
                      +
                    </button>
                  </div>
                  <div className="price"> ฿ {it.product.attributes.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <div className="text">SUBTOTAL</div>
          <div className="price">
            {' '}
            <b> ฿ </b> {subtotal}
          </div>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              onClose();
              navigate('/checkout');
            }}
          >
            CHECKOUT
          </button>
        </div>

        <div className="reset">
          <button
            onClick={() => {
              dispatch(resetItems());
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopCart;
