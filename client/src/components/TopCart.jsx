import { MdAdd, MdClose, MdRemove } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  decreaseQuantity,
  increseQuantity,
  resetItems,
} from '../redux/cartSlice';
import './topCart.scss';

const TopCart = ({ onClose }) => {
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
                  <div className="remove">
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
                  <div className="price">$ {it.product.attributes.price}</div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="list">
            <img
              src="http://localhost:1337/uploads/thumbnail_light_mens_jeans_with_rips_613549_zoom_a394564af5.jpg?updated_at=2023-03-07T01:13:17.335Z"
              alt=""
            />
            <div className="details">
              <div className="title">
                <div className="text">Evening Text Shirt</div>
                <div className="remove">
                  <MdClose />
                </div>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                aliquam necessitatibus, tempore nemo dignissimos dicta pariatur
                quam vero qui voluptate?
              </div>
              <div className="total">
                <div className="quantity">
                  <button>
                    <MdRemove />
                  </button>
                  <span>5</span>
                  <button>
                    <MdAdd />
                  </button>
                </div>
                <div className="price">$20</div>
              </div>
            </div>
          </div>
           */}
        </div>
        <div className="subtotal">
          <div className="text">SUBTOTAL</div>
          <div className="price">$60</div>
        </div>
        <div className="btn">
          <button onClick={() => navigate('/checkout')}>CHECKOUT</button>
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
