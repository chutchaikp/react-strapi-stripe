import { useEffect, useState } from 'react';
import {
  MdFavorite,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

import { useParams } from 'react-router-dom';
import Product from '../../components/Product';
import './item.scss';
const Item = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { itemId } = useParams();
  const product = products.find((p) => p.id === parseInt(itemId));

  const cat = product.attributes.category;
  const relatedProducts = products.filter(
    (p) => p.id !== parseInt(itemId) && p.attributes.category === cat
  );

  const [quantity, setQuantity] = useState(1);

  // filter() - return array
  // find() - return object
  useEffect(() => {});

  if (!product) {
    return <div>SOMETHING WENT WRONG!</div>;
  }

  return (
    <div className="item">
      <div className="wrapper">
        <div className="img">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              product.attributes.image.data.attributes.formats.medium.url
            }
            alt=""
          />
        </div>
        <div className="detail">
          <div className="name">
            <h2> {product.attributes.name} </h2>
          </div>
          <div className="price">฿ {product.attributes.price}</div>
          <div className="desc">{product.attributes.shortDescription}</div>
          <div className="descAlt">{product.attributes.longDescription}</div>

          <div className="add">
            <div className="quantity">
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
              <span className="num">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div className="addToCart">
              <button onClick={() => dispatch(addItem({ product, quantity }))}>
                ADD TO CART
              </button>
            </div>

            {/*  */}
            {/* */}
          </div>

          <div className="addTo">
            <MdOutlineFavoriteBorder />
            ADD TO WISHLIST
          </div>
          <div className="cat">CATEGORY {product.attributes?.category}</div>
        </div>
      </div>

      {/* REVIEW */}
      <div className="review">
        <h2>REVIEWS</h2>
        <p> this is reviews </p>
      </div>

      {/* RELATED PRODUCT */}
      <div className="related">
        <h2>RELATED PRODUCTS</h2>
        <div className="items">
          {relatedProducts.map((p, idx) => {
            return (
              <div key={idx} className="item">
                <Product item={p} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Item;
